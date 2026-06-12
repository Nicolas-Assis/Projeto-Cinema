import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCinemaDto } from '../dto/create-cinema.dto';
import { UpdateCinemaDto } from '../dto/update-cinema.dto';

@Injectable()
export class CinemaService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateCinemaDto) {
    return this.prisma.cinema.create({ data: dto });
  }

  findAll() {
    return this.prisma.cinema.findMany({
      include: { salas: true, filmes: true, sessoes: true },
    });
  }

  async findOne(id: number) {
    const cinema = await this.prisma.cinema.findUnique({
      where: { id },
      include: { salas: true, filmes: true, sessoes: true },
    });
    if (!cinema) throw new NotFoundException(`Cinema #${id} não encontrado`);
    return cinema;
  }

  async update(id: number, dto: UpdateCinemaDto) {
    await this.findOne(id);
    return this.prisma.cinema.update({ where: { id }, data: dto });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.cinema.delete({ where: { id } });
  }

  async cadastrarFilme(cinemaId: number, filmeId: number) {
    await this.findOne(cinemaId);
    return this.prisma.cinema.update({
      where: { id: cinemaId },
      data: { filmes: { connect: { id: filmeId } } },
      include: { filmes: true },
    });
  }

  async removerFilme(cinemaId: number, filmeId: number) {
    await this.findOne(cinemaId);
    return this.prisma.cinema.update({
      where: { id: cinemaId },
      data: { filmes: { disconnect: { id: filmeId } } },
      include: { filmes: true },
    });
  }
}
