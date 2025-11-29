import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { LoggingMiddleware } from './common/middleware/logging.middleware';
import { TimeoutMiddleware } from './common/middleware/timeout.middleware';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  app.setGlobalPrefix('v1');
  app.use(helmet());
  app.use(new LoggingMiddleware().use);
  app.use(new TimeoutMiddleware().use);
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
