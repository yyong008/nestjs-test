import {
  BeforeApplicationShutdown,
  Module,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { AboutService } from './about.service';
import { AboutController } from './about.controller';

@Module({
  controllers: [AboutController],
  providers: [AboutService],
})
export class AboutModule
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  onApplicationShutdown(signal?: string) {
    console.log('About Module OnApplicationShutdown', signal);
  }
  beforeApplicationShutdown(signal?: string) {
    console.log('BeforeApplicationShutdown', signal);
  }
  onModuleDestroy() {
    console.log('AboutModule onModuleDestroy');
  }
  onModuleInit() {
    console.log('this is about module');
  }

  onApplicationBootstrap() {
    console.log('AboutModule OnApplicationBootstrap');
  }
}
