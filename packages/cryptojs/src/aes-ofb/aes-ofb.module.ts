import { Module } from '@nestjs/common';
import { AesOfbService } from './aes-ofb.service';
import { AesOfbController } from './aes-ofb.controller';

@Module({
  controllers: [AesOfbController],
  providers: [AesOfbService]
})
export class AesOfbModule {}
