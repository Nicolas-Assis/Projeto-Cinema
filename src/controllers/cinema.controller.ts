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
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CinemaService } from '../services/cinema.service';
import { CreateCinemaDto } from '../dto/create-cinema.dto';
import { UpdateCinemaDto } from '../dto/update-cinema.dto';

@ApiTags('cinema')
@Controller('cinema')
export class CinemaController {
  constructor(private readonly cinemaService: CinemaService) {}

  @Post()
  @ApiOperation({ summary: 'Criar novo cinema' })
  @ApiResponse({ status: 201, description: 'Cinema criado com sucesso.' })
  create(@Body() dto: CreateCinemaDto) {
    return this.cinemaService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os cinemas' })
  findAll() {
    return this.cinemaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar cinema por ID' })
  @ApiParam({ name: 'id', type: Number })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.cinemaService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar cinema' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateCinemaDto) {
    return this.cinemaService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Remover cinema' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.cinemaService.remove(id);
  }

  @Post(':cinemaId/filmes/:filmeId')
  @ApiOperation({ summary: 'Associar filme ao cinema (M:N)' })
  cadastrarFilme(
    @Param('cinemaId', ParseIntPipe) cinemaId: number,
    @Param('filmeId', ParseIntPipe) filmeId: number,
  ) {
    return this.cinemaService.cadastrarFilme(cinemaId, filmeId);
  }

  @Delete(':cinemaId/filmes/:filmeId')
  @ApiOperation({ summary: 'Desassociar filme do cinema' })
  removerFilme(
    @Param('cinemaId', ParseIntPipe) cinemaId: number,
    @Param('filmeId', ParseIntPipe) filmeId: number,
  ) {
    return this.cinemaService.removerFilme(cinemaId, filmeId);
  }
}
