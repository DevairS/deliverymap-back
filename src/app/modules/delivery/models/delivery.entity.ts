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
  date: string;

  @OneToOne(() => Andress, (andress) => andress.id)
  @JoinColumn()
  startingPoint: Andress;

  @OneToOne(() => Andress, (andress) => andress.id)
  @JoinColumn()
  deliveryPoint: Andress;
}
