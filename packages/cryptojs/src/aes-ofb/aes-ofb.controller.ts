import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AesOfbService } from './aes-ofb.service';
import { CreateAesOfbDto } from './dto/create-aes-ofb.dto';
import { UpdateAesOfbDto } from './dto/update-aes-ofb.dto';

@Controller('aes-ofb')
export class AesOfbController {
  constructor(private readonly aesOfbService: AesOfbService) {}

  @Post()
  create(@Body() createAesOfbDto: CreateAesOfbDto) {
    return this.aesOfbService.create(createAesOfbDto);
  }

  @Get()
  findAll() {
    return this.aesOfbService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aesOfbService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAesOfbDto: UpdateAesOfbDto) {
    return this.aesOfbService.update(+id, updateAesOfbDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aesOfbService.remove(+id);
  }
}
