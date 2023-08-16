import {
  BeforeApplicationShutdown,
  Module,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AboutModule } from './about/about.module';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [AboutModule, ArticleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  constructor() {
    console.log('constructor call app module');
  }
  onApplicationShutdown(signal?: string) {
    console.log('App Module onApplicationShutdown', signal);
  }
  onModuleInit() {
    console.log('this is appModule implement onModuleInit');
  }

  onApplicationBootstrap() {
    console.log('this is appModule implement OnApplicationBootstrap');
  }

  onModuleDestroy() {
    console.log('App Module OnModuleDestroy');
  }
  beforeApplicationShutdown() {
    console.log('App module beforeApplicationShutdown');
  }
}
