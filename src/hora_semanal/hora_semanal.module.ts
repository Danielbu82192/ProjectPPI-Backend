import { Module } from '@nestjs/common';
import { HoraSemanalService } from './hora_semanal.service';
import { HoraSemanalController } from './hora_semanal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HoraSemanal } from './entities/hora_semanal.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([HoraSemanal]), 
  ],
  controllers: [HoraSemanalController],
  providers: [HoraSemanalService],
})
export class HoraSemanalModule {}
