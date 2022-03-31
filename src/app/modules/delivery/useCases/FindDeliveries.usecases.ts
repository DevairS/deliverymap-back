import { Inject } from '@nestjs/common';
import { DeliveryDITokens } from '../deliveryDITokens';
import { IDelivery } from '../interfaces/delivery.interface';
import { IUseCaseFindDeliveries } from '../interfaces/useCases.interface';
import { DeliveryRepository } from '../repositories/deliveryRepository';

export class FindDeliveries implements IUseCaseFindDeliveries {
  constructor(
    @Inject(DeliveryDITokens.DeliveryRepository)
    private deliveryRepository: DeliveryRepository,
  ) {}

  async execute(): Promise<IDelivery[]> {
    const Deliverys = await this.deliveryRepository.findAll();
    return Deliverys;
  }
}
