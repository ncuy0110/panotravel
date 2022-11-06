import { Controller, Get, Param } from '@nestjs/common';
import { MinioClientService } from './minio-client.service';

@Controller('minio-client')
export class MinioClientController {
  constructor(private readonly minioClientService: MinioClientService) {}

  @Get('/presigned-get-url/:objectName')
  async getPresignedGetUrl(@Param('objectName') objectName: string) {
    return await this.minioClientService.getUrlGetObject(objectName);
  }
}
