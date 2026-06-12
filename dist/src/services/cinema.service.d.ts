import { PrismaService } from '../prisma/prisma.service';
import { CreateCinemaDto } from '../dto/create-cinema.dto';
import { UpdateCinemaDto } from '../dto/update-cinema.dto';
export declare class CinemaService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateCinemaDto): import("../generated/prisma/models").Prisma__CinemaClient<{
        id: number;
        nome: string;
        endereco: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    findAll(): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        salas: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            numero: number;
            capacidade: number;
            poutronas: import("@prisma/client/runtime/client").JsonValue;
            cinemaId: number;
        }[];
        sessoes: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            cinemaId: number;
            horarioExibicao: Date;
            filmeId: number;
            salaId: number;
        }[];
        filmes: {
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
        }[];
    } & {
        id: number;
        nome: string;
        endereco: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: number): Promise<{
        salas: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            numero: number;
            capacidade: number;
            poutronas: import("@prisma/client/runtime/client").JsonValue;
            cinemaId: number;
        }[];
        sessoes: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            cinemaId: number;
            horarioExibicao: Date;
            filmeId: number;
            salaId: number;
        }[];
        filmes: {
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
        }[];
    } & {
        id: number;
        nome: string;
        endereco: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: number, dto: UpdateCinemaDto): Promise<{
        id: number;
        nome: string;
        endereco: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        nome: string;
        endereco: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    cadastrarFilme(cinemaId: number, filmeId: number): Promise<{
        filmes: {
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
        }[];
    } & {
        id: number;
        nome: string;
        endereco: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    removerFilme(cinemaId: number, filmeId: number): Promise<{
        filmes: {
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
        }[];
    } & {
        id: number;
        nome: string;
        endereco: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
