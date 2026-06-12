import { IngressoService } from '../services/ingresso.service';
import { CreateIngressoDto } from '../dto/create-ingresso.dto';
import { UpdateIngressoDto } from '../dto/update-ingresso.dto';
export declare class IngressoController {
    private readonly ingressoService;
    constructor(ingressoService: IngressoService);
    create(dto: CreateIngressoDto): import("../generated/prisma/models").Prisma__IngressoClient<{
        sessao: {
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
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        valorInteira: number;
        valorMeia: number;
        sessaoId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    findAll(): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        sessao: {
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
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        valorInteira: number;
        valorMeia: number;
        sessaoId: number;
    })[]>;
    findOne(id: number): Promise<{
        sessao: {
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
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        valorInteira: number;
        valorMeia: number;
        sessaoId: number;
    }>;
    update(id: number, dto: UpdateIngressoDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        valorInteira: number;
        valorMeia: number;
        sessaoId: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        valorInteira: number;
        valorMeia: number;
        sessaoId: number;
    }>;
}
