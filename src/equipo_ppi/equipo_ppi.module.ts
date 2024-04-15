import { Module } from '@nestjs/common';
import { EquipoPpiService } from './equipo_ppi.service';
import { EquipoPpiController } from './equipo_ppi.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquipoPpi } from './entities/equipo_ppi.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([EquipoPpi]), 
  ],
  controllers: [EquipoPpiController],
  providers: [EquipoPpiService],
})
export class EquipoPpiModule {}
