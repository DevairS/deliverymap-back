import { IClient } from './client.interface';
import { IUseCase } from './useCase.interface';

export type IUseCaseFindClients = IUseCase<null, IClient[]>;

export type IUseCaseCreateClient = IUseCase<IClient, IClient>;
