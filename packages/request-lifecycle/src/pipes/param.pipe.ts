// parse-int.pipe.ts
import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: any) {
    const parsedValue = parseInt(value, 10);
    if (isNaN(parsedValue)) {
      throw new BadRequestException('Invalid number');
    }
    return parsedValue;
  }
}

// example.controller.ts
// import { Controller, Get, Param, UsePipes } from '@nestjs/common';
// import { ParseIntPipe } from './parse-int.pipe';

// @Controller('example')
// export class ExampleController {
//   @Get(':id')
//   @UsePipes(ParseIntPipe)
//   public getExample(@Param('id') id: number) {
//     // id is now a parsed integer
//   }
// }
