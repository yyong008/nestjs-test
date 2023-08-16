import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AesCfbService } from './aes-cfb.service';
import { CreateAesCfbDto } from './dto/create-aes-cfb.dto';
import { UpdateAesCfbDto } from './dto/update-aes-cfb.dto';

@Controller('aes-cfb')
export class AesCfbController {
  constructor(private readonly aesCfbService: AesCfbService) {}

  @Post()
  create(@Body() createAesCfbDto: CreateAesCfbDto) {
    return this.aesCfbService.create(createAesCfbDto);
  }

  @Get()
  findAll() {
    return this.aesCfbService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aesCfbService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAesCfbDto: UpdateAesCfbDto) {
    return this.aesCfbService.update(+id, updateAesCfbDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aesCfbService.remove(+id);
  }
}
