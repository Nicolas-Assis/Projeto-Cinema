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
exports.CreateFilmeDto = exports.GeneroFilme = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
var GeneroFilme;
(function (GeneroFilme) {
    GeneroFilme["ACAO"] = "ACAO";
    GeneroFilme["AVENTURA"] = "AVENTURA";
    GeneroFilme["COMEDIA"] = "COMEDIA";
    GeneroFilme["DRAMA"] = "DRAMA";
    GeneroFilme["FANTASIA"] = "FANTASIA";
    GeneroFilme["FICCAO_CIENTIFICA"] = "FICCAO_CIENTIFICA";
    GeneroFilme["TERROR"] = "TERROR";
    GeneroFilme["ROMANCE"] = "ROMANCE";
    GeneroFilme["ANIMACAO"] = "ANIMACAO";
    GeneroFilme["DOCUMENTARIO"] = "DOCUMENTARIO";
    GeneroFilme["SUSPENSE"] = "SUSPENSE";
    GeneroFilme["MUSICAL"] = "MUSICAL";
    GeneroFilme["OUTRO"] = "OUTRO";
})(GeneroFilme || (exports.GeneroFilme = GeneroFilme = {}));
class CreateFilmeDto {
    titulo;
    sinopse;
    classificacao;
    duracao;
    elenco;
    genero;
    dataIniciaExibicao;
    dataFinalExibicao;
    static _OPENAPI_METADATA_FACTORY() {
        return { titulo: { required: true, type: () => String, minLength: 1 }, sinopse: { required: true, type: () => String, minLength: 10 }, classificacao: { required: true, type: () => String, minLength: 1 }, duracao: { required: true, type: () => Number, minimum: 1 }, elenco: { required: true, type: () => String, minLength: 1 }, genero: { required: true, enum: require("./create-filme.dto").GeneroFilme }, dataIniciaExibicao: { required: true, type: () => String }, dataFinalExibicao: { required: true, type: () => String } };
    }
}
exports.CreateFilmeDto = CreateFilmeDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1, { message: 'Título obrigatório' }),
    __metadata("design:type", String)
], CreateFilmeDto.prototype, "titulo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(10, { message: 'Sinopse deve ter ao menos 10 caracteres' }),
    __metadata("design:type", String)
], CreateFilmeDto.prototype, "sinopse", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1, { message: 'Classificação obrigatória' }),
    __metadata("design:type", String)
], CreateFilmeDto.prototype, "classificacao", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsPositive)({ message: 'Duração deve ser positiva (em minutos)' }),
    __metadata("design:type", Number)
], CreateFilmeDto.prototype, "duracao", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1, { message: 'Elenco obrigatório' }),
    __metadata("design:type", String)
], CreateFilmeDto.prototype, "elenco", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(GeneroFilme),
    __metadata("design:type", String)
], CreateFilmeDto.prototype, "genero", void 0);
__decorate([
    (0, class_validator_1.IsISO8601)({}, { message: 'Data de início inválida (ISO 8601)' }),
    __metadata("design:type", String)
], CreateFilmeDto.prototype, "dataIniciaExibicao", void 0);
__decorate([
    (0, class_validator_1.IsISO8601)({}, { message: 'Data final inválida (ISO 8601)' }),
    __metadata("design:type", String)
], CreateFilmeDto.prototype, "dataFinalExibicao", void 0);
//# sourceMappingURL=create-filme.dto.js.map