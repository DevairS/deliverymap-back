import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IClient } from '../interfaces/client.interface';
import { IClientRepository } from '../interfaces/clientRepository.interface';
import { ClientEntity } from '../models/client.entity';

export class ClientRepository implements IClientRepository {
  constructor(
    @InjectRepository(ClientEntity)
    private clientRepository: Repository<ClientEntity>,
  ) {}

  async findAll(): Promise<IClient[]> {
    return this.clientRepository.find();
  }

  async create(client: IClient): Promise<IClient> {
    return this.clientRepository.save(client);
  }
}
