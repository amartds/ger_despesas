import { Module } from '@nestjs/common';
import { mongoseProviders } from '../mongo.provider';

@Module({
  providers: [...mongoseProviders],
  exports: [...mongoseProviders],
})
export class MongoModule {}
