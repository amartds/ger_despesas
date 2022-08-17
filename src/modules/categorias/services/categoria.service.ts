import { Body, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { CategoriaDto } from '../dto/categoria.dto';
import { CategoriaModel, CATEGORIA_MODEL } from '../models/categoria.model';

@Injectable()
export class CategoriaService {
  constructor(
    @Inject(CATEGORIA_MODEL)
    private categoriaModel: Model<CategoriaModel>,
  ) {}

  async create(@Body() categoriaDto: CategoriaDto): Promise<CategoriaModel> {
    const createdCat = new this.categoriaModel(categoriaDto);
    return createdCat.save();
  }

  async selecaoUnitaria(categoriaId: string) {
    try {
      return await this.categoriaModel.findById(categoriaId).exec();
    } catch (error) {
      throw new NotFoundException('Nada encontrado', error.message);
    }
  }
}
