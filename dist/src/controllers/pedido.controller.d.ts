import { PedidoService } from '../services/pedido.service';
import { CreatePedidoDto } from '../dto/create-pedido.dto';
import { UpdatePedidoDto } from '../dto/update-pedido.dto';
export declare class PedidoController {
    private readonly pedidoService;
    constructor(pedidoService: PedidoService);
    create(dto: CreatePedidoDto): import("../generated/prisma/models").Prisma__PedidoClient<{
        ingressos: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            valorInteira: number;
            valorMeia: number;
            sessaoId: number;
        }[];
        lanches: {
            id: number;
            nome: string;
            createdAt: Date;
            updatedAt: Date;
            descricao: string;
            valorUnitario: number;
            qtUnidade: number;
            subtotal: number;
            pedidoId: number;
        }[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        qtInteira: number;
        qtMeia: number;
        valorTotal: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    findAll(): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        ingressos: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            valorInteira: number;
            valorMeia: number;
            sessaoId: number;
        }[];
        lanches: {
            id: number;
            nome: string;
            createdAt: Date;
            updatedAt: Date;
            descricao: string;
            valorUnitario: number;
            qtUnidade: number;
            subtotal: number;
            pedidoId: number;
        }[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        qtInteira: number;
        qtMeia: number;
        valorTotal: number;
    })[]>;
    findOne(id: number): Promise<{
        ingressos: ({
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
        })[];
        lanches: {
            id: number;
            nome: string;
            createdAt: Date;
            updatedAt: Date;
            descricao: string;
            valorUnitario: number;
            qtUnidade: number;
            subtotal: number;
            pedidoId: number;
        }[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        qtInteira: number;
        qtMeia: number;
        valorTotal: number;
    }>;
    update(id: number, dto: UpdatePedidoDto): Promise<{
        ingressos: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            valorInteira: number;
            valorMeia: number;
            sessaoId: number;
        }[];
        lanches: {
            id: number;
            nome: string;
            createdAt: Date;
            updatedAt: Date;
            descricao: string;
            valorUnitario: number;
            qtUnidade: number;
            subtotal: number;
            pedidoId: number;
        }[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        qtInteira: number;
        qtMeia: number;
        valorTotal: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        qtInteira: number;
        qtMeia: number;
        valorTotal: number;
    }>;
    adicionarIngresso(pedidoId: number, ingressoId: number): Promise<{
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
        qtInteira: number;
        qtMeia: number;
        valorTotal: number;
    }>;
    removerIngresso(pedidoId: number, ingressoId: number): Promise<{
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
        qtInteira: number;
        qtMeia: number;
        valorTotal: number;
    }>;
    adicionaLanche(pedidoId: number, lancheId: number): Promise<{
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
    removerLanche(pedidoId: number, lancheId: number): Promise<{
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
