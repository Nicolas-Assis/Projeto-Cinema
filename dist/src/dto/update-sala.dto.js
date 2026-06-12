"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSalaDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_sala_dto_1 = require("./create-sala.dto");
class UpdateSalaDto extends (0, swagger_1.PartialType)(create_sala_dto_1.CreateSalaDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateSalaDto = UpdateSalaDto;
//# sourceMappingURL=update-sala.dto.js.map