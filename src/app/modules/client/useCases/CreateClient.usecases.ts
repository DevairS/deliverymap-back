import { Inject } from '@nestjs/common';
import { ClientDITokens } from '../clientDITokens';
import { IClient } from '../interfaces/client.interface';
import { IUseCaseCreateClient } from '../interfaces/useCases.interface';
import { ClientRepository } from '../repositories/clientRepository';

export class CreateClient implements IUseCaseCreateClient {
  constructor(
    @Inject(ClientDITokens.ClientRepository)
    private clientRepository: ClientRepository,
  ) {}

  async execute(client: IClient): Promise<IClient> {
    return await this.clientRepository.create(client);
  }
}
