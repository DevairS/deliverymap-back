import { Body, Controller, Get, Post } from '@nestjs/common';
import { IClient } from './interfaces/client.interface';
import { CreateClient } from './useCases/CreateClient.usecases';
import { FindClients } from './useCases/FindClients.usecases';

@Controller('client')
export class ClientController {
  constructor(
    private readonly findClients: FindClients,
    private readonly createClient: CreateClient,
  ) {}
  @Get()
  getAll() {
    return this.findClients.execute();
  }

  @Post()
  create(@Body() client: IClient) {
    console.log(client);
    return this.createClient.execute(client);
  }
}
