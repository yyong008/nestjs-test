import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ControllerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // 在这里进行控制器拦截器的逻辑处理，比如数据转换、格式化等
    return next.handle();
  }
}

/**
import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { ControllerInterceptor } from './controller.interceptor';

@Controller('example')
@UseInterceptors(ControllerInterceptor)
export class ExampleController {
  @Get()
  getData() {
    // 控制器方法的逻辑
  }
}
 */
