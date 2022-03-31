import { Inject } from '@nestjs/common';
import { AddressDITokens } from '../addressDITokens';
import { IAddress } from '../interfaces/address.interface';
import { IAddressRepository } from '../interfaces/addressRepository.interface';
import { IUseCaseFindAddresses } from '../interfaces/useCases.interface';

export class FindAddresses implements IUseCaseFindAddresses {
  constructor(
    @Inject(AddressDITokens.AddressRepository)
    private addressRepository: IAddressRepository,
  ) {}

  async execute(): Promise<IAddress[]> {
    const Addresses = await this.addressRepository.findAll();
    return Addresses;
  }
}
