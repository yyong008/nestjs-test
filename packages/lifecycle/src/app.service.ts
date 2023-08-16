import {
  Injectable,
  OnApplicationBootstrap,
  OnModuleDestroy,
  OnModuleInit,
  BeforeApplicationShutdown,
  OnApplicationShutdown,
} from '@nestjs/common';

@Injectable()
export class AppService
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  constructor() {
    console.log('constructor call AppService');
  }
  onApplicationShutdown(signal?: string) {
    console.log('App Service OnApplicationShutdown', signal);
  }
  getHello(): string {
    return 'Hello World!';
  }

  onModuleInit() {
    console.log('this is app Service implement onModuleInit');
  }

  onApplicationBootstrap() {
    console.log('this is appService implement OnApplicationBootstrap');
  }
  onModuleDestroy() {
    console.log('App servervice OnModuleDestroy');
  }
  beforeApplicationShutdown() {
    console.log('AppService beforeApplicationShutdown');
  }
}
