import { IsString, MinLength, IsNumber, IsInt, IsPositive, Min } from 'class-validator';

export class CreateLancheComboDto {
  @IsString()
  @MinLength(1, { message: 'Nome obrigatório' })
  nome: string;

  @IsString()
  @MinLength(5, { message: 'Descrição deve ter ao menos 5 caracteres' })
  descricao: string;

  @IsNumber()
  @Min(0, { message: 'Valor unitário deve ser >= 0' })
  valorUnitario: number;

  @IsInt()
  @IsPositive({ message: 'Quantidade deve ser positiva' })
  qtUnidade: number;

  @IsNumber()
  @Min(0, { message: 'Subtotal deve ser >= 0' })
  subtotal: number;

  @IsInt()
  @IsPositive({ message: 'ID do pedido inválido' })
  pedidoId: number;
}
