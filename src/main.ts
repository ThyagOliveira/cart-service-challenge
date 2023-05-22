import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Consort Group')
    .setDescription('Cart Services')
    .setVersion('1.0')
    .addTag('Cart Services')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('services', app, document);

  await app.listen(3002);
}
bootstrap();
