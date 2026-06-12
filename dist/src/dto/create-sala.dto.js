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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSalaDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateSalaDto {
    numero;
    capacidade;
    poutronas;
    cinemaId;
    static _OPENAPI_METADATA_FACTORY() {
        return { numero: { required: true, type: () => Number, minimum: 1 }, capacidade: { required: true, type: () => Number, minimum: 1 }, poutronas: { required: true, type: () => [Object] }, cinemaId: { required: true, type: () => Number, minimum: 1 } };
    }
}
exports.CreateSalaDto = CreateSalaDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsPositive)({ message: 'Número da sala deve ser positivo' }),
    __metadata("design:type", Number)
], CreateSalaDto.prototype, "numero", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsPositive)({ message: 'Capacidade deve ser positiva' }),
    __metadata("design:type", Number)
], CreateSalaDto.prototype, "capacidade", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateSalaDto.prototype, "poutronas", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsPositive)({ message: 'ID do cinema inválido' }),
    __metadata("design:type", Number)
], CreateSalaDto.prototype, "cinemaId", void 0);
//# sourceMappingURL=create-sala.dto.js.map