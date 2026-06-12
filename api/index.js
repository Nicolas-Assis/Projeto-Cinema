// Entrada serverless da API na Vercel.
// Reaproveita o app NestJS compilado em dist/ e mantém a instância
// em cache entre invocações (cold start só na primeira chamada).
const { NestFactory } = require('@nestjs/core');
const { ExpressAdapter } = require('@nestjs/platform-express');
const { ValidationPipe } = require('@nestjs/common');
const express = require('express');
const { AppModule } = require('../dist/src/app.module');

let cachedServer;

async function bootstrap() {
  const server = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  app.enableCors({ origin: process.env.CORS_ORIGIN?.split(',') ?? true });
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  await app.init();
  return server;
}

module.exports = async (req, res) => {
  if (!cachedServer) {
    cachedServer = await bootstrap();
  }
  // O front chama /api/filme, /api/cinema etc.; o Nest conhece /filme, /cinema...
  req.url = req.url.replace(/^\/api/, '') || '/';
  return cachedServer(req, res);
};
