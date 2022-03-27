import { Inject } from '@nestjs/common';
import { DeliveryDITokens } from '../deliveryDITokens';
import { IDelivery } from '../interfaces/delivery.interface';
import { IUseCaseCreateDelivery } from '../interfaces/useCases.interface';
import { DeliveryRepository } from '../repositories/deliveryRepository';

export class CreateDelivery implements IUseCaseCreateDelivery {
  constructor(
    @Inject(DeliveryDITokens.DeliveryRepository)
    private deliveryRepository: DeliveryRepository,
  ) {}

  async execute(delivery: IDelivery): Promise<IDelivery> {
    return await this.deliveryRepository.create(delivery);
  }
}
