import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AesEcbService } from './aes-ecb.service';
import { CreateAesEcbDto } from './dto/create-aes-ecb.dto';
import { UpdateAesEcbDto } from './dto/update-aes-ecb.dto';

@Controller('aes-ecb')
export class AesEcbController {
  constructor(private readonly aesEcbService: AesEcbService) {}

  @Post()
  create(@Body() createAesEcbDto: CreateAesEcbDto) {
    return this.aesEcbService.create(createAesEcbDto);
  }

  @Get()
  findAll() {
    return this.aesEcbService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aesEcbService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAesEcbDto: UpdateAesEcbDto) {
    return this.aesEcbService.update(+id, updateAesEcbDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aesEcbService.remove(+id);
  }
}
