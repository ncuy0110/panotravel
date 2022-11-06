import { RefreshTokenService } from './refresh-token.service';
import { RefreshToken } from './entities/refresh-token.entity';
import { JwtService } from '@nestjs/jwt';
import { hashPassword } from './../user/password.helper';
import { UserService } from './../user/user.service';
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { User } from 'src/user/entities/user.entity';
import { AuthPayload } from './interfaces/auth-payload.interface';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @Inject(UserService)
    private readonly userService: UserService,
    @Inject(RefreshTokenService)
    private readonly refreshTokenService: RefreshTokenService,
  ) {}
  async authentication(email: string, password_: string): Promise<any> {
    try {
      const user = await this.userService.login(new LoginDto(email, password_));
      if (!user) {
        return false;
      }
      const { password, ...result } = user;
      return result;
    } catch (e) {
      throw new HttpException(
        { message: 'username or password is incorrect' },
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  async register(dto: RegisterDto) {
    return await this.userService.create(dto);
  }

  async login(user: User) {
    const payload: AuthPayload = {
      id: user.id,
      email: user.email,
      name: user.name,
    };

    return {
      accessToken: this.jwtService.sign(payload),
      refreshToken: await this.refreshTokenService.create(payload),
    };
  }

  async logout(refreshToken: string, userId: number) {
    await this.refreshTokenService.deleteRefreshToken(refreshToken, userId);
    return { message: 'success' };
  }

  async getNewAccessToken(refreshToken: string) {
    let payload: AuthPayload;
    try {
      payload = this.jwtService.verify(refreshToken, {
        secret: process.env.REFRESH_TOKEN_SECRET,
      });
    } catch (e) {
      throw new HttpException(
        { message: 'refresh token is invalid or expired' },
        HttpStatus.UNAUTHORIZED,
      );
    }
    const token = await this.refreshTokenService.findToken(
      refreshToken,
      payload.id,
    );
    if (!token) {
      throw new HttpException(
        { message: 'refresh token is invalid or expired' },
        HttpStatus.UNAUTHORIZED,
      );
    }

    const newAccessToken: string = this.jwtService.sign({
      id: payload.id,
      email: payload.email,
      name: payload.name,
    });

    return { accessToken: newAccessToken };
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
