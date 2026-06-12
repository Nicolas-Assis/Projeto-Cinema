import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: process.env.CORS_ORIGIN?.split(',') ?? 'http://localhost:5173',
  });
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));

  const config = new DocumentBuilder()
    .setTitle('Cinema Management API')
    .setDescription(
      'REST API para gerenciamento de cinema: cinemas, salas, filmes, sessões, ingressos e pedidos',
    )
    .setVersion('1.0')
    .addTag('cinema')
    .addTag('sala')
    .addTag('filme')
    .addTag('sessao')
    .addTag('ingresso')
    .addTag('pedido')
    .addTag('lanche-combo')
    .addServer('http://localhost:3001')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    jsonDocumentUrl: 'api-json',
  });

  const port = process.env.PORT ?? 3001;
  await app.listen(port);
  console.log(`Application running on http://localhost:${port}`);
  console.log(`Swagger UI:    http://localhost:${port}/api`);
  console.log(`OpenAPI JSON:  http://localhost:${port}/api-json`);
}

bootstrap();
