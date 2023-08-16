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
