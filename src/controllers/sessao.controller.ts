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
import { SessaoService } from '../services/sessao.service';
import { CreateSessaoDto } from '../dto/create-sessao.dto';
import { UpdateSessaoDto } from '../dto/update-sessao.dto';

@ApiTags('sessao')
@Controller('sessao')
export class SessaoController {
  constructor(private readonly sessaoService: SessaoService) {}

  @Post()
  @ApiOperation({ summary: 'Criar nova sessão' })
  create(@Body() dto: CreateSessaoDto) {
    return this.sessaoService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as sessões' })
  findAll() {
    return this.sessaoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar sessão por ID' })
  @ApiParam({ name: 'id', type: Number })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.sessaoService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar sessão' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateSessaoDto) {
    return this.sessaoService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Remover sessão' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.sessaoService.remove(id);
  }
}
