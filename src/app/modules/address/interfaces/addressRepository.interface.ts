import { IAddress } from './address.interface';

export interface IAddressRepository {
  findAll(): Promise<IAddress[]>;
  create(address: IAddress): Promise<IAddress>;
}
