import { Module } from '@nestjs/common';
import { MongoModule } from 'src/providers/mongoose-module/mongoose.module';
import { CategoriaController } from './controller/categoria.controller';
import { categoriaProviders } from './models/categoria.model';
import { CategoriaService } from './services/categoria.service';

@Module({
  imports: [MongoModule],
  controllers: [CategoriaController],
  providers: [CategoriaService, ...categoriaProviders],
})
export class CategoriaModule {}
