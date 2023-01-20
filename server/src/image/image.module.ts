import { MinioClientModule } from './../minio-client/minio-client.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';
import { Image } from './entities/image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Image]), MinioClientModule],
  controllers: [ImageController],
  providers: [ImageService],
})
export class ImageModule {}
