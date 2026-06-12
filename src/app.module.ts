import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CinemaController } from './controllers/cinema.controller';
import { SalaController } from './controllers/sala.controller';
import { FilmeController } from './controllers/filme.controller';
import { SessaoController } from './controllers/sessao.controller';
import { IngressoController } from './controllers/ingresso.controller';
import { PedidoController } from './controllers/pedido.controller';
import { LancheComboController } from './controllers/lanche-combo.controller';

import { CinemaService } from './services/cinema.service';
import { SalaService } from './services/sala.service';
import { FilmeService } from './services/filme.service';
import { SessaoService } from './services/sessao.service';
import { IngressoService } from './services/ingresso.service';
import { PedidoService } from './services/pedido.service';
import { LancheComboService } from './services/lanche-combo.service';

@Module({
  imports: [PrismaModule],
  controllers: [
    AppController,
    CinemaController,
    SalaController,
    FilmeController,
    SessaoController,
    IngressoController,
    PedidoController,
    LancheComboController,
  ],
  providers: [
    AppService,
    CinemaService,
    SalaService,
    FilmeService,
    SessaoService,
    IngressoService,
    PedidoService,
    LancheComboService,
  ],
})
export class AppModule {}
