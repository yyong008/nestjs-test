import { Injectable } from '@nestjs/common';
import { CreateAesOfbDto } from './dto/create-aes-ofb.dto';
import { UpdateAesOfbDto } from './dto/update-aes-ofb.dto';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class AesOfbService {
  private readonly key: string;
  private readonly iv: string;

  constructor() {
    this.key = process.env.AES_KEY;
    this.iv = process.env.AES_IV;
  }

  encrypt(text: string): string {
    const encrypted = CryptoJS.AES.encrypt(text, this.key, {
      iv: this.iv,
      mode: CryptoJS.mode.OFB,
      padding: CryptoJS.pad.NoPadding,
    });

    return encrypted.toString();
  }

  decrypt(encryptedText: string): string {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedText, this.key, {
      iv: this.iv,
      mode: CryptoJS.mode.OFB,
      padding: CryptoJS.pad.NoPadding,
    });

    return decryptedBytes.toString(CryptoJS.enc.Utf8);
  }
  create(createAesOfbDto: CreateAesOfbDto) {
    return 'This action adds a new aesOfb';
  }

  findAll() {
    return `This action returns all aesOfb`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aesOfb`;
  }

  update(id: number, updateAesOfbDto: UpdateAesOfbDto) {
    return `This action updates a #${id} aesOfb`;
  }

  remove(id: number) {
    return `This action removes a #${id} aesOfb`;
  }
}
