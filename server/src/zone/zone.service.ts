import { Repository } from 'typeorm/repository/Repository';
import { Zone } from './entities/zone.entity';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateZoneDto } from './dto/create-zone.dto';
import { UpdateZoneDto } from './dto/update-zone.dto';

@Injectable()
export class ZoneService {
  constructor(
    @InjectRepository(Zone)
    private readonly zoneRepo: Repository<Zone>,
  ) {}
  async create(userId: number, dto: CreateZoneDto) {
    const zone = this.zoneRepo.create({ ...dto, owner: { id: userId } });
    await this.zoneRepo.save(zone);
    return zone;
  }

  async findAll(userId: number) {
    return await this.zoneRepo.findBy({
      owner: { id: userId },
      deleted: false,
    });
  }

  async findOne(userId: number, id: number) {
    return await this.zoneRepo.findOneBy({
      owner: { id: userId },
      id,
      deleted: false,
    });
  }

  update(id: number, updateZoneDto: UpdateZoneDto) {
    return `This action updates a #${id} zone`;
  }

  remove(id: number) {
    return `This action removes a #${id} zone`;
  }
}
