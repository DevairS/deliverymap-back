import { IAndress } from './andress.interface';

export interface IAndressRepository {
  findAll(): Promise<IAndress[]>;
  create(andress: IAndress): Promise<IAndress>;
}
