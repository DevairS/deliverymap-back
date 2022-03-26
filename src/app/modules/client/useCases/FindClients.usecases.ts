import { Inject } from '@nestjs/common';
import { ClientDITokens } from '../clientDITokens';
import { IClient } from '../interfaces/client.interface';
import { IUseCaseFindClients } from '../interfaces/useCases.interface';
import { ClientRepository } from '../repositories/clientRepository';

export class FindClients implements IUseCaseFindClients {
  constructor(
    @Inject(ClientDITokens.ClientRepository)
    private clientRepository: ClientRepository,
  ) {}

  async execute(): Promise<IClient[]> {
    const clients = await this.clientRepository.findAll();
    return clients;
  }
}
