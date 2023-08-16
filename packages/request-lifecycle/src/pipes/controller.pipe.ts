import { Controller, Get, Param, UsePipes } from '@nestjs/common';
import { ValidationPipe } from './validation.pipe';

@Controller('cats')
@UsePipes(ValidationPipe)
export class CatsController {
  @Get(':id')
  public getCat(@Param('id') id: number) {
    // Your logic here
  }
}
