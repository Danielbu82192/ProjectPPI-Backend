import { Module } from '@nestjs/common';
import { SemanasService } from './semanas.service';
import { SemanasController } from './semanas.controller';

@Module({
  controllers: [SemanasController],
  providers: [SemanasService],
})
export class SemanasModule {}
