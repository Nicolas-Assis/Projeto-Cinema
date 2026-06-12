import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePedidoDto } from '../dto/create-pedido.dto';
import { UpdatePedidoDto } from '../dto/update-pedido.dto';

@Injectable()
export class PedidoService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreatePedidoDto) {
    const { ingressoIds, ...rest } = dto;
    return this.prisma.pedido.create({
      data: {
        ...rest,
        ingressos: { connect: (ingressoIds ?? []).map((id) => ({ id })) },
      },
      include: { ingressos: true, lanches: true },
    });
  }

  findAll() {
    return this.prisma.pedido.findMany({
      include: {
        ingressos: { include: { sessao: { include: { filme: true } } } },
        lanches: true,
      },
    });
  }

  async findOne(id: number) {
    const pedido = await this.prisma.pedido.findUnique({
      where: { id },
      include: {
        ingressos: { include: { sessao: { include: { filme: true } } } },
        lanches: true,
      },
    });
    if (!pedido) throw new NotFoundException(`Pedido #${id} não encontrado`);
    return pedido;
  }

  async update(id: number, dto: UpdatePedidoDto) {
    await this.findOne(id);
    const { ingressoIds, ...rest } = dto;
    const data: Record<string, unknown> = { ...rest };
    if (ingressoIds) {
      data.ingressos = { set: ingressoIds.map((id) => ({ id })) };
    }
    return this.prisma.pedido.update({
      where: { id },
      data,
      include: { ingressos: true, lanches: true },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.pedido.delete({ where: { id } });
  }

  async adicionarIngresso(pedidoId: number, ingressoId: number) {
    await this.findOne(pedidoId);
    return this.prisma.pedido.update({
      where: { id: pedidoId },
      data: { ingressos: { connect: { id: ingressoId } } },
      include: { ingressos: true },
    });
  }

  async removerIngresso(pedidoId: number, ingressoId: number) {
    await this.findOne(pedidoId);
    return this.prisma.pedido.update({
      where: { id: pedidoId },
      data: { ingressos: { disconnect: { id: ingressoId } } },
      include: { ingressos: true },
    });
  }

  async adicionaLanche(pedidoId: number, lancheId: number) {
    await this.findOne(pedidoId);
    return this.prisma.lancheCombo.update({
      where: { id: lancheId },
      data: { pedidoId },
    });
  }

  async removerLanche(pedidoId: number, lancheId: number) {
    await this.findOne(pedidoId);
    return this.prisma.lancheCombo.delete({ where: { id: lancheId } });
  }
}
