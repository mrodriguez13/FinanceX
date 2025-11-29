import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const start = Date.now();
    res.on('finish', () => {
      const duration = Date.now() - start;
      const log = {
        level: 'info',
        method: req.method,
        path: req.originalUrl,
        status: res.statusCode,
        duration_ms: duration,
      };
      console.log(JSON.stringify(log));
    });
    next();
  }
}
