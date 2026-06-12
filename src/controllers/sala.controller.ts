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
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { SalaService } from '../services/sala.service';
import { CreateSalaDto } from '../dto/create-sala.dto';
import { UpdateSalaDto } from '../dto/update-sala.dto';

@ApiTags('sala')
@Controller('sala')
export class SalaController {
  constructor(private readonly salaService: SalaService) {}

  @Post()
  @ApiOperation({ summary: 'Criar nova sala' })
  create(@Body() dto: CreateSalaDto) {
    return this.salaService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as salas' })
  findAll() {
    return this.salaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar sala por ID' })
  @ApiParam({ name: 'id', type: Number })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.salaService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar sala' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateSalaDto) {
    return this.salaService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Remover sala' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.salaService.remove(id);
  }

  @Post(':id/reservar')
  @ApiOperation({ summary: 'Reservar uma poltrona' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        fila: { type: 'integer', example: 0 },
        num: { type: 'integer', example: 2 },
      },
      required: ['fila', 'num'],
    },
  })
  reservarPoutrona(
    @Param('id', ParseIntPipe) id: number,
    @Body('fila', ParseIntPipe) fila: number,
    @Body('num', ParseIntPipe) num: number,
  ) {
    return this.salaService.reservarPoutrona(id, fila, num);
  }

  @Get(':id/capacidade')
  @ApiOperation({ summary: 'Calcular capacidade disponível da sala' })
  calcularCapacidade(@Param('id', ParseIntPipe) id: number) {
    return this.salaService.calcularCapacidade(id);
  }
}
