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
import { PedidoService } from '../services/pedido.service';
import { CreatePedidoDto } from '../dto/create-pedido.dto';
import { UpdatePedidoDto } from '../dto/update-pedido.dto';

@ApiTags('pedido')
@Controller('pedido')
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

  @Post()
  @ApiOperation({ summary: 'Criar novo pedido' })
  create(@Body() dto: CreatePedidoDto) {
    return this.pedidoService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os pedidos' })
  findAll() {
    return this.pedidoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar pedido por ID' })
  @ApiParam({ name: 'id', type: Number })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.pedidoService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar pedido' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdatePedidoDto) {
    return this.pedidoService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Remover pedido' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.pedidoService.remove(id);
  }

  @Post(':pedidoId/ingressos/:ingressoId')
  @ApiOperation({ summary: 'Adicionar ingresso ao pedido' })
  adicionarIngresso(
    @Param('pedidoId', ParseIntPipe) pedidoId: number,
    @Param('ingressoId', ParseIntPipe) ingressoId: number,
  ) {
    return this.pedidoService.adicionarIngresso(pedidoId, ingressoId);
  }

  @Delete(':pedidoId/ingressos/:ingressoId')
  @ApiOperation({ summary: 'Remover ingresso do pedido' })
  removerIngresso(
    @Param('pedidoId', ParseIntPipe) pedidoId: number,
    @Param('ingressoId', ParseIntPipe) ingressoId: number,
  ) {
    return this.pedidoService.removerIngresso(pedidoId, ingressoId);
  }

  @Post(':pedidoId/lanches/:lancheId')
  @ApiOperation({ summary: 'Adicionar lanche ao pedido' })
  adicionaLanche(
    @Param('pedidoId', ParseIntPipe) pedidoId: number,
    @Param('lancheId', ParseIntPipe) lancheId: number,
  ) {
    return this.pedidoService.adicionaLanche(pedidoId, lancheId);
  }

  @Delete(':pedidoId/lanches/:lancheId')
  @ApiOperation({ summary: 'Remover lanche do pedido' })
  removerLanche(
    @Param('pedidoId', ParseIntPipe) pedidoId: number,
    @Param('lancheId', ParseIntPipe) lancheId: number,
  ) {
    return this.pedidoService.removerLanche(pedidoId, lancheId);
  }
}
