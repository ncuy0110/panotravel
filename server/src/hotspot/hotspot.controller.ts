import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HotspotService } from './hotspot.service';
import { CreateHotspotDto } from './dto/create-hotspot.dto';
import { UpdateHotspotDto } from './dto/update-hotspot.dto';

@Controller('hotspot')
export class HotspotController {
  constructor(private readonly hotspotService: HotspotService) {}

  @Post()
  create(@Body() createHotspotDto: CreateHotspotDto) {
    return this.hotspotService.create(createHotspotDto);
  }

  @Get()
  findAll() {
    return this.hotspotService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hotspotService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHotspotDto: UpdateHotspotDto) {
    return this.hotspotService.update(+id, updateHotspotDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hotspotService.remove(+id);
  }
}
