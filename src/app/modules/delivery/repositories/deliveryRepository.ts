import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IDelivery } from '../interfaces/delivery.interface';
import { IDeliveryRepository } from '../interfaces/deliveryRepository.interface';
import { Delivery } from '../models/delivery.entity';

export class DeliveryRepository implements IDeliveryRepository {
  constructor(
    @InjectRepository(Delivery)
    private deliveryRepository: Repository<Delivery>,
  ) {}

  findAll(): Promise<IDelivery[]> {
    return this.deliveryRepository.find();
  }

  create(delivery: IDelivery): Promise<IDelivery> {
    return this.deliveryRepository.save(delivery);
  }
}
