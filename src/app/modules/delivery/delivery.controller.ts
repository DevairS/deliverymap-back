import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateAddress } from '../address/useCases/createAddress.usecase';
import { CreateDelivery } from './useCases/CreateDelivery.usecases';
import { FindDeliveries } from './useCases/FindDeliveries.usecases';
import { FindDeliveryById } from './useCases/FindDeliveryById.usecases';

@Controller('delivery')
export class DeliveryController {
  constructor(
    private readonly findDeliverys: FindDeliveries,
    private readonly createDelivery: CreateDelivery,
    private readonly createAddress: CreateAddress,
    private readonly findDeliveryById: FindDeliveryById,
  ) {}
  @Get()
  getAll() {
    return this.findDeliverys.execute();
  }

  @Get('/:id')
  async getOne(@Param() params) {
    return this.findDeliveryById.execute(params.id);
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
