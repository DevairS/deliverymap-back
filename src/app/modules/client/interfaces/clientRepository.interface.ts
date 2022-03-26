import { IClient } from './client.interface';

export interface IClientRepository {
  findAll(): Promise<IClient[]>;

  create(client: IClient): Promise<IClient>;
}
