import { IUseCase } from './useCase.interface';
import { IAndress } from './andress.interface';

export type IUseCaseFindAndresses = IUseCase<null, IAndress[]>;

export type IUseCaseCreateAndress = IUseCase<IAndress, IAndress>;
