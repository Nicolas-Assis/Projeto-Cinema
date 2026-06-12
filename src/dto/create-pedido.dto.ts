import { IsInt, Min, IsNumber, IsArray, ArrayMinSize, IsPositive } from 'class-validator';

export class CreatePedidoDto {
  @IsInt()
  @Min(0, { message: 'Quantidade deve ser >= 0' })
  qtInteira: number;

  @IsInt()
  @Min(0, { message: 'Quantidade deve ser >= 0' })
  qtMeia: number;

  @IsNumber()
  @Min(0, { message: 'Valor total deve ser >= 0' })
  valorTotal: number;

  @IsArray()
  @ArrayMinSize(1, { message: 'Ao menos um ingresso é obrigatório' })
  @IsInt({ each: true })
  @IsPositive({ each: true })
  ingressoIds: number[];
}
