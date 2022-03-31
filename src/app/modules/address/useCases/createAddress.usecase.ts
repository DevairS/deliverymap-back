import { Inject } from '@nestjs/common';
import { AddressDITokens } from '../addressDITokens';
import { IAddress } from '../interfaces/address.interface';
import { IUseCaseCreateAddress } from '../interfaces/useCases.interface';
import { AddressRepository } from '../repositories/addressRepository';

export class CreateAddress implements IUseCaseCreateAddress {
  constructor(
    @Inject(AddressDITokens.AddressRepository)
    private addressRepository: AddressRepository,
  ) {}

  async execute(address: IAddress): Promise<IAddress> {
    return await this.addressRepository.create(address);
  }
}
