import { Andress } from '@app/modules/andress/models/andress.entity';

export interface IDelivery {
  id: number;
  name: string;
  date: string;
  startingPoint: Andress;
  deliveryPoint: Andress;
}
