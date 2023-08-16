import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AesCcmService } from './aes-ccm.service';
import { CreateAesCcmDto } from './dto/create-aes-ccm.dto';
import { UpdateAesCcmDto } from './dto/update-aes-ccm.dto';

@Controller('aes-ccm')
export class AesCcmController {
  constructor(private readonly aesCcmService: AesCcmService) {}

  @Post()
  create(@Body() createAesCcmDto: CreateAesCcmDto) {
    return this.aesCcmService.create(createAesCcmDto);
  }

  @Get()
  findAll() {
    return this.aesCcmService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aesCcmService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAesCcmDto: UpdateAesCcmDto) {
    return this.aesCcmService.update(+id, updateAesCcmDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aesCcmService.remove(+id);
  }
}
