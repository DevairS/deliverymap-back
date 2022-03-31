import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveryDITokens } from './deliveryDITokens';
import { DeliveryController } from './delivery.controller';
import { Delivery } from './models/delivery.entity';
import { DeliveryRepository } from './repositories/deliveryRepository';
import { FindDeliveries } from './useCases/FindDeliveries.usecases';
import { CreateDelivery } from './useCases/CreateDelivery.usecases';
import { AddressModule } from '../address/address.module';
import { FindDeliveryById } from './useCases/FindDeliveryById.usecases';

@Module({
  imports: [TypeOrmModule.forFeature([Delivery]), AddressModule],
  providers: [
    {
      useClass: DeliveryRepository,
      provide: DeliveryDITokens.DeliveryRepository,
    },
    FindDeliveries,
    CreateDelivery,
    FindDeliveryById,
  ],
  controllers: [DeliveryController],
})
export class DeliveryModule {}
