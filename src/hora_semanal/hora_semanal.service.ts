import { Injectable } from '@nestjs/common';
import { CreateHoraSemanalDto } from './dto/create-hora_semanal.dto';
import { UpdateHoraSemanalDto } from './dto/update-hora_semanal.dto';
import { HoraSemanal } from './entities/hora_semanal.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class HoraSemanalService {

  constructor(
    @InjectRepository(HoraSemanal) private readonly repository: Repository<HoraSemanal>) {
  }

  create(createHoraSemanalDto: CreateHoraSemanalDto) {
    return 'This action adds a new horaSemanal';
  }

  findAll() {
    return `This action returns all horaSemanal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} horaSemanal`;
  }
  
  async findProfesor(id: number) {
     return this.repository
    .createQueryBuilder('horaSemanal')
    .innerJoinAndSelect('horaSemanal.hora', 'usuario')
    .where('usuario.id = :id', { id })
    .getMany();
  }

  update(id: number, updateHoraSemanalDto: UpdateHoraSemanalDto) {
    return `This action updates a #${id} horaSemanal`;
  }

  remove(id: number) {
    return `This action removes a #${id} horaSemanal`;
  }
}
