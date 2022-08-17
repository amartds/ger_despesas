import { Body, Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CriacaoContaDto } from '../dto/create-conta.dto';
import { Conta, CONTA_MODEL } from '../models/conta.model';

@Injectable()
export class ContaService {
  constructor(
    @Inject(CONTA_MODEL)
    private contaModel: Model<Conta>,
  ) {}

  async create(@Body() contaDto: CriacaoContaDto): Promise<Conta> {
    const createdCat = new this.contaModel(contaDto);
    return createdCat.save();
  }

  async selecaoUnitaria(): Promise<Array<Conta>> {
    return this.contaModel.find().exec();
  }
}
