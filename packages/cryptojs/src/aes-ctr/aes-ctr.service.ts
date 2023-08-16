import { Injectable } from '@nestjs/common';
import { CreateAesCtrDto } from './dto/create-aes-ctr.dto';
import { UpdateAesCtrDto } from './dto/update-aes-ctr.dto';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class AesCtrService {
  private readonly key = CryptoJS.enc.Hex.parse(process.env.AES_KEY); // 256位密钥
  private readonly iv = CryptoJS.enc.Hex.parse(process.env.AES_IV); // 初始化向量
  private readonly counterValue = CryptoJS.lib.WordArray.create(
    [0x11223344, 0x55667788],
    8,
  ); // 自定义计数器值

  encrypt(text: string): string {
    const ciphertext = CryptoJS.AES.encrypt(text, this.key, {
      iv: this.iv,
      counter: this.counterValue,
      mode: CryptoJS.mode.CTR,
      padding: CryptoJS.pad.NoPadding,
    });
    return ciphertext.toString();
  }

  decrypt(encryptedText: string): string {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedText, this.key, {
      iv: this.iv,
      counter: this.counterValue,
      mode: CryptoJS.mode.CTR,
      padding: CryptoJS.pad.NoPadding,
    });
    return CryptoJS.enc.Utf8.stringify(decryptedBytes);
  }

  create(createAesCtrDto: CreateAesCtrDto) {
    return 'This action adds a new aesCtr';
  }

  findAll() {
    return `This action returns all aesCtr`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aesCtr`;
  }

  update(id: number, updateAesCtrDto: UpdateAesCtrDto) {
    return `This action updates a #${id} aesCtr`;
  }

  remove(id: number) {
    return `This action removes a #${id} aesCtr`;
  }
}
