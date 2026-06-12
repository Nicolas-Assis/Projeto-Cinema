export type GeneroFilme =
  | 'ACAO'
  | 'AVENTURA'
  | 'COMEDIA'
  | 'DRAMA'
  | 'FANTASIA'
  | 'FICCAO_CIENTIFICA'
  | 'TERROR'
  | 'ROMANCE'
  | 'ANIMACAO'
  | 'DOCUMENTARIO'
  | 'SUSPENSE'
  | 'MUSICAL'
  | 'OUTRO'

export const GENERO_LABELS: Record<GeneroFilme, string> = {
  ACAO: 'Ação',
  AVENTURA: 'Aventura',
  COMEDIA: 'Comédia',
  DRAMA: 'Drama',
  FANTASIA: 'Fantasia',
  FICCAO_CIENTIFICA: 'Ficção Científica',
  TERROR: 'Terror',
  ROMANCE: 'Romance',
  ANIMACAO: 'Animação',
  DOCUMENTARIO: 'Documentário',
  SUSPENSE: 'Suspense',
  MUSICAL: 'Musical',
  OUTRO: 'Outro',
}

export interface Cinema {
  id: number
  nome: string
  endereco: string
  salas: Sala[]
  filmes: Filme[]
  sessoes: Sessao[]
  createdAt: string
  updatedAt: string
}

export interface Sala {
  id: number
  numero: number
  capacidade: number
  poutronas: number[][]
  cinemaId: number
  cinema?: Cinema
  createdAt: string
  updatedAt: string
}

export interface Filme {
  id: number
  titulo: string
  sinopse: string
  classificacao: string
  duracao: number
  elenco: string
  genero: GeneroFilme
  dataIniciaExibicao: string
  dataFinalExibicao: string
  cinemas: Cinema[]
  createdAt: string
  updatedAt: string
}

export interface Sessao {
  id: number
  horarioExibicao: string
  filmeId: number
  filme?: Filme
  salaId: number
  sala?: Sala
  cinemaId: number
  cinema?: Cinema
  ingressos: Ingresso[]
  createdAt: string
  updatedAt: string
}

export interface Ingresso {
  id: number
  valorInteira: number
  valorMeia: number
  sessaoId: number
  sessao?: Sessao
  createdAt: string
  updatedAt: string
}

export interface Pedido {
  id: number
  qtInteira: number
  qtMeia: number
  valorTotal: number
  ingressos: Ingresso[]
  lanches: LancheCombo[]
  createdAt: string
  updatedAt: string
}

export interface LancheCombo {
  id: number
  nome: string
  descricao: string
  valorUnitario: number
  qtUnidade: number
  subtotal: number
  pedidoId: number
  pedido?: Pedido
  createdAt: string
  updatedAt: string
}

// Create DTOs
export interface CreateCinema { nome: string; endereco: string }
export interface CreateSala { numero: number; capacidade: number; poutronas: number[][]; cinemaId: number }
export interface CreateFilme {
  titulo: string; sinopse: string; classificacao: string; duracao: number
  elenco: string; genero: GeneroFilme; dataIniciaExibicao: string; dataFinalExibicao: string
}
export interface CreateSessao { horarioExibicao: string; filmeId: number; salaId: number; cinemaId: number }
export interface CreateIngresso { valorInteira: number; valorMeia: number; sessaoId: number }
export interface CreatePedido { qtInteira: number; qtMeia: number; valorTotal: number; ingressoIds?: number[] }
export interface CreateLanche { nome: string; descricao: string; valorUnitario: number; qtUnidade: number; subtotal: number; pedidoId: number }

// Update DTOs (all fields optional)
export type UpdateCinema = Partial<CreateCinema>
export type UpdateSala = Partial<CreateSala>
export type UpdateFilme = Partial<CreateFilme>
export type UpdateSessao = Partial<CreateSessao>
export type UpdateIngresso = Partial<CreateIngresso>
export type UpdatePedido = Partial<CreatePedido>
export type UpdateLanche = Partial<CreateLanche>
