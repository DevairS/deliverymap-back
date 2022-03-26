import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientModule } from '@moduleClient/client.module';
import { ClientEntity } from '@moduleClient/models/client.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true,
      entities: [ClientEntity],
    }),
    ClientModule,
  ],
})
export class AppModule {}
