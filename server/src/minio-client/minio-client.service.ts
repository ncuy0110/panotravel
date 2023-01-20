import { FileHelper } from './file.helper';
import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { MinioService } from 'nestjs-minio-client';

@Injectable()
export class MinioClientService {
  private readonly logger: Logger;
  private baseBucket: string;

  public get client() {
    return this.minio.client;
  }

  constructor(private readonly minio: MinioService) {
    this.logger = new Logger('MinioStorageService');
    this.baseBucket = process.env.MINIO_BUCKET;
  }

  async putFile(
    file: Express.Multer.File,
    bucket: string = this.baseBucket,
  ): Promise<string> {
    try {
      const newName = FileHelper.rename(file.originalname);
      await this.client.putObject(this.baseBucket, newName, file.buffer);
      return newName;
    } catch (e) {
      console.log(e);
      throw new HttpException(
        'upload image failed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  public async getUrlGetObject(
    objectName: string,
    expiry: number = 24 * 60 * 60,
    bucketName: string = this.baseBucket,
  ) {
    try {
      const url = await this.client.presignedGetObject(
        bucketName,
        objectName,
        expiry,
      );
      return url;
    } catch (err) {
      throw err;
    }
  }
}
