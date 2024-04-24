import { Injectable } from '@nestjs/common';
import { CreateEstadoSeguimientoCambioDto } from './dto/create-estado_seguimiento_cambio.dto';
import { UpdateEstadoSeguimientoCambioDto } from './dto/update-estado_seguimiento_cambio.dto';
import { EstadoSeguimientoCambio } from './entities/estado_seguimiento_cambio.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EstadoSeguimientoCambioService {
  constructor(
    @InjectRepository(EstadoSeguimientoCambio) private readonly repository: Repository<EstadoSeguimientoCambio> 
  ) {
  }


  create(createEstadoSeguimientoCambioDto: CreateEstadoSeguimientoCambioDto) {
    return this.repository.save(createEstadoSeguimientoCambioDto);
  }

  findAll() {
    return `This action returns all estadoSeguimientoCambio`;
  }

  findOne(id: number) {
    return `This action returns a #${id} estadoSeguimientoCambio`;
  }

  update(id: number, updateEstadoSeguimientoCambioDto: UpdateEstadoSeguimientoCambioDto) {
    return `This action updates a #${id} estadoSeguimientoCambio`;
  }

  remove(id: number) {
    return `This action removes a #${id} estadoSeguimientoCambio`;
  }
}
