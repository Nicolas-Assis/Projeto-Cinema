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
exports.CinemaController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const cinema_service_1 = require("../services/cinema.service");
const create_cinema_dto_1 = require("../dto/create-cinema.dto");
const update_cinema_dto_1 = require("../dto/update-cinema.dto");
let CinemaController = class CinemaController {
    cinemaService;
    constructor(cinemaService) {
        this.cinemaService = cinemaService;
    }
    create(dto) {
        return this.cinemaService.create(dto);
    }
    findAll() {
        return this.cinemaService.findAll();
    }
    findOne(id) {
        return this.cinemaService.findOne(id);
    }
    update(id, dto) {
        return this.cinemaService.update(id, dto);
    }
    remove(id) {
        return this.cinemaService.remove(id);
    }
    cadastrarFilme(cinemaId, filmeId) {
        return this.cinemaService.cadastrarFilme(cinemaId, filmeId);
    }
    removerFilme(cinemaId, filmeId) {
        return this.cinemaService.removerFilme(cinemaId, filmeId);
    }
};
exports.CinemaController = CinemaController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar novo cinema' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Cinema criado com sucesso.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cinema_dto_1.CreateCinemaDto]),
    __metadata("design:returntype", void 0)
], CinemaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todos os cinemas' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CinemaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar cinema por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CinemaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar cinema' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_cinema_dto_1.UpdateCinemaDto]),
    __metadata("design:returntype", void 0)
], CinemaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Remover cinema' }),
    openapi.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CinemaController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(':cinemaId/filmes/:filmeId'),
    (0, swagger_1.ApiOperation)({ summary: 'Associar filme ao cinema (M:N)' }),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Param)('cinemaId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('filmeId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], CinemaController.prototype, "cadastrarFilme", null);
__decorate([
    (0, common_1.Delete)(':cinemaId/filmes/:filmeId'),
    (0, swagger_1.ApiOperation)({ summary: 'Desassociar filme do cinema' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('cinemaId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('filmeId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], CinemaController.prototype, "removerFilme", null);
exports.CinemaController = CinemaController = __decorate([
    (0, swagger_1.ApiTags)('cinema'),
    (0, common_1.Controller)('cinema'),
    __metadata("design:paramtypes", [cinema_service_1.CinemaService])
], CinemaController);
//# sourceMappingURL=cinema.controller.js.map