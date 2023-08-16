import {
  BeforeApplicationShutdown,
  Injectable,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class ArticleService
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  onApplicationShutdown(signal?: string) {
    console.log('Article Service OnApplicationShutdown', signal);
  }
  onModuleDestroy() {
    console.log('article onModuleDestroy');
  }
  onModuleInit() {
    console.log('This is article service');
  }
  onApplicationBootstrap() {
    console.log('ArticleService OnApplicationBootstrap');
  }
  OnModuleDestroy() {
    console.log('OnModuleDestroy article ');
  }

  beforeApplicationShutdown() {
    console.log('article module beforeApplicationShutdown');
  }

  create(createArticleDto: CreateArticleDto) {
    return 'This action adds a new article';
  }

  findAll() {
    return `This action returns all article`;
  }

  findOne(id: number) {
    return `This action returns a #${id} article`;
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`;
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }
}
