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
exports.CinemaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CinemaService = class CinemaService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(dto) {
        return this.prisma.cinema.create({ data: dto });
    }
    findAll() {
        return this.prisma.cinema.findMany({
            include: { salas: true, filmes: true, sessoes: true },
        });
    }
    async findOne(id) {
        const cinema = await this.prisma.cinema.findUnique({
            where: { id },
            include: { salas: true, filmes: true, sessoes: true },
        });
        if (!cinema)
            throw new common_1.NotFoundException(`Cinema #${id} não encontrado`);
        return cinema;
    }
    async update(id, dto) {
        await this.findOne(id);
        return this.prisma.cinema.update({ where: { id }, data: dto });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.cinema.delete({ where: { id } });
    }
    async cadastrarFilme(cinemaId, filmeId) {
        await this.findOne(cinemaId);
        return this.prisma.cinema.update({
            where: { id: cinemaId },
            data: { filmes: { connect: { id: filmeId } } },
            include: { filmes: true },
        });
    }
    async removerFilme(cinemaId, filmeId) {
        await this.findOne(cinemaId);
        return this.prisma.cinema.update({
            where: { id: cinemaId },
            data: { filmes: { disconnect: { id: filmeId } } },
            include: { filmes: true },
        });
    }
};
exports.CinemaService = CinemaService;
exports.CinemaService = CinemaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CinemaService);
//# sourceMappingURL=cinema.service.js.map