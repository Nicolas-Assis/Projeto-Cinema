import { IsNumber, IsInt, IsPositive, Min } from 'class-validator';

export class CreateIngressoDto {
  @IsNumber()
  @Min(0, { message: 'Valor inteira deve ser >= 0' })
  valorInteira: number;

  @IsNumber()
  @Min(0, { message: 'Valor meia deve ser >= 0' })
  valorMeia: number;

  @IsInt()
  @IsPositive({ message: 'ID da sessão inválido' })
  sessaoId: number;
}
