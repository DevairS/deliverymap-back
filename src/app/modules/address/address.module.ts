import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressDITokens } from './addressDITokens';
import { AddressController } from './address.controller';
import { Address } from './models/address.entity';
import { AddressRepository } from './repositories/addressRepository';
import { FindAddresses } from './useCases/findAddress.usecases';
import { CreateAddress } from './useCases/createAddress.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([Address])],
  providers: [
    {
      useClass: AddressRepository,
      provide: AddressDITokens.AddressRepository,
    },
    FindAddresses,
    CreateAddress,
  ],
  controllers: [AddressController],
  exports: [
    {
      useClass: AddressRepository,
      provide: AddressDITokens.AddressRepository,
    },
    FindAddresses,
    CreateAddress,
  ],
})
export class AddressModule {}
