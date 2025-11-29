import { Injectable, NestMiddleware, RequestTimeoutException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class TimeoutMiddleware implements NestMiddleware {
  private readonly timeoutMs = parseInt(process.env.HTTP_TIMEOUT || '15000', 10);

  use(_req: Request, _res: Response, next: NextFunction) {
    const timer = setTimeout(() => {
      next(new RequestTimeoutException());
    }, this.timeoutMs);
    const clear = () => clearTimeout(timer);
    _res.on('finish', clear);
    _res.on('close', clear);
    next();
  }
}
