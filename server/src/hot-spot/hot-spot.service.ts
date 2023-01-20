import { Repository } from 'typeorm/repository/Repository';
import { HotSpot } from './entities/hot-spot.entity';
import { Injectable } from '@nestjs/common';
import { CreateHotSpotDto } from './dto/create-hot-spot.dto';
import { UpdateHotSpotDto } from './dto/update-hot-spot.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class HotSpotService {
  constructor(
    @InjectRepository(HotSpot)
    private readonly hotSpotRepo: Repository<HotSpot>,
  ) {}
  async create(zoneId: number, imageId: number, dto: CreateHotSpotDto) {
    const hotSpot = this.hotSpotRepo.create({...dto, parent: {id: }})
    return 'This action adds a new hotSpot';
  }

  findAll() {
    return `This action returns all hotSpot`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hotSpot`;
  }

  update(id: number, updateHotSpotDto: UpdateHotSpotDto) {
    return `This action updates a #${id} hotSpot`;
  }

  remove(id: number) {
    return `This action removes a #${id} hotSpot`;
  }
}
