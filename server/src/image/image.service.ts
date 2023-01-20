import { Repository } from 'typeorm/repository/Repository';
import { MinioClientService } from './../minio-client/minio-client.service';
import { Inject, Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Image } from './entities/image.entity';

@Injectable()
export class ImageService {
  constructor(
    @Inject(MinioClientService)
    private readonly mcService: MinioClientService,
    @InjectRepository(Image)
    private readonly imageRepo: Repository<Image>,
  ) {}

  async create(
    userId: number,
    zoneId: number,
    dto: CreateImageDto,
    file: Express.Multer.File,
  ) {
    const objectName = await this.mcService.putFile(file);
    const images = await this.imageRepo.findBy({
      zone: { id: zoneId },
      isRoot: true,
    });
    const image = this.imageRepo.create({
      ...dto,
      objectName,
      creator: { id: userId },
      zone: { id: zoneId },
    });
    if (images.length === 0) image.isRoot = true;
    await this.imageRepo.save(image);
    return image;
  }

  async findAll(zoneId: number) {
    return await this.imageRepo.findBy({ zone: { id: zoneId } });
  }

  async findOne(zoneId: number, imageId: number) {
    return await this.imageRepo.find({
      relations: ['hotSpots'],
      where: {
        zone: { id: zoneId },
        id: imageId,
      },
    });
  }

  update(id: number, updateImageDto: UpdateImageDto) {
    return `This action updates a #${id} image`;
  }

  remove(id: number) {
    return `This action removes a #${id} image`;
  }
}
