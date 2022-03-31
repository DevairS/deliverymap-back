import { Inject } from '@nestjs/common';
import { DeliveryDITokens } from '../deliveryDITokens';
import { IDelivery } from '../interfaces/delivery.interface';
import { IUseCaseFindDeliveryById } from '../interfaces/useCases.interface';
import { DeliveryRepository } from '../repositories/deliveryRepository';

export class FindDeliveryById implements IUseCaseFindDeliveryById {
  constructor(
    @Inject(DeliveryDITokens.DeliveryRepository)
    private deliveryRepository: DeliveryRepository,
  ) {}

  async execute(id): Promise<IDelivery> {
    const Delivery = await this.deliveryRepository.findById(id);
    return Delivery;
  }
}
