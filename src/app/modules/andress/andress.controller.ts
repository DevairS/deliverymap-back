import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateAndress } from './useCases/createAndress.usecase';
import { FindAndresses } from './useCases/findAndress.usecases';

@Controller('andress')
export class AndressController {
  constructor(
    private readonly findAndresses: FindAndresses,
    private readonly createAndress: CreateAndress,
  ) {}
  @Get()
  getAll() {
    return this.findAndresses.execute();
  }
  @Post()
  create(@Body() andress) {
    return this.createAndress.execute(andress);
  }
}
