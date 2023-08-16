import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AesCtrService } from './aes-ctr.service';
import { CreateAesCtrDto } from './dto/create-aes-ctr.dto';
import { UpdateAesCtrDto } from './dto/update-aes-ctr.dto';

@Controller('aes-ctr')
export class AesCtrController {
  constructor(private readonly aesCtrService: AesCtrService) {}

  @Post()
  create(@Body() createAesCtrDto: CreateAesCtrDto) {
    return this.aesCtrService.create(createAesCtrDto);
  }

  @Get()
  findAll() {
    return this.aesCtrService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aesCtrService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAesCtrDto: UpdateAesCtrDto) {
    return this.aesCtrService.update(+id, updateAesCtrDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aesCtrService.remove(+id);
  }
}
