import { Body, Controller, Get, Post } from '@nestjs/common';
import { CriacaoContaDto } from '../dto/create-conta.dto';
import { Conta } from '../models/conta.model';
import { ContaService } from '../services/conta.service';

@Controller('contas')
export class ContaController {
  constructor(private readonly contaService: ContaService) {}

  @Post()
  async criacao(@Body() contaDto: CriacaoContaDto): Promise<Conta> {
    return this.contaService.create(contaDto);
  }

  @Get()
  async selecaoUnitaria(): Promise<Array<Conta>> {
    return this.contaService.selecaoUnitaria();
  }
}
