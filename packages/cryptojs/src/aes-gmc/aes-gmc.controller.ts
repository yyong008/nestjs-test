import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AesGmcService } from './aes-gmc.service';
import { CreateAesGmcDto } from './dto/create-aes-gmc.dto';
import { UpdateAesGmcDto } from './dto/update-aes-gmc.dto';

@Controller('aes-gmc')
export class AesGmcController {
  constructor(private readonly aesGmcService: AesGmcService) {}

  @Post()
  create(@Body() createAesGmcDto: CreateAesGmcDto) {
    return this.aesGmcService.create(createAesGmcDto);
  }

  @Get()
  findAll() {
    return this.aesGmcService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aesGmcService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAesGmcDto: UpdateAesGmcDto) {
    return this.aesGmcService.update(+id, updateAesGmcDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aesGmcService.remove(+id);
  }
}
