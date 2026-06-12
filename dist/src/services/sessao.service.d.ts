import { PrismaService } from '../prisma/prisma.service';
import { CreateSessaoDto } from '../dto/create-sessao.dto';
import { UpdateSessaoDto } from '../dto/update-sessao.dto';
export declare class SessaoService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateSessaoDto): import("../generated/prisma/models").Prisma__SessaoClient<{
        cinema: {
            id: number;
            nome: string;
            endereco: string;
            createdAt: Date;
            updatedAt: Date;
        };
        sala: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            numero: number;
            capacidade: number;
            poutronas: import("@prisma/client/runtime/client").JsonValue;
            cinemaId: number;
        };
        filme: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            titulo: string;
            sinopse: string;
            classificacao: string;
            duracao: number;
            elenco: string;
            genero: import("../generated/prisma/enums").GeneroFilme;
            dataIniciaExibicao: Date;
            dataFinalExibicao: Date;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        cinemaId: number;
        horarioExibicao: Date;
        filmeId: number;
        salaId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    findAll(): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        cinema: {
            id: number;
            nome: string;
            endereco: string;
            createdAt: Date;
            updatedAt: Date;
        };
        sala: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            numero: number;
            capacidade: number;
            poutronas: import("@prisma/client/runtime/client").JsonValue;
            cinemaId: number;
        };
        filme: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            titulo: string;
            sinopse: string;
            classificacao: string;
            duracao: number;
            elenco: string;
            genero: import("../generated/prisma/enums").GeneroFilme;
            dataIniciaExibicao: Date;
            dataFinalExibicao: Date;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        cinemaId: number;
        horarioExibicao: Date;
        filmeId: number;
        salaId: number;
    })[]>;
    findOne(id: number): Promise<{
        cinema: {
            id: number;
            nome: string;
            endereco: string;
            createdAt: Date;
            updatedAt: Date;
        };
        sala: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            numero: number;
            capacidade: number;
            poutronas: import("@prisma/client/runtime/client").JsonValue;
            cinemaId: number;
        };
        filme: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            titulo: string;
            sinopse: string;
            classificacao: string;
            duracao: number;
            elenco: string;
            genero: import("../generated/prisma/enums").GeneroFilme;
            dataIniciaExibicao: Date;
            dataFinalExibicao: Date;
        };
        ingressos: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            valorInteira: number;
            valorMeia: number;
            sessaoId: number;
        }[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        cinemaId: number;
        horarioExibicao: Date;
        filmeId: number;
        salaId: number;
    }>;
    update(id: number, dto: UpdateSessaoDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        cinemaId: number;
        horarioExibicao: Date;
        filmeId: number;
        salaId: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        cinemaId: number;
        horarioExibicao: Date;
        filmeId: number;
        salaId: number;
    }>;
}
