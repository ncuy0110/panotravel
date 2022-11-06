import { AuthPayload } from './../interfaces/auth-payload.interface';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(UserService)
    private userService: UserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: ""+process.env.ACCESS_TOKEN_SECRET,
    });
  }

  async validate(payload: AuthPayload) {
    const user = await this.userService.findOneByEmail(payload.email);
    if (!user) {
        throw new UnauthorizedException();
    }
    delete user.password;
    return user;
  }
}