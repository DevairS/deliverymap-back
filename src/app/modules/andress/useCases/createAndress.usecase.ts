import { Inject } from '@nestjs/common';
import { AndressDITokens } from '../andressDITokens';
import { IAndress } from '../interfaces/andress.interface';
import { IUseCaseCreateAndress } from '../interfaces/useCases.interface';
import { AndressRepository } from '../repositories/andressRepository';

export class CreateAndress implements IUseCaseCreateAndress {
  constructor(
    @Inject(AndressDITokens.AndressRepository)
    private andressRepository: AndressRepository,
  ) {}

  async execute(andress: IAndress): Promise<IAndress> {
    return await this.andressRepository.create(andress);
  }
}
