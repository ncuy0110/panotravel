import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HotSpotService } from './hot-spot.service';
import { CreateHotSpotDto } from './dto/create-hot-spot.dto';
import { UpdateHotSpotDto } from './dto/update-hot-spot.dto';

@Controller()
export class HotSpotController {
  constructor(private readonly hotSpotService: HotSpotService) {}

  @Post()
  async create(
    @Param('zoneId') zoneId: number,
    @Param('imageId') imageId: number,
    @Body() createHotSpotDto: CreateHotSpotDto,
  ) {
    return await this.hotSpotService.create(createHotSpotDto);
  }

  @Get()
  findAll() {
    return this.hotSpotService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hotSpotService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHotSpotDto: UpdateHotSpotDto) {
    return this.hotSpotService.update(+id, updateHotSpotDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hotSpotService.remove(+id);
  }
}
