import { FilmeService } from '../services/filme.service';
import { CreateFilmeDto } from '../dto/create-filme.dto';
import { UpdateFilmeDto } from '../dto/update-filme.dto';
export declare class FilmeController {
    private readonly filmeService;
    constructor(filmeService: FilmeService);
    create(dto: CreateFilmeDto): import("../generated/prisma/models").Prisma__FilmeClient<{
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
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    findAll(): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        cinemas: {
            id: number;
            nome: string;
            endereco: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
    } & {
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
    })[]>;
    findOne(id: number): Promise<{
        sessoes: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            cinemaId: number;
            horarioExibicao: Date;
            filmeId: number;
            salaId: number;
        }[];
        cinemas: {
            id: number;
            nome: string;
            endereco: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
    } & {
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
    }>;
    update(id: number, dto: UpdateFilmeDto): Promise<{
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
    }>;
    remove(id: number): Promise<{
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
    }>;
}
