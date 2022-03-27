import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveryDITokens } from './deliveryDITokens';
import { DeliveryController } from './delivery.controller';
import { Delivery } from './models/delivery.entity';
import { DeliveryRepository } from './repositories/deliveryRepository';
import { FindDeliveries } from './useCases/FindDeliveries.usecases';
import { CreateDelivery } from './useCases/CreateDelivery.usecases';
import { AndressModule } from '../andress/andress.module';

@Module({
  imports: [TypeOrmModule.forFeature([Delivery]), AndressModule],
  providers: [
    {
      useClass: DeliveryRepository,
      provide: DeliveryDITokens.DeliveryRepository,
    },
    FindDeliveries,
    CreateDelivery,
  ],
  controllers: [DeliveryController],
})
export class DeliveryModule {}
