"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pedido_service_1 = require("../services/pedido.service");
const create_pedido_dto_1 = require("../dto/create-pedido.dto");
const update_pedido_dto_1 = require("../dto/update-pedido.dto");
let PedidoController = class PedidoController {
    pedidoService;
    constructor(pedidoService) {
        this.pedidoService = pedidoService;
    }
    create(dto) {
        return this.pedidoService.create(dto);
    }
    findAll() {
        return this.pedidoService.findAll();
    }
    findOne(id) {
        return this.pedidoService.findOne(id);
    }
    update(id, dto) {
        return this.pedidoService.update(id, dto);
    }
    remove(id) {
        return this.pedidoService.remove(id);
    }
    adicionarIngresso(pedidoId, ingressoId) {
        return this.pedidoService.adicionarIngresso(pedidoId, ingressoId);
    }
    removerIngresso(pedidoId, ingressoId) {
        return this.pedidoService.removerIngresso(pedidoId, ingressoId);
    }
    adicionaLanche(pedidoId, lancheId) {
        return this.pedidoService.adicionaLanche(pedidoId, lancheId);
    }
    removerLanche(pedidoId, lancheId) {
        return this.pedidoService.removerLanche(pedidoId, lancheId);
    }
};
exports.PedidoController = PedidoController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar novo pedido' }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pedido_dto_1.CreatePedidoDto]),
    __metadata("design:returntype", void 0)
], PedidoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todos os pedidos' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PedidoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar pedido por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PedidoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar pedido' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_pedido_dto_1.UpdatePedidoDto]),
    __metadata("design:returntype", void 0)
], PedidoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Remover pedido' }),
    openapi.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PedidoController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(':pedidoId/ingressos/:ingressoId'),
    (0, swagger_1.ApiOperation)({ summary: 'Adicionar ingresso ao pedido' }),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Param)('pedidoId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('ingressoId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], PedidoController.prototype, "adicionarIngresso", null);
__decorate([
    (0, common_1.Delete)(':pedidoId/ingressos/:ingressoId'),
    (0, swagger_1.ApiOperation)({ summary: 'Remover ingresso do pedido' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('pedidoId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('ingressoId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], PedidoController.prototype, "removerIngresso", null);
__decorate([
    (0, common_1.Post)(':pedidoId/lanches/:lancheId'),
    (0, swagger_1.ApiOperation)({ summary: 'Adicionar lanche ao pedido' }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Param)('pedidoId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('lancheId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], PedidoController.prototype, "adicionaLanche", null);
__decorate([
    (0, common_1.Delete)(':pedidoId/lanches/:lancheId'),
    (0, swagger_1.ApiOperation)({ summary: 'Remover lanche do pedido' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('pedidoId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('lancheId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], PedidoController.prototype, "removerLanche", null);
exports.PedidoController = PedidoController = __decorate([
    (0, swagger_1.ApiTags)('pedido'),
    (0, common_1.Controller)('pedido'),
    __metadata("design:paramtypes", [pedido_service_1.PedidoService])
], PedidoController);
//# sourceMappingURL=pedido.controller.js.map