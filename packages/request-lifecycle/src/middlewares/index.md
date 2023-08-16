在 NestJS 中，中间件是用于在请求生命周期中执行某些操作的组件。全局中间件是应用于每个路由处理程序的中间件，而模块级中间件仅应用于特定模块中的路由处理程序。下面是一些关于 NestJS 全局中间件和模块级中间件的示例。

## 全局中间件示例：

### 记录请求日志中间件
```typescript
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`Request ${req.method} ${req.url}`);
    next();
  }
}
```

在主应用模块中将全局中间件注册：

```typescript
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoggerMiddleware } from './logger.middleware';

@Module({
  // ...
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
```

## 模块级中间件示例：

### 认证中间件
```typescript
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // 进行认证逻辑，例如检查 token
    if (req.headers.authorization !== 'valid-token') {
      res.status(401).send('Unauthorized');
      return;
    }
    next();
  }
}
```

在一个模块中将模块级中间件注册：

```typescript
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthMiddleware } from './auth.middleware';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('users');
  }
}
```

在上述示例中，全局中间件会应用于所有路由处理程序，而模块级中间件仅应用于特定模块的路由处理程序。这些示例演示了如何创建和注册 NestJS 中的全局中间件和模块级中间件。

## NestJS 中的中间件消费方式

- 使用 configure 函数进行消费
- 模块中的中间件使用 configure 消费局部
 
不推荐使用 app.use 因为这是 express 的方式，NestJS 推荐在模块中使用。