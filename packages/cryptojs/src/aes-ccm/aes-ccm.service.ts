import { Injectable } from '@nestjs/common';
import { CreateAesCcmDto } from './dto/create-aes-ccm.dto';
import { UpdateAesCcmDto } from './dto/update-aes-ccm.dto';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class AesCcmService {
  private readonly key: string;
  private readonly iv: string;

  constructor() {
    this.key = process.env.AES_KEY;
    this.iv = process.env.AES_IV;
  }

  encrypt(text: string): string {
    const encrypted = CryptoJS.AES.encrypt(text, this.key, {
      iv: this.iv,
      mode: CryptoJS.mode.CCM, // 使用 CCM 模式
      padding: CryptoJS.pad.NoPadding,
    });

    return encrypted.toString();
  }

  decrypt(encryptedText: string): string {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedText, this.key, {
      iv: this.iv,
      mode: CryptoJS.mode.CCM, // 使用 CCM 模式
      padding: CryptoJS.pad.NoPadding,
    });

    return decryptedBytes.toString(CryptoJS.enc.Utf8);
  }

  create(createAesCcmDto: CreateAesCcmDto) {
    return 'This action adds a new aesCcm';
  }

  findAll() {
    return `This action returns all aesCcm`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aesCcm`;
  }

  update(id: number, updateAesCcmDto: UpdateAesCcmDto) {
    return `This action updates a #${id} aesCcm`;
  }

  remove(id: number) {
    return `This action removes a #${id} aesCcm`;
  }
}
