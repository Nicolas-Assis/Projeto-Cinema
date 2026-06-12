import { IsString, MinLength } from 'class-validator';

export class CreateCinemaDto {
  @IsString()
  @MinLength(2, { message: 'Nome deve ter ao menos 2 caracteres' })
  nome: string;

  @IsString()
  @MinLength(5, { message: 'Endereço deve ter ao menos 5 caracteres' })
  endereco: string;
}
