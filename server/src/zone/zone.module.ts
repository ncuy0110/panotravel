import { Zone } from './entities/zone.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ZoneService } from './zone.service';
import { ZoneController } from './zone.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Zone])],
  controllers: [ZoneController],
  providers: [ZoneService],
})
export class ZoneModule {}
