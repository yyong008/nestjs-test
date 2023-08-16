import { Injectable } from '@nestjs/common';
import { CreateAesEcbDto } from './dto/create-aes-ecb.dto';
import { UpdateAesEcbDto } from './dto/update-aes-ecb.dto';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class AesEcbService {
  private readonly key = CryptoJS.enc.Utf8.parse('1234567890123456'); // 16字节密钥

  // simple encrypt: aes
  encrypt(text: string): string {
    const ciphertext = CryptoJS.AES.encrypt(text, this.key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    });
    return ciphertext.toString();
  }

  decrypt(encryptedText: string): string {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedText, this.key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    });
    return decryptedBytes.toString(CryptoJS.enc.Utf8);
  }
  create(createAesEcbDto: CreateAesEcbDto) {
    return 'This action adds a new aesEcb';
  }

  findAll() {
    return `This action returns all aesEcb`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aesEcb`;
  }

  update(id: number, updateAesEcbDto: UpdateAesEcbDto) {
    return `This action updates a #${id} aesEcb`;
  }

  remove(id: number) {
    return `This action removes a #${id} aesEcb`;
  }
}
