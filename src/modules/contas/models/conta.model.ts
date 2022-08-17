import * as mongoose from 'mongoose';
import { CategoriaModel } from 'src/modules/categorias/models/categoria.model';
import { PROVIDER_CONNECTION } from 'src/providers/mongo.provider';

export const CONTA_MODEL = 'CONTA_MODEL';

export const contaProviders = [
  {
    provide: CONTA_MODEL,
    useFactory: (connection: mongoose.Connection) =>
      connection.model('Conta', ContaSchema),
    inject: [PROVIDER_CONNECTION],
  },
];

export interface Conta extends Document {
  readonly valor: number;
  readonly descricao: string;
  readonly data: Date;
  readonly categoria: Array<CategoriaModel>;
}

export const ContaSchema = new mongoose.Schema({
  valor: Number,
  descricao: String,
  data: Date,
  categoria: Array<CategoriaModel>,
});
