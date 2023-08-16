import { Injectable } from '@nestjs/common';
import { CreateAesGmcDto } from './dto/create-aes-gmc.dto';
import { UpdateAesGmcDto } from './dto/update-aes-gmc.dto';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class AesGmcService {
  private readonly key: string;
  private readonly iv: string;

  constructor() {
    this.key = process.env.AES_KEY;
    this.iv = process.env.AES_IV;
  }

  encrypt(text: string): string {
    const encrypted = CryptoJS.AES.encrypt(text, this.key, {
      iv: this.iv,
      mode: CryptoJS.mode.GCM, // 使用 GCM 模式
      padding: CryptoJS.pad.NoPadding,
    });

    return encrypted.toString();
  }

  decrypt(encryptedText: string): string {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedText, this.key, {
      iv: this.iv,
      mode: CryptoJS.mode.GCM, // 使用 GCM 模式
      padding: CryptoJS.pad.NoPadding,
    });

    return decryptedBytes.toString(CryptoJS.enc.Utf8);
  }

  create(createAesGmcDto: CreateAesGmcDto) {
    return 'This action adds a new aesGmc';
  }

  findAll() {
    return `This action returns all aesGmc`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aesGmc`;
  }

  update(id: number, updateAesGmcDto: UpdateAesGmcDto) {
    return `This action updates a #${id} aesGmc`;
  }

  remove(id: number) {
    return `This action removes a #${id} aesGmc`;
  }
}
