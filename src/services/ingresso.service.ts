import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateIngressoDto } from '../dto/create-ingresso.dto';
import { UpdateIngressoDto } from '../dto/update-ingresso.dto';

@Injectable()
export class IngressoService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateIngressoDto) {
    return this.prisma.ingresso.create({
      data: dto,
      include: { sessao: { include: { filme: true } } },
    });
  }

  findAll() {
    return this.prisma.ingresso.findMany({
      include: { sessao: { include: { filme: true } } },
    });
  }

  async findOne(id: number) {
    const ingresso = await this.prisma.ingresso.findUnique({
      where: { id },
      include: { sessao: { include: { filme: true, sala: true } } },
    });
    if (!ingresso) throw new NotFoundException(`Ingresso #${id} não encontrado`);
    return ingresso;
  }

  async update(id: number, dto: UpdateIngressoDto) {
    await this.findOne(id);
    return this.prisma.ingresso.update({ where: { id }, data: dto });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.ingresso.delete({ where: { id } });
  }
}
