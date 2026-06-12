"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFilmeDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_filme_dto_1 = require("./create-filme.dto");
class UpdateFilmeDto extends (0, swagger_1.PartialType)(create_filme_dto_1.CreateFilmeDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateFilmeDto = UpdateFilmeDto;
//# sourceMappingURL=update-filme.dto.js.map