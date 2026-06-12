import { SalaService } from '../services/sala.service';
import { CreateSalaDto } from '../dto/create-sala.dto';
import { UpdateSalaDto } from '../dto/update-sala.dto';
export declare class SalaController {
    private readonly salaService;
    constructor(salaService: SalaService);
    create(dto: CreateSalaDto): import("../generated/prisma/models").Prisma__SalaClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        numero: number;
        capacidade: number;
        poutronas: import("@prisma/client/runtime/client").JsonValue;
        cinemaId: number;
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
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        numero: number;
        capacidade: number;
        poutronas: import("@prisma/client/runtime/client").JsonValue;
        cinemaId: number;
    })[]>;
    findOne(id: number): Promise<{
        cinema: {
            id: number;
            nome: string;
            endereco: string;
            createdAt: Date;
            updatedAt: Date;
        };
        sessoes: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            cinemaId: number;
            horarioExibicao: Date;
            filmeId: number;
            salaId: number;
        }[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        numero: number;
        capacidade: number;
        poutronas: import("@prisma/client/runtime/client").JsonValue;
        cinemaId: number;
    }>;
    update(id: number, dto: UpdateSalaDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        numero: number;
        capacidade: number;
        poutronas: import("@prisma/client/runtime/client").JsonValue;
        cinemaId: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        numero: number;
        capacidade: number;
        poutronas: import("@prisma/client/runtime/client").JsonValue;
        cinemaId: number;
    }>;
    reservarPoutrona(id: number, fila: number, num: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        numero: number;
        capacidade: number;
        poutronas: import("@prisma/client/runtime/client").JsonValue;
        cinemaId: number;
    }>;
    calcularCapacidade(id: number): Promise<{
        total: number;
        ocupadas: number;
        livres: number;
    }>;
}
