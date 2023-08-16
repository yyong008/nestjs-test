import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class RouteInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // 在这里进行路由拦截器的逻辑处理，比如权限检查、数据预处理等
    return next.handle();
  }
}

/**
 * 
import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { RouteInterceptor } from './route.interceptor';
import { ExampleController } from './example.controller';

@Module({
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: RouteInterceptor,
    },
  ],
  controllers: [ExampleController],
})
export class ExampleModule {}
 */
