import { Controller, Get, Param, UsePipes } from '@nestjs/common';
import { ValidationPipe } from './validation.pipe';

@Controller('example')
export class ExampleController {
  @Get(':id')
  @UsePipes(ValidationPipe)
  public getExample(@Param('id') id: number) {
    // Your logic here
  }
}
