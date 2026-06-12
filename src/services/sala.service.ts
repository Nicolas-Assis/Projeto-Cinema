import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSalaDto } from '../dto/create-sala.dto';
import { UpdateSalaDto } from '../dto/update-sala.dto';

@Injectable()
export class SalaService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateSalaDto) {
    return this.prisma.sala.create({ data: dto });
  }

  findAll() {
    return this.prisma.sala.findMany({ include: { cinema: true } });
  }

  async findOne(id: number) {
    const sala = await this.prisma.sala.findUnique({
      where: { id },
      include: { cinema: true, sessoes: true },
    });
    if (!sala) throw new NotFoundException(`Sala #${id} não encontrada`);
    return sala;
  }

  async update(id: number, dto: UpdateSalaDto) {
    await this.findOne(id);
    return this.prisma.sala.update({ where: { id }, data: dto });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.sala.delete({ where: { id } });
  }

  async reservarPoutrona(id: number, fila: number, num: number) {
    const sala = await this.findOne(id);
    const matrix = sala.poutronas as number[][];
    if (fila < 0 || fila >= matrix.length) {
      throw new BadRequestException(`Fila ${fila} inválida`);
    }
    if (num < 0 || num >= matrix[fila].length) {
      throw new BadRequestException(`Poltrona ${num} inválida na fila ${fila}`);
    }
    if (matrix[fila][num] === 1) {
      throw new BadRequestException(`Poltrona ${fila}:${num} já está ocupada`);
    }
    matrix[fila][num] = 1;
    return this.prisma.sala.update({ where: { id }, data: { poutronas: matrix } });
  }

  async calcularCapacidade(id: number) {
    const sala = await this.findOne(id);
    const matrix = sala.poutronas as number[][];
    const total = matrix.reduce((sum, row) => sum + row.length, 0);
    const ocupadas = matrix.reduce(
      (sum, row) => sum + row.filter((s) => s === 1).length,
      0,
    );
    return { total, ocupadas, livres: total - ocupadas };
  }
}
