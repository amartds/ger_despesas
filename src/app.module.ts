import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriaModule } from './modules/categorias/categoria.module';
import { ContaModule } from './modules/contas/conta.module';

@Module({
  imports: [ContaModule, CategoriaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
