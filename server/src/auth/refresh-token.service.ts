import { AuthPayload } from './interfaces/auth-payload.interface';
import { JwtService } from '@nestjs/jwt';
import { Inject, Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RefreshToken } from './entities/refresh-token.entity';

@Injectable()
export class RefreshTokenService {
  constructor(
    @InjectRepository(RefreshToken)
    private refreshTokenRepository: Repository<RefreshToken>,
    @Inject(JwtService)
    private jwtService: JwtService,
  ) {}

  async create(payload: AuthPayload): Promise<string> {
    const token = this.jwtService.sign(payload, {
      secret: process.env.REFRESH_TOKEN_SECRET,
      expiresIn: process.env.REFRESH_TOKEN_EXPIRATION,
    });
    const refreshToken = this.refreshTokenRepository.create({
      userId: payload.id,
      refreshToken: token,
    });
    await this.refreshTokenRepository.save(refreshToken);
    return token;
  }

  async findToken(refreshToken: string, userId: number) {
    return await this.refreshTokenRepository.findOneBy({
      refreshToken,
      userId,
    });
  }

  async deleteRefreshToken(refreshToken: string, userId: number) {
    const tk = await this.refreshTokenRepository.findOneBy({
      refreshToken,
      userId,
      deleted: false,
    });

    if (!tk) {
      throw new HttpException(
        { message: 'refresh token is invalid' },
        HttpStatus.BAD_REQUEST,
      );
    }

    tk.deleted = true;
    await this.refreshTokenRepository.save(tk);
  }
}
