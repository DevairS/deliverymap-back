import { Andress } from '@app/modules/andress/models/andress.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Delivery {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  date: Date;

  @OneToOne(() => Andress)
  @JoinColumn()
  startingPoint: Andress;

  @OneToOne(() => Andress)
  @JoinColumn()
  deliveryPoint: Andress;
}
