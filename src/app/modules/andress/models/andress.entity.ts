import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Andress {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  latitude: string;

  @Column()
  longitude: string;
}
