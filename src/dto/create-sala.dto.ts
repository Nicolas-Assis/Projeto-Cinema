import { IsInt, IsPositive, IsArray } from 'class-validator';

export class CreateSalaDto {
  @IsInt()
  @IsPositive({ message: 'Número da sala deve ser positivo' })
  numero: number;

  @IsInt()
  @IsPositive({ message: 'Capacidade deve ser positiva' })
  capacidade: number;

  @IsArray()
  poutronas: (number | number[])[];

  @IsInt()
  @IsPositive({ message: 'ID do cinema inválido' })
  cinemaId: number;
}
