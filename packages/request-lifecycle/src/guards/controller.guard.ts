import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class ControllerGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    // 在这里进行控制器守卫的逻辑处理，比如认证、授权等
    return true; // 返回 true 表示允许执行控制器方法，返回 false 表示阻止执行
  }
}

/**
 * 
 * import { Controller, Get, UseGuards } from '@nestjs/common';
import { ControllerGuard } from './controller.guard';

@Controller('example')
@UseGuards(ControllerGuard)
export class ExampleController {
  @Get()
  getData() {
    // 控制器方法的逻辑
  }
}
 * 
 * 
 ** /
