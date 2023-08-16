import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class RouteGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    // 在这里进行路由守卫的逻辑处理，比如认证、授权等
    return true; // 返回 true 表示允许执行路由处理器，返回 false 表示阻止执行
  }
}

/**
 * 
 * import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { RouteGuard } from './route.guard';
import { ExampleController } from './example.controller';

@Module({
  providers: [
    {
      provide: APP_GUARD,
      useClass: RouteGuard,
    },
  ],
  controllers: [ExampleController],
})
export class ExampleModule {}

 * 
 * 
 * /