import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AesEcbModule } from './aes-ecb/aes-ecb.module';
import { AesCbcModule } from './aes-cbc/aes-cbc.module';
import { AesCtrModule } from './aes-ctr/aes-ctr.module';
import { AesOfbModule } from './aes-ofb/aes-ofb.module';
import { AesCfbModule } from './aes-cfb/aes-cfb.module';
import { AesGmcModule } from './aes-gmc/aes-gmc.module';
import { AesCcmModule } from './aes-ccm/aes-ccm.module';

@Module({
  imports: [AesEcbModule, AesCbcModule, AesCtrModule, AesOfbModule, AesCfbModule, AesGmcModule, AesCcmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
