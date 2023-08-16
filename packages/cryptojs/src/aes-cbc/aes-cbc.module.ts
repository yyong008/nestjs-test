import { Module } from '@nestjs/common';
import { AesCbcService } from './aes-cbc.service';
import { AesCbcController } from './aes-cbc.controller';

@Module({
  controllers: [AesCbcController],
  providers: [AesCbcService]
})
export class AesCbcModule {}
