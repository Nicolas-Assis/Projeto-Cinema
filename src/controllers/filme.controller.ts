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
import { FilmeService } from '../services/filme.service';
import { CreateFilmeDto } from '../dto/create-filme.dto';
import { UpdateFilmeDto } from '../dto/update-filme.dto';

@ApiTags('filme')
@Controller('filme')
export class FilmeController {
  constructor(private readonly filmeService: FilmeService) {}

  @Post()
  @ApiOperation({ summary: 'Criar novo filme' })
  create(@Body() dto: CreateFilmeDto) {
    return this.filmeService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os filmes' })
  findAll() {
    return this.filmeService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar filme por ID' })
  @ApiParam({ name: 'id', type: Number })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.filmeService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar filme' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateFilmeDto) {
    return this.filmeService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Remover filme' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.filmeService.remove(id);
  }
}
