import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFilmeDto } from '../dto/create-filme.dto';
import { UpdateFilmeDto } from '../dto/update-filme.dto';

@Injectable()
export class FilmeService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateFilmeDto) {
    return this.prisma.filme.create({
      data: {
        ...dto,
        dataIniciaExibicao: new Date(dto.dataIniciaExibicao),
        dataFinalExibicao: new Date(dto.dataFinalExibicao),
      },
    });
  }

  findAll() {
    return this.prisma.filme.findMany({ include: { cinemas: true } });
  }

  async findOne(id: number) {
    const filme = await this.prisma.filme.findUnique({
      where: { id },
      include: { cinemas: true, sessoes: true },
    });
    if (!filme) throw new NotFoundException(`Filme #${id} não encontrado`);
    return filme;
  }

  async update(id: number, dto: UpdateFilmeDto) {
    await this.findOne(id);
    const data: Record<string, unknown> = { ...dto };
    if (dto.dataIniciaExibicao) data.dataIniciaExibicao = new Date(dto.dataIniciaExibicao);
    if (dto.dataFinalExibicao) data.dataFinalExibicao = new Date(dto.dataFinalExibicao);
    return this.prisma.filme.update({ where: { id }, data });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.filme.delete({ where: { id } });
  }
}
