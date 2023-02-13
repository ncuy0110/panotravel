import { IsNotEmpty, IsString } from "class-validator";

export class GetUrlPutObjectDto {
    @IsString()
    @IsNotEmpty()
    objectName: string;
}