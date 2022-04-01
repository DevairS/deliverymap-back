import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveryModule } from '@moduleDelivery/delivery.module';
import { Delivery } from '@moduleDelivery/models/delivery.entity';
import { Address } from '@moduleAddress/models/address.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true,
      entities: [Delivery, Address],
      dropSchema: false,
      logging: true,
      ssl: process.env.NODE_ENV === 'production' ? true : false,
      extra:
        process.env.NODE_ENV === 'production'
          ? {
              ssl: {
                rejectUnauthorized: false,
              },
            }
          : {},
    }),
    DeliveryModule,
  ],
})
export class AppModule {}
