import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateAddress } from './useCases/createAddress.usecase';
import { FindAddresses } from './useCases/findAddress.usecases';

@Controller('address')
export class AddressController {
  constructor(
    private readonly findAddresses: FindAddresses,
    private readonly createAddress: CreateAddress,
  ) {}
  @Get()
  getAll() {
    return this.findAddresses.execute();
  }
  @Post()
  create(@Body() address) {
    return this.createAddress.execute(address);
  }
}
