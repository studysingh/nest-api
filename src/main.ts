
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from './validation.pipe';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Add global pipes
  app.useGlobalPipes(new ValidationPipe());

  // Add middleware for passport
  app.use(passport.initialize());

  await app.listen(3000);
}
bootstrap();
