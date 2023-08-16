import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class GlobalGuard implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // 在这里进行全局守卫的逻辑处理，比如认证、授权等
    return next.handle();
  }
}

/**
 * 

import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { GlobalGuard } from './global.guard';

@Module({
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: GlobalGuard,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // 在这里添加中间件或其他配置
  }
}
 */
