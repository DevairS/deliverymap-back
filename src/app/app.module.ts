import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveryModule } from '@moduleDelivery/delivery.module';
import { Delivery } from '@moduleDelivery/models/delivery.entity';
import { Andress } from '@moduleAndress/models/andress.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true,
      entities: [Delivery, Andress],
      dropSchema: true,
    }),
    DeliveryModule,
  ],
})
export class AppModule {}
