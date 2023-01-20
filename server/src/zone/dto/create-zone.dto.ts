import { IsNotEmpty, IsString, IsUrl, } from "class-validator";

export class CreateZoneDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsUrl()
    location: string = null;

    @IsNotEmpty()
    @IsString()
    address: string = null;

    @IsString()
    desc: string = "";
}
