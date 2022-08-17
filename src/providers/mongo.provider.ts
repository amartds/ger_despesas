import * as mongoose from 'mongoose';

export const PROVIDER_CONNECTION = 'mongo-connection';

export const mongoseProviders = [
  {
    provide: PROVIDER_CONNECTION,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://localhost:27017/gerenciador_financeiro'),
  },
];
