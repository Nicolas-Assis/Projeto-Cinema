import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { IngressoService } from '../services/ingresso.service';
import { CreateIngressoDto } from '../dto/create-ingresso.dto';
import { UpdateIngressoDto } from '../dto/update-ingresso.dto';

@ApiTags('ingresso')
@Controller('ingresso')
export class IngressoController {
  constructor(private readonly ingressoService: IngressoService) {}

  @Post()
  @ApiOperation({ summary: 'Criar novo ingresso' })
  create(@Body() dto: CreateIngressoDto) {
    return this.ingressoService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os ingressos' })
  findAll() {
    return this.ingressoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar ingresso por ID' })
  @ApiParam({ name: 'id', type: Number })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.ingressoService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar ingresso' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateIngressoDto) {
    return this.ingressoService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Remover ingresso' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.ingressoService.remove(id);
  }
}
