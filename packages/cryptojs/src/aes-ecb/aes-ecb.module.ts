import { Module } from '@nestjs/common';
import { AesEcbService } from './aes-ecb.service';
import { AesEcbController } from './aes-ecb.controller';

@Module({
  controllers: [AesEcbController],
  providers: [AesEcbService]
})
export class AesEcbModule {}
