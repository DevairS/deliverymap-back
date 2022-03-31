import { IDelivery } from './delivery.interface';
import { IUseCase } from './useCase.interface';

export type IUseCaseFindDeliveries = IUseCase<null, IDelivery[]>;

export type IUseCaseCreateDelivery = IUseCase<IDelivery, IDelivery>;

export type IUseCaseFindDeliveryById = IUseCase<string, IDelivery>;
