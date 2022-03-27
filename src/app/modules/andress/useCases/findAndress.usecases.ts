import { Inject } from '@nestjs/common';
import { AndressDITokens } from '../andressDITokens';
import { IAndress } from '../interfaces/andress.interface';
import { IAndressRepository } from '../interfaces/andressRepository.interface';
import { IUseCaseFindAndresses } from '../interfaces/useCases.interface';

export class FindAndresses implements IUseCaseFindAndresses {
  constructor(
    @Inject(AndressDITokens.AndressRepository)
    private andressRepository: IAndressRepository,
  ) {}

  async execute(): Promise<IAndress[]> {
    const Andresses = await this.andressRepository.findAll();
    return Andresses;
  }
}
