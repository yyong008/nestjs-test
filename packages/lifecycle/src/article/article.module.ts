import {
  BeforeApplicationShutdown,
  Module,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';

@Module({
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  onApplicationShutdown(signal?: string) {
    console.log('Article Modules OnApplicationShutdown', signal);
  }
  onModuleInit() {
    console.log('this is article module');
  }
  onApplicationBootstrap() {
    console.log('ArticleModule OnApplicationBootstrap');
  }

  onModuleDestroy() {
    console.log('ArticleModule onModuleDestroy');
  }

  beforeApplicationShutdown() {
    console.log('article module beforeApplicationShutdown');
  }
}
