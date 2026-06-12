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
import { LancheComboService } from '../services/lanche-combo.service';
import { CreateLancheComboDto } from '../dto/create-lanche-combo.dto';
import { UpdateLancheComboDto } from '../dto/update-lanche-combo.dto';

@ApiTags('lanche-combo')
@Controller('lanche-combo')
export class LancheComboController {
  constructor(private readonly lancheComboService: LancheComboService) {}

  @Post()
  @ApiOperation({ summary: 'Criar novo lanche/combo' })
  create(@Body() dto: CreateLancheComboDto) {
    return this.lancheComboService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os lanches/combos' })
  findAll() {
    return this.lancheComboService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar lanche/combo por ID' })
  @ApiParam({ name: 'id', type: Number })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.lancheComboService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar lanche/combo' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateLancheComboDto) {
    return this.lancheComboService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Remover lanche/combo' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.lancheComboService.remove(id);
  }
}
