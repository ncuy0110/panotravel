import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabasesModule } from './databases/databases.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ZoneModule } from './zone/zone.module';
import { ImageModule } from './image/image.module';
import { ConfigModule } from '@nestjs/config';
import { MinioClientModule } from './minio-client/minio-client.module';
import { HotSpotModule } from './hot-spot/hot-spot.module';
import { APP_GUARD, RouterModule } from '@nestjs/core';
import { AuthenticationGuard } from './auth/guards/auth.guard';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabasesModule,
    UserModule,
    AuthModule,
    ZoneModule,
    ImageModule,
    HotSpotModule,
    MinioClientModule,
    RouterModule.register([
      {
        path: '/auth',
        module: AuthModule,
      },
      {
        path: '/user',
        module: UserModule,
      },
      {
        path: '/zone',
        module: ZoneModule,
        children: [
          {
            path: '/:zoneId/image',
            module: ImageModule,
            children: [
              {
                path: '/:imageId/hot-spot',
                module: HotSpotModule,
              },
            ],
          },
        ],
      },
    ]),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthenticationGuard,
    },
  ],
})
export class AppModule {}
