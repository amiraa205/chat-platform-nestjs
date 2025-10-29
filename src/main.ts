/* eslint-disable @typescript-eslint/no-floating-promises */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ?? '3000';
  app.setGlobalPrefix('api');
  try {
    await app.listen(port, () => console.log(`Running on port ${port}`));
  } catch (error) {
    console.log(error);
  }
}

bootstrap();
