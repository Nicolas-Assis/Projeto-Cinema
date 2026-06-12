import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLancheComboDto } from '../dto/create-lanche-combo.dto';
import { UpdateLancheComboDto } from '../dto/update-lanche-combo.dto';

@Injectable()
export class LancheComboService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateLancheComboDto) {
    return this.prisma.lancheCombo.create({
      data: dto,
      include: { pedido: true },
    });
  }

  findAll() {
    return this.prisma.lancheCombo.findMany({ include: { pedido: true } });
  }

  async findOne(id: number) {
    const lanche = await this.prisma.lancheCombo.findUnique({
      where: { id },
      include: { pedido: true },
    });
    if (!lanche) throw new NotFoundException(`LancheCombo #${id} não encontrado`);
    return lanche;
  }

  async update(id: number, dto: UpdateLancheComboDto) {
    await this.findOne(id);
    return this.prisma.lancheCombo.update({ where: { id }, data: dto });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.lancheCombo.delete({ where: { id } });
  }
}
