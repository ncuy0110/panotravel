import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
} from '@nestjs/common';
import { ImageService } from './image.service';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { Req, UseInterceptors } from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async create(
    @Req() req,
    @Param('zoneId') zoneId: string,
    @Body() createImageDto: CreateImageDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return await this.imageService.create(
      req.user.id,
      +zoneId,
      createImageDto,
      file,
    );
  }

  @Get()
  findAll(@Param('zoneId') zoneId: string) {
    return this.imageService.findAll(+zoneId);
  }

  @Get(':imageId')
  findOne(@Param('zoneId') zoneId: string, @Param('imageId') imageId: string) {
    return this.imageService.findOne(+zoneId, +imageId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImageDto: UpdateImageDto) {
    return this.imageService.update(+id, updateImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imageService.remove(+id);
  }
}
