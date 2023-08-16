import {
  BeforeApplicationShutdown,
  Injectable,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { CreateAboutDto } from './dto/create-about.dto';
import { UpdateAboutDto } from './dto/update-about.dto';

@Injectable()
export class AboutService
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  constructor() {
    console.log('constructor call AboutService');
  }
  onApplicationShutdown(signal?: string) {
    console.log('About Service OnApplicationShutdown', signal);
  }
  beforeApplicationShutdown(signal?: string) {
    console.log('BeforeApplicationShutdown', signal);
  }
  onModuleDestroy() {
    console.log('AboutService call onModuleDestroy');
  }
  onModuleInit() {
    console.log('this is about Service implement onModuleInit');
  }

  onApplicationBootstrap() {
    console.log('AboutService OnApplicationBootstrap');
  }

  create(createAboutDto: CreateAboutDto) {
    return 'This action adds a new about';
  }

  findAll() {
    return `This action returns all about`;
  }

  findOne(id: number) {
    return `This action returns a #${id} about`;
  }

  update(id: number, updateAboutDto: UpdateAboutDto) {
    return `This action updates a #${id} about`;
  }

  remove(id: number) {
    return `This action removes a #${id} about`;
  }
}
