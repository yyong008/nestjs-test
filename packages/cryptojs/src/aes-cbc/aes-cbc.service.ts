import { Injectable } from '@nestjs/common';
import { CreateAesCbcDto } from './dto/create-aes-cbc.dto';
import { UpdateAesCbcDto } from './dto/update-aes-cbc.dto';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class AesCbcService {
  private readonly key = CryptoJS.enc.Hex.parse(process.env.AES_KEY); // 256位密钥
  private readonly iv = CryptoJS.enc.Hex.parse(process.env.AES_IV); // 128位初始化向量

  encrypt(text: string): string {
    const ciphertext = CryptoJS.AES.encrypt(text, this.key, {
      iv: this.iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    return ciphertext.toString();
  }

  decrypt(encryptedText: string): string {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedText, this.key, {
      iv: this.iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    return decryptedBytes.toString(CryptoJS.enc.Utf8);
  }

  create(createAesCbcDto: CreateAesCbcDto) {
    return 'This action adds a new aesCbc';
  }

  findAll() {
    return `This action returns all aesCbc`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aesCbc`;
  }

  update(id: number, updateAesCbcDto: UpdateAesCbcDto) {
    return `This action updates a #${id} aesCbc`;
  }

  remove(id: number) {
    return `This action removes a #${id} aesCbc`;
  }
}
