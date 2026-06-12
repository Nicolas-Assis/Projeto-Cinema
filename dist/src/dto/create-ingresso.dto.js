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
exports.CreateIngressoDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateIngressoDto {
    valorInteira;
    valorMeia;
    sessaoId;
    static _OPENAPI_METADATA_FACTORY() {
        return { valorInteira: { required: true, type: () => Number, minimum: 0 }, valorMeia: { required: true, type: () => Number, minimum: 0 }, sessaoId: { required: true, type: () => Number, minimum: 1 } };
    }
}
exports.CreateIngressoDto = CreateIngressoDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0, { message: 'Valor inteira deve ser >= 0' }),
    __metadata("design:type", Number)
], CreateIngressoDto.prototype, "valorInteira", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0, { message: 'Valor meia deve ser >= 0' }),
    __metadata("design:type", Number)
], CreateIngressoDto.prototype, "valorMeia", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsPositive)({ message: 'ID da sessão inválido' }),
    __metadata("design:type", Number)
], CreateIngressoDto.prototype, "sessaoId", void 0);
//# sourceMappingURL=create-ingresso.dto.js.map