import { Injectable } from '@nestjs/common';
import { CreateAesCfbDto } from './dto/create-aes-cfb.dto';
import { UpdateAesCfbDto } from './dto/update-aes-cfb.dto';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class AesCfbService {
  private readonly key: string;
  private readonly iv: string;

  constructor() {
    this.key = process.env.AES_KEY;
    this.iv = process.env.AES_IV;
  }

  encrypt(text: string): string {
    const encrypted = CryptoJS.AES.encrypt(text, this.key, {
      iv: this.iv,
      mode: CryptoJS.mode.CFB, // 使用 CFB 模式
      padding: CryptoJS.pad.NoPadding,
    });

    return encrypted.toString();
  }

  decrypt(encryptedText: string): string {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedText, this.key, {
      iv: this.iv,
      mode: CryptoJS.mode.CFB, // 使用 CFB 模式
      padding: CryptoJS.pad.NoPadding,
    });

    return decryptedBytes.toString(CryptoJS.enc.Utf8);
  }

  create(createAesCfbDto: CreateAesCfbDto) {
    return 'This action adds a new aesCfb';
  }

  findAll() {
    return `This action returns all aesCfb`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aesCfb`;
  }

  update(id: number, updateAesCfbDto: UpdateAesCfbDto) {
    return `This action updates a #${id} aesCfb`;
  }

  remove(id: number) {
    return `This action removes a #${id} aesCfb`;
  }
}
