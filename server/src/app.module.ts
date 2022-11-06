import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabasesModule } from './databases/databases.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ZoneModule } from './zone/zone.module';
import { ImageModule } from './image/image.module';
import { HotspotModule } from './hotspot/hotspot.module';
import { ConfigModule } from '@nestjs/config';
import { MinioClientModule } from './minio-client/minio-client.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabasesModule,
    UserModule,
    AuthModule,
    ZoneModule,
    ImageModule,
    HotspotModule,
    MinioClientModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
