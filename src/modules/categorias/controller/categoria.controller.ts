import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CategoriaDto } from '../dto/categoria.dto';
import { CategoriaModel } from '../models/categoria.model';
import { CategoriaService } from '../services/categoria.service';
export type FindOneCategoria = { categoriaId: string };
@Controller('categorias')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Post()
  async criacao(@Body() categoriaDto: CategoriaDto): Promise<CategoriaModel> {
    console.log(categoriaDto);
    return this.categoriaService.create(categoriaDto);
  }

  @Get(':categoriaId')
  async selecaoUnitaria(@Param() { categoriaId }: FindOneCategoria) {
    return this.categoriaService.selecaoUnitaria(categoriaId);
  }
}
