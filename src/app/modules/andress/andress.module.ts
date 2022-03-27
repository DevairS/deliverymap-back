import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AndressDITokens } from './andressDITokens';
import { AndressController } from './andress.controller';
import { Andress } from './models/andress.entity';
import { AndressRepository } from './repositories/andressRepository';
import { FindAndresses } from './useCases/findAndress.usecases';
import { CreateAndress } from './useCases/createAndress.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([Andress])],
  providers: [
    {
      useClass: AndressRepository,
      provide: AndressDITokens.AndressRepository,
    },
    FindAndresses,
    CreateAndress,
  ],
  controllers: [AndressController],
  exports: [
    {
      useClass: AndressRepository,
      provide: AndressDITokens.AndressRepository,
    },
    FindAndresses,
    CreateAndress,
  ],
})
export class AndressModule {}
