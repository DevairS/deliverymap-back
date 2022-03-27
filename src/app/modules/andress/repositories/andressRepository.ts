import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IAndress } from '../interfaces/andress.interface';
import { IAndressRepository } from '../interfaces/andressRepository.interface';
import { Andress } from '../models/andress.entity';

export class AndressRepository implements IAndressRepository {
  constructor(
    @InjectRepository(Andress)
    private andressRepository: Repository<Andress>,
  ) {}

  async findAll(): Promise<IAndress[]> {
    return this.andressRepository.find();
  }

  async create(andress: IAndress): Promise<IAndress> {
    return this.andressRepository.save(andress);
  }
}
