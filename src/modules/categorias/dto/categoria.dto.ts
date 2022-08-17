import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CategoriaDto {
  @Type(() => String)
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  descricao: string;

  @IsDate()
  @Type(() => Date)
  data: Date;
}
