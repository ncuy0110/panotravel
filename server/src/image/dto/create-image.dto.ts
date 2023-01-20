import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateImageDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsNumberString()
  yaw: number;

  @IsOptional()
  @IsNumberString()
  pitch: number;

  @IsOptional()
  @IsNumberString()
  hfov: number;

  @IsOptional()
  @IsBoolean()
  isRoot: boolean;
}
