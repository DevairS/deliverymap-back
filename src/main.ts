import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from '@app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.enableCors();
  await app.listen(process.env.PORT);

  console.log(`Server running in docker port ${process.env.PORT}`);
  console.log(`Server running in external port ${process.env.PORT_API}`);
}
bootstrap();
