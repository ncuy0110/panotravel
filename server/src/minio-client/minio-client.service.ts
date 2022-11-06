import { Injectable, Logger } from '@nestjs/common';
import { MinioService } from 'nestjs-minio-client';

@Injectable()
export class MinioClientService {
  private readonly logger: Logger;
  private baseBucket: string;

  public get client() {
    return this.minio.client;
  }

  constructor(
    private readonly minio: MinioService,
  ) {
    this.logger = new Logger('MinioStorageService');
    this.baseBucket = process.env.MINIO_BUCKET;
  }

  public async getUrlPutObject(
    objectName: string,
    expiry: number = 15 * 60,
    bucketName: string = this.baseBucket,
  ) {
    try {
      const ext = objectName.substring(
        objectName.lastIndexOf('.'),
        objectName.length,
      );
      objectName =
        objectName.substring(0, objectName.lastIndexOf('.')) +
        '_' +
        new Date().toJSON().slice(0, 22) +
        ext;
      const url = await this.client.presignedPutObject(
        bucketName,
        objectName,
        expiry,
      );
      return {
        url,
        objectName,
      };
    } catch (err) {
      console.log(err);
      throw err;
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
