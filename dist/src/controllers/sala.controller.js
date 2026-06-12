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
exports.SalaController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const sala_service_1 = require("../services/sala.service");
const create_sala_dto_1 = require("../dto/create-sala.dto");
const update_sala_dto_1 = require("../dto/update-sala.dto");
let SalaController = class SalaController {
    salaService;
    constructor(salaService) {
        this.salaService = salaService;
    }
    create(dto) {
        return this.salaService.create(dto);
    }
    findAll() {
        return this.salaService.findAll();
    }
    findOne(id) {
        return this.salaService.findOne(id);
    }
    update(id, dto) {
        return this.salaService.update(id, dto);
    }
    remove(id) {
        return this.salaService.remove(id);
    }
    reservarPoutrona(id, fila, num) {
        return this.salaService.reservarPoutrona(id, fila, num);
    }
    calcularCapacidade(id) {
        return this.salaService.calcularCapacidade(id);
    }
};
exports.SalaController = SalaController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar nova sala' }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sala_dto_1.CreateSalaDto]),
    __metadata("design:returntype", void 0)
], SalaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todas as salas' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SalaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar sala por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SalaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar sala' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_sala_dto_1.UpdateSalaDto]),
    __metadata("design:returntype", void 0)
], SalaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Remover sala' }),
    openapi.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SalaController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(':id/reservar'),
    (0, swagger_1.ApiOperation)({ summary: 'Reservar uma poltrona' }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                fila: { type: 'integer', example: 0 },
                num: { type: 'integer', example: 2 },
            },
            required: ['fila', 'num'],
        },
    }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('fila', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)('num', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", void 0)
], SalaController.prototype, "reservarPoutrona", null);
__decorate([
    (0, common_1.Get)(':id/capacidade'),
    (0, swagger_1.ApiOperation)({ summary: 'Calcular capacidade disponível da sala' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SalaController.prototype, "calcularCapacidade", null);
exports.SalaController = SalaController = __decorate([
    (0, swagger_1.ApiTags)('sala'),
    (0, common_1.Controller)('sala'),
    __metadata("design:paramtypes", [sala_service_1.SalaService])
], SalaController);
//# sourceMappingURL=sala.controller.js.map