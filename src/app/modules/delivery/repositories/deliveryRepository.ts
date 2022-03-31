import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';
import { IDelivery } from '../interfaces/delivery.interface';
import { IDeliveryRepository } from '../interfaces/deliveryRepository.interface';
import { Delivery } from '../models/delivery.entity';

export class DeliveryRepository implements IDeliveryRepository {
  constructor(
    @InjectRepository(Delivery)
    private deliveryRepository: Repository<Delivery>,
  ) {}

  findAll(): Promise<IDelivery[]> {
    const data = getRepository(Delivery)
      .createQueryBuilder('delivery')
      .innerJoinAndSelect('delivery.startingPoint', 'startingPoint')
      .innerJoinAndSelect('delivery.deliveryPoint', 'deliveryPoint')
      .getMany();
    return data;
  }

  create(delivery: IDelivery): Promise<IDelivery> {
    const dateTimestamps = new Date(delivery.date);
    return this.deliveryRepository.save({ ...delivery, date: dateTimestamps });
  }

  findById(id: string): Promise<IDelivery> {
    const data = getRepository(Delivery)
      .createQueryBuilder('delivery')
      .innerJoinAndSelect('delivery.startingPoint', 'startingPoint')
      .innerJoinAndSelect('delivery.deliveryPoint', 'deliveryPoint')
      .where('delivery.id = :id', { id })
      .getOne();
    return data;
  }
}
