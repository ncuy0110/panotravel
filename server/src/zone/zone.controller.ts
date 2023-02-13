import { AuthenticationGuard } from './../auth/guards/auth.guard';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ZoneService } from './zone.service';
import { CreateZoneDto } from './dto/create-zone.dto';
import { UpdateZoneDto } from './dto/update-zone.dto';

@Controller()
export class ZoneController {
  constructor(private readonly zoneService: ZoneService) {}

  @UseGuards(AuthenticationGuard)
  @Post()
  async create(@Req() req, @Body() dto: CreateZoneDto) {
    return await this.zoneService.create(req.user.id, dto);
  }

  @Get()
  @UseGuards(AuthenticationGuard)
  async findAll(@Req() req) {
    return await this.zoneService.findAll(req.user.id);
  }

  @Get(':id')
  @UseGuards(AuthenticationGuard)
  async findOne(@Req() req, @Param('id') id: string) {
    return await this.zoneService.findOne(req.user.id, +id);
  }

  @Patch(':id')
  @UseGuards(AuthenticationGuard)
  update(@Param('id') id: string, @Body() updateZoneDto: UpdateZoneDto) {
    return this.zoneService.update(+id, updateZoneDto);
  }

  @Delete(':id')
  @UseGuards(AuthenticationGuard)
  remove(@Param('id') id: string) {
    return this.zoneService.remove(+id);
  }
}
