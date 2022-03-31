import { Address } from '@app/modules/address/models/address.entity';

export interface IDelivery {
  id: number;
  name: string;
  date: Date;
  startingPoint: Address;
  deliveryPoint: Address;
  createdAt: Date;
  updatedAt: Date;
}
