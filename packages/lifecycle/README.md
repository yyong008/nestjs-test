# 请求周期地址

![](https://docs.nestjs.com/assets/lifecycle-events.png)


### 使用场景

当涉及具体的业务逻辑时，以下是一些可能的 `onModuleInit` 使用场景示例：

1. **连接数据库：** 在服务中实现 `onModuleInit`，在应用程序启动时自动连接数据库。这可以确保你的数据库连接在应用程序的整个生命周期内保持活动状态。

2. **定时任务注册：** 如果你的应用程序需要定时执行任务，你可以在模块的 `onModuleInit` 钩子中注册定时任务。这样，这些任务将在应用程序启动时自动开始执行。

3. **加载插件：** 如果你的应用程序支持插件系统，可以在模块初始化时加载已安装的插件，以便在应用程序运行时使用这些插件的功能。

4. **初始化缓存：** 在服务初始化期间，你可以初始化缓存系统，确保在应用程序运行时缓存可用且正确配置。

5. **调用外部 API：** 如果你的应用程序需要与外部 API 交互，你可以在模块初始化时初始化 API 客户端，以便在应用程序中的其他部分使用。

6. **初始化消息队列消费者：** 如果你使用消息队列来处理异步任务，可以在模块初始化时初始化消息队列消费者，以确保你的应用程序在启动时准备好接受消息。

7. **加载静态数据：** 在应用程序启动时，你可以在模块初始化中加载一些静态数据，例如种子数据或配置项。

8. **身份验证和授权设置：** 在模块初始化时，你可以设置身份验证和授权系统，确保在应用程序运行时进行有效的用户认证和授权。


## 模块级别

- onModuleInit
- onApplicationBootstrap

### 示例

- 与 Module 配合使用

```ts
import { Module, OnModuleInit } from '@nestjs/common';

@Module({
  providers: [MyService],
})
export class AppModule implements OnModuleInit {
  constructor(private readonly myService: MyService) {}

  onModuleInit() {
    console.log('AppModule has been initialized');
    this.myService.initialize(); // 在模块初始化期间调用服务方法
  }
}
```

- 与 Service 一起使用

```ts
import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class MyService implements OnModuleInit {
  constructor() {}

  onModuleInit() {
    console.log('MyService has been initialized');
    // 在服务初始化期间执行一些逻辑
  }

  doSomething() {
    // 执行服务的其他方法
  }
}
```

## 调用顺序

```sh
this is about Service implement onModuleInit
this is about module
this is app Service implement onModuleInit
this is appModule implement onModuleInit

http://localhost:9000
```

## 主模块

```ts
@Module({
  imports: [AboutModule, ArticleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  onModuleInit() {
    console.log('this is appModule implement onModuleInit');
  }
}
```

```sh
this is about Service implement onModuleInit
this is about module
This is article service
this is article module
this is app Service implement onModuleInit
this is appModule implement onModuleInit
```

imports 中的模块时从左边，往右边执行。先执行服务，然后执行模块。

遵循: `先进先执行 （First In First Call）FIFC` 的模型


## 有什么用？

- consult 注册微服务的时候，一般放在实现了 `onModuleInit` 的  `service` 中实现。

## service 的构造函数先执行还是 onModuleInit 先执行

1. 服务的构造函数执行： 当一个服务被注入到模块的时候，NestJS 会自动创建服务的实例并调用其构造函数。这是服务实例化的时候。
2. onModuleInit 钩子执行： 在服务的构造函数执行完成后，如果服务实现了 OnModuleInit 接口，NestJS 会调用 onModuleInit 方法。

## 构造函数

```sh
#
constructor call app module
constructor call AppService
constructor call AboutService
#
this is about Service implement onModuleInit
this is about module
This is article service
this is article module
this is app Service implement onModuleInit
this is appModule implement onModuleInit

http://localhost:9000
```

##  OnApplicationBootstrap 函数

```sh
# 
constructor call app module
constructor call AppService
constructor call AboutService
#
this is about Service implement onModuleInit
this is about module
This is article service
this is article module
this is app Service implement onModuleInit
this is appModule implement onModuleInit
AboutService OnApplicationBootstrap
AboutModule OnApplicationBootstrap
ArticleService OnApplicationBootstrap
ArticleModule OnApplicationBootstrap
this is appService implement OnApplicationBootstrap
this is appModule implement OnApplicationBootstrap
#
http://localhost:9000
```

## app.close 触发销毁程序

```ts
setTimeout(() => {
    app.close();
}, 3000);
```

## 小结

1. 整体上，先执行 `service`， 然后执行 `module`, 抽象为 `FIFC` 模型。
2. imports 中 modules 执行 `先入站，先执行的规则`。

1. 