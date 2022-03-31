import { IDelivery } from './delivery.interface';

export interface IDeliveryRepository {
  findAll(): Promise<IDelivery[]>;

  create(Delivery: IDelivery): Promise<IDelivery>;

  findById(id: string): Promise<IDelivery>;
}
