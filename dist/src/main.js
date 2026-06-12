"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: process.env.CORS_ORIGIN?.split(',') ?? 'http://localhost:5173',
    });
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true, whitelist: true }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Cinema Management API')
        .setDescription('REST API para gerenciamento de cinema: cinemas, salas, filmes, sessões, ingressos e pedidos')
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
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document, {
        jsonDocumentUrl: 'api-json',
    });
    const port = process.env.PORT ?? 3001;
    await app.listen(port);
    console.log(`Application running on http://localhost:${port}`);
    console.log(`Swagger UI:    http://localhost:${port}/api`);
    console.log(`OpenAPI JSON:  http://localhost:${port}/api-json`);
}
bootstrap();
//# sourceMappingURL=main.js.map