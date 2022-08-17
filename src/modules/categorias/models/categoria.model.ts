import * as mongoose from 'mongoose';
import { PROVIDER_CONNECTION } from 'src/providers/mongo.provider';

export const CATEGORIA_MODEL = 'CATEGORIA_MODEL';

export const categoriaProviders = [
  {
    provide: CATEGORIA_MODEL,
    useFactory: (connection: mongoose.Connection) =>
      connection.model('Categoria', CategoriaSchema),
    inject: [PROVIDER_CONNECTION],
  },
];

export interface CategoriaModel extends Document {
  readonly id: string;
  readonly nome: string;
  readonly descricao: string;
  readonly data: Date;
}

export const CategoriaSchema = new mongoose.Schema({
  id: { type: String },
  nome: { type: String, require: true },
  descricao: { type: String, require: true },
  data: { type: Date, require: true },
});
