import { GetUrlPutObjectDto } from './dto/get-url-put-object.dto';
import { AuthenticationGuard } from 'src/auth/guards/auth.guard';
import { MinioClientService } from './minio-client.service';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { Public } from 'src/auth/decorators/public.decorator';
import { Get, Param } from '@nestjs/common/decorators';

@Controller('minio-client')
export class MinioClientController {
  constructor(private minioService: MinioClientService) {}

  @Public()
  @Get('/presigned-get-object/:objectName')
  async requestPresignedGetObject(@Param('objectName') objectName: string) {
    return await this.minioService.getUrlGetObject(objectName);
  }
}