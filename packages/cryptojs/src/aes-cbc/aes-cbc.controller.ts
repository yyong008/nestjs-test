import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AesCbcService } from './aes-cbc.service';
import { CreateAesCbcDto } from './dto/create-aes-cbc.dto';
import { UpdateAesCbcDto } from './dto/update-aes-cbc.dto';

@Controller('aes-cbc')
export class AesCbcController {
  constructor(private readonly aesCbcService: AesCbcService) {}

  @Post()
  create(@Body() createAesCbcDto: CreateAesCbcDto) {
    return this.aesCbcService.create(createAesCbcDto);
  }

  @Get()
  findAll() {
    return this.aesCbcService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aesCbcService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAesCbcDto: UpdateAesCbcDto) {
    return this.aesCbcService.update(+id, updateAesCbcDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aesCbcService.remove(+id);
  }
}
