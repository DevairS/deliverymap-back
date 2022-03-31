import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateAddress } from '../address/useCases/createAddress.usecase';
import { CreateDelivery } from './useCases/CreateDelivery.usecases';
import { FindDeliveries } from './useCases/FindDeliveries.usecases';

@Controller('delivery')
export class DeliveryController {
  constructor(
    private readonly findDeliverys: FindDeliveries,
    private readonly createDelivery: CreateDelivery,
    private readonly createAddress: CreateAddress,
  ) {}
  @Get()
  getAll() {
    debugger;
    return this.findDeliverys.execute();
  }

  @Post()
  async create(@Body() delivery) {
    const startingPoint = await this.createAddress.execute(
      delivery.startingPoint,
    );
    const deliveryPoint = await this.createAddress.execute(
      delivery.deliveryPoint,
    );
    return this.createDelivery.execute({
      ...delivery,
      startingPoint: startingPoint.id,
      deliveryPoint: deliveryPoint.id,
    });
  }
}
