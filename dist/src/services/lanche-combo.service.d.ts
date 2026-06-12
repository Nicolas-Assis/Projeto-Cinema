import { PrismaService } from '../prisma/prisma.service';
import { CreateLancheComboDto } from '../dto/create-lanche-combo.dto';
import { UpdateLancheComboDto } from '../dto/update-lanche-combo.dto';
export declare class LancheComboService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateLancheComboDto): import("../generated/prisma/models").Prisma__LancheComboClient<{
        pedido: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            qtInteira: number;
            qtMeia: number;
            valorTotal: number;
        };
    } & {
        id: number;
        nome: string;
        createdAt: Date;
        updatedAt: Date;
        descricao: string;
        valorUnitario: number;
        qtUnidade: number;
        subtotal: number;
        pedidoId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    findAll(): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        pedido: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            qtInteira: number;
            qtMeia: number;
            valorTotal: number;
        };
    } & {
        id: number;
        nome: string;
        createdAt: Date;
        updatedAt: Date;
        descricao: string;
        valorUnitario: number;
        qtUnidade: number;
        subtotal: number;
        pedidoId: number;
    })[]>;
    findOne(id: number): Promise<{
        pedido: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            qtInteira: number;
            qtMeia: number;
            valorTotal: number;
        };
    } & {
        id: number;
        nome: string;
        createdAt: Date;
        updatedAt: Date;
        descricao: string;
        valorUnitario: number;
        qtUnidade: number;
        subtotal: number;
        pedidoId: number;
    }>;
    update(id: number, dto: UpdateLancheComboDto): Promise<{
        id: number;
        nome: string;
        createdAt: Date;
        updatedAt: Date;
        descricao: string;
        valorUnitario: number;
        qtUnidade: number;
        subtotal: number;
        pedidoId: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        nome: string;
        createdAt: Date;
        updatedAt: Date;
        descricao: string;
        valorUnitario: number;
        qtUnidade: number;
        subtotal: number;
        pedidoId: number;
    }>;
}
