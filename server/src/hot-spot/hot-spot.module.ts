import { HotSpot } from './entities/hot-spot.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { HotSpotService } from './hot-spot.service';
import { HotSpotController } from './hot-spot.controller';

@Module({
  imports: [TypeOrmModule.forFeature([HotSpot])],
  controllers: [HotSpotController],
  providers: [HotSpotService],
  exports: [HotSpotService],
})
export class HotSpotModule {}
