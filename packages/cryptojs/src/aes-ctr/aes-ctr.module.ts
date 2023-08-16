import { Module } from '@nestjs/common';
import { AesCtrService } from './aes-ctr.service';
import { AesCtrController } from './aes-ctr.controller';

@Module({
  controllers: [AesCtrController],
  providers: [AesCtrService]
})
export class AesCtrModule {}
