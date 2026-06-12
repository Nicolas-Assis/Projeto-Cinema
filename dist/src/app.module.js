"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("./prisma/prisma.module");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const cinema_controller_1 = require("./controllers/cinema.controller");
const sala_controller_1 = require("./controllers/sala.controller");
const filme_controller_1 = require("./controllers/filme.controller");
const sessao_controller_1 = require("./controllers/sessao.controller");
const ingresso_controller_1 = require("./controllers/ingresso.controller");
const pedido_controller_1 = require("./controllers/pedido.controller");
const lanche_combo_controller_1 = require("./controllers/lanche-combo.controller");
const cinema_service_1 = require("./services/cinema.service");
const sala_service_1 = require("./services/sala.service");
const filme_service_1 = require("./services/filme.service");
const sessao_service_1 = require("./services/sessao.service");
const ingresso_service_1 = require("./services/ingresso.service");
const pedido_service_1 = require("./services/pedido.service");
const lanche_combo_service_1 = require("./services/lanche-combo.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [
            app_controller_1.AppController,
            cinema_controller_1.CinemaController,
            sala_controller_1.SalaController,
            filme_controller_1.FilmeController,
            sessao_controller_1.SessaoController,
            ingresso_controller_1.IngressoController,
            pedido_controller_1.PedidoController,
            lanche_combo_controller_1.LancheComboController,
        ],
        providers: [
            app_service_1.AppService,
            cinema_service_1.CinemaService,
            sala_service_1.SalaService,
            filme_service_1.FilmeService,
            sessao_service_1.SessaoService,
            ingresso_service_1.IngressoService,
            pedido_service_1.PedidoService,
            lanche_combo_service_1.LancheComboService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map