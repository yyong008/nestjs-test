import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(9000);
  console.log('http://localhost:9000');

  setTimeout(() => {
    app.close();
  }, 3000);
}
bootstrap();
