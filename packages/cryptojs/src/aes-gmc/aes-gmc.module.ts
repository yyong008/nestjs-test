import { Module } from '@nestjs/common';
import { AesGmcService } from './aes-gmc.service';
import { AesGmcController } from './aes-gmc.controller';

@Module({
  controllers: [AesGmcController],
  providers: [AesGmcService]
})
export class AesGmcModule {}
