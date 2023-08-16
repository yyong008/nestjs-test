import { Module } from '@nestjs/common';
import { AesCcmService } from './aes-ccm.service';
import { AesCcmController } from './aes-ccm.controller';

@Module({
  controllers: [AesCcmController],
  providers: [AesCcmService]
})
export class AesCcmModule {}
