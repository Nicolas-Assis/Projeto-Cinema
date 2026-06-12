import { IsISO8601, IsInt, IsPositive } from 'class-validator';

export class CreateSessaoDto {
  @IsISO8601({}, { message: 'Horário inválido (ISO 8601)' })
  horarioExibicao: string;

  @IsInt()
  @IsPositive({ message: 'ID do filme inválido' })
  filmeId: number;

  @IsInt()
  @IsPositive({ message: 'ID da sala inválido' })
  salaId: number;

  @IsInt()
  @IsPositive({ message: 'ID do cinema inválido' })
  cinemaId: number;
}
