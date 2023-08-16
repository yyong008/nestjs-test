import { Module } from '@nestjs/common';
import { AesCfbService } from './aes-cfb.service';
import { AesCfbController } from './aes-cfb.controller';

@Module({
  controllers: [AesCfbController],
  providers: [AesCfbService]
})
export class AesCfbModule {}
