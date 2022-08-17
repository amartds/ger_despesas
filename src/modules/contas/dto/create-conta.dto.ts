import { Type } from 'class-transformer';
import { IsDateString, IsNumber, IsString } from 'class-validator';
import { CategoriaDto } from 'src/modules/categorias/dto/categoria.dto';

export class CriacaoContaDto {
  @IsNumber()
  valor: number;

  @IsString()
  descricao: string;

  @IsDateString()
  @Type(() => Date)
  data: Date;

  categoria: Array<CategoriaDto>;
}
