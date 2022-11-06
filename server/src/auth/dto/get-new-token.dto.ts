import { IsNotEmpty, IsString } from 'class-validator';

export class NewAccessTokenRequest {
  @IsString()
  @IsNotEmpty()
  refreshToken: string;
}
