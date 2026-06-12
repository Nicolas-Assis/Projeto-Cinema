import { IsString, MinLength, IsInt, IsPositive, IsEnum, IsISO8601 } from 'class-validator';

export enum GeneroFilme {
  ACAO = 'ACAO',
  AVENTURA = 'AVENTURA',
  COMEDIA = 'COMEDIA',
  DRAMA = 'DRAMA',
  FANTASIA = 'FANTASIA',
  FICCAO_CIENTIFICA = 'FICCAO_CIENTIFICA',
  TERROR = 'TERROR',
  ROMANCE = 'ROMANCE',
  ANIMACAO = 'ANIMACAO',
  DOCUMENTARIO = 'DOCUMENTARIO',
  SUSPENSE = 'SUSPENSE',
  MUSICAL = 'MUSICAL',
  OUTRO = 'OUTRO',
}

export class CreateFilmeDto {
  @IsString()
  @MinLength(1, { message: 'Título obrigatório' })
  titulo: string;

  @IsString()
  @MinLength(10, { message: 'Sinopse deve ter ao menos 10 caracteres' })
  sinopse: string;

  @IsString()
  @MinLength(1, { message: 'Classificação obrigatória' })
  classificacao: string;

  @IsInt()
  @IsPositive({ message: 'Duração deve ser positiva (em minutos)' })
  duracao: number;

  @IsString()
  @MinLength(1, { message: 'Elenco obrigatório' })
  elenco: string;

  @IsEnum(GeneroFilme)
  genero: GeneroFilme;

  @IsISO8601({}, { message: 'Data de início inválida (ISO 8601)' })
  dataIniciaExibicao: string;

  @IsISO8601({}, { message: 'Data final inválida (ISO 8601)' })
  dataFinalExibicao: string;
}
