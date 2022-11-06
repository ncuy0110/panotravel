import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { MinioClientService } from './minio-client.service';
import { MinioModule } from 'nestjs-minio-client';
import { MinioClientController } from './minio-client.controller';
@Module({
  imports: [
    ConfigModule,
    MinioModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          endPoint: config.get('MINIO_ENDPOINT'),
          port: config.get('MINIO_PORT')
            ? +(+config.get('MINIO_PORT'))
            : undefined,
          useSSL: config.get('MINIO_SSL') == 'true' ? true : false,
          accessKey: config.get('MINIO_ACCESS_KEY'),
          secretKey: config.get('MINIO_SECRET_KEY'),
        };
      },
    }),
  ],
  providers: [MinioClientService],
  exports: [MinioClientService],
  controllers: [MinioClientController],
})
export class MinioClientModule {}
