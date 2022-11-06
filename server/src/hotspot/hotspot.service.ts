import { Injectable } from '@nestjs/common';
import { CreateHotspotDto } from './dto/create-hotspot.dto';
import { UpdateHotspotDto } from './dto/update-hotspot.dto';

@Injectable()
export class HotspotService {
  create(createHotspotDto: CreateHotspotDto) {
    return 'This action adds a new hotspot';
  }

  findAll() {
    return `This action returns all hotspot`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hotspot`;
  }

  update(id: number, updateHotspotDto: UpdateHotspotDto) {
    return `This action updates a #${id} hotspot`;
  }

  remove(id: number) {
    return `This action removes a #${id} hotspot`;
  }
}
