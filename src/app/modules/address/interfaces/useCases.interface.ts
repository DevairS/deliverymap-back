import { IUseCase } from './useCase.interface';
import { IAddress } from './address.interface';

export type IUseCaseFindAddresses = IUseCase<null, IAddress[]>;

export type IUseCaseCreateAddress = IUseCase<IAddress, IAddress>;
