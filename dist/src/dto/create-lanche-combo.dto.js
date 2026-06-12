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
exports.CreateLancheComboDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateLancheComboDto {
    nome;
    descricao;
    valorUnitario;
    qtUnidade;
    subtotal;
    pedidoId;
    static _OPENAPI_METADATA_FACTORY() {
        return { nome: { required: true, type: () => String, minLength: 1 }, descricao: { required: true, type: () => String, minLength: 5 }, valorUnitario: { required: true, type: () => Number, minimum: 0 }, qtUnidade: { required: true, type: () => Number, minimum: 1 }, subtotal: { required: true, type: () => Number, minimum: 0 }, pedidoId: { required: true, type: () => Number, minimum: 1 } };
    }
}
exports.CreateLancheComboDto = CreateLancheComboDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1, { message: 'Nome obrigatório' }),
    __metadata("design:type", String)
], CreateLancheComboDto.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(5, { message: 'Descrição deve ter ao menos 5 caracteres' }),
    __metadata("design:type", String)
], CreateLancheComboDto.prototype, "descricao", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0, { message: 'Valor unitário deve ser >= 0' }),
    __metadata("design:type", Number)
], CreateLancheComboDto.prototype, "valorUnitario", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsPositive)({ message: 'Quantidade deve ser positiva' }),
    __metadata("design:type", Number)
], CreateLancheComboDto.prototype, "qtUnidade", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0, { message: 'Subtotal deve ser >= 0' }),
    __metadata("design:type", Number)
], CreateLancheComboDto.prototype, "subtotal", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsPositive)({ message: 'ID do pedido inválido' }),
    __metadata("design:type", Number)
], CreateLancheComboDto.prototype, "pedidoId", void 0);
//# sourceMappingURL=create-lanche-combo.dto.js.map