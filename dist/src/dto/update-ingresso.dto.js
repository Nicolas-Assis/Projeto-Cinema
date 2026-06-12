"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateIngressoDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_ingresso_dto_1 = require("./create-ingresso.dto");
class UpdateIngressoDto extends (0, swagger_1.PartialType)(create_ingresso_dto_1.CreateIngressoDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateIngressoDto = UpdateIngressoDto;
//# sourceMappingURL=update-ingresso.dto.js.map