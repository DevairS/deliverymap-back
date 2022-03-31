import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IAddress } from '../interfaces/address.interface';
import { IAddressRepository } from '../interfaces/addressRepository.interface';
import { Address } from '../models/address.entity';

export class AddressRepository implements IAddressRepository {
  constructor(
    @InjectRepository(Address)
    private addressRepository: Repository<Address>,
  ) {}

  async findAll(): Promise<IAddress[]> {
    return this.addressRepository.find();
  }

  async create(address: IAddress): Promise<IAddress> {
    return this.addressRepository.save(address);
  }
}
