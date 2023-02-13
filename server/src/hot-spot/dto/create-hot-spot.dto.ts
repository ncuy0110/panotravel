import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class CreateHotSpotDto {
    @IsNumber()
    @IsNotEmpty()
    pitch: number;

    @IsNotEmpty()
    @IsNumber()
    yaw: number;

    @IsNotEmpty()
    @IsNumber()
    hfov: number;

    @IsNotEmpty()
    @IsNumber()
    redirectId: number;
}
