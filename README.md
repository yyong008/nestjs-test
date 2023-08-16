# NestJS Test

## Part lifecycle

1. Lifecycle Events
2. Request lifecycle

## Part Module

1. **模块定义与结构**：
   - 模块使用 `@Module` 装饰器来定义。每个模块都是一个 TypeScript 类。
   - 模块通常包含 controllers、providers 和 imports。
   - `controllers` 处理传入的请求并返回响应。
   - `providers` 提供各种服务，如数据库连接、业务逻辑等。
   - `imports` 用于导入其他模块，使得模块之间可以共享功能。

2. **模块之间的依赖关系**：
   - 模块可以通过 `imports` 和 `exports` 来建立依赖关系和共享功能。
   - 通过 `exports` 将模块中的部分组件暴露给其他模块使用。

3. **动态模块**：
   - 使用 `@DynamicModule` 装饰器和工厂函数，可以创建具有动态配置的模块。
   - 这使得模块可以根据不同的配置参数来生成不同的提供者。

4. **全局模块**：
   - 全局模块通过 `@Global` 装饰器来标记，允许在整个应用程序范围内共享提供者。

5. **单例和作用域**：
   - 默认情况下，每个模块的提供者都是单例的，这意味着它们在整个应用程序中只有一个实例。
   - 可以使用 `@Scope` 装饰器来指定提供者的作用域，如 `REQUEST`（每个请求一个实例）。

6. **动态提供者**：
   - 可以使用 `useFactory`、`useValue`、`useClass` 等来定义动态提供者。
   - `useFactory` 允许在创建提供者实例时执行自定义逻辑。
   - `useValue` 可以直接提供一个值作为提供者。
   - `useClass` 可以提供一个类，并实例化它作为提供者。

7. **循环依赖**：
   - NestJS 支持解决循环依赖问题。但是要小心处理，以避免潜在的问题。

8. **模块的动态加载**：
   - 可以使用 `loaders` 属性实现模块的动态加载，用于插件式架构。

9. **模块的生命周期钩子**：
   - 模块可以使用 `onModuleInit`、`onModuleDestroy` 等生命周期钩子来执行初始化和清理操作。

10. **环境配置**：
    - 可以使用 `ConfigModule` 简化环境变量的处理，支持从不同源（文件、环境变量等）加载配置。

11. **单元测试**：
    - 可以使用测试模块、测试工具和依赖注入来编写单元测试。

## NestJS 加密方案

```sh
import * as CryptoJS from 'crypto-js';
```

- ASE 加密

```ts
  /**
   * AES加密
   */
  public aesEncrypt(msg: string, secret: string): string {
    return CryptoJS.AES.encrypt(msg, secret).toString();
  }

  /**
   * AES解密
   */
  public aesDecrypt(encrypted: string, secret: string): string {
    return CryptoJS.AES.decrypt(encrypted, secret).toString(CryptoJS.enc.Utf8);
  }
```

- MD5 加密

```ts
  /**
   * md5加密
   */
  public md5(msg: string): string {
    return CryptoJS.MD5(msg).toString();
  }
```
