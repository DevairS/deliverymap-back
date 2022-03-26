import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientDITokens } from './clientDITokens';
import { ClientController } from './client.controller';
import { ClientEntity } from './models/client.entity';
import { ClientRepository } from './repositories/clientRepository';
import { FindClients } from './useCases/FindClients.usecases';
import { CreateClient } from './useCases/CreateClient.usecases';

@Module({
  imports: [TypeOrmModule.forFeature([ClientEntity])],
  providers: [
    {
      useClass: ClientRepository,
      provide: ClientDITokens.ClientRepository,
    },
    FindClients,
    CreateClient,
  ],
  controllers: [ClientController],
})
export class ClientModule {}
