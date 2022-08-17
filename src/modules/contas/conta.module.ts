import { Module } from '@nestjs/common';
import { MongoModule } from 'src/providers/mongoose-module/mongoose.module';
import { categoriaProviders } from '../categorias/models/categoria.model';
import { ContaController } from './controller/conta.controller';
import { contaProviders } from './models/conta.model';
import { ContaService } from './services/conta.service';

@Module({
  imports: [MongoModule],
  controllers: [ContaController],
  providers: [ContaService, ...contaProviders, ...categoriaProviders],
})
export class ContaModule {}
