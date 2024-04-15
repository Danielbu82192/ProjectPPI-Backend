import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCitasAsesoriaPpiDto } from './dto/create-citas_asesoria_ppi.dto';
import { UpdateCitasAsesoriaPpiDto } from './dto/update-citas_asesoria_ppi.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CitasAsesoriaPpi } from './entities/citas_asesoria_ppi.entity';
import {  Repository } from 'typeorm';

@Injectable()
export class CitasAsesoriaPpiService {

  constructor(
    @InjectRepository(CitasAsesoriaPpi) private readonly repository: Repository<CitasAsesoriaPpi>) {
  }

  async create(createCitasAsesoriaPpiDto: CreateCitasAsesoriaPpiDto) { 
    return await this.repository.save(createCitasAsesoriaPpiDto);
  }

  async findAll() {
    const citas = await this.repository
      .createQueryBuilder('Citas_Asesoria_PPI')
      .leftJoinAndSelect('Citas_Asesoria_PPI.estadoCita', 'Estado_Cita')
      .getMany();
    return citas;
  }

  async findRangeAsesor(Fechainicio: string, FechaFin: string, Usuario: string) {
    const citas = await this.repository
      .createQueryBuilder('citas')
      .leftJoinAndSelect('citas.estadoCita', 'estadoCita')
      .leftJoinAndSelect('citas.tipoCita', 'tipoCita')
      .leftJoinAndSelect('citas.observacionCita', 'observacionCita')
      .leftJoinAndSelect('citas.equipocita', 'equipocita')
      .leftJoinAndSelect('citas.usuariocitaequipo', 'usuariocitaequipo')
      .leftJoinAndSelect('citas.citas', 'citasRelacionadas')
      .where('citas.fecha BETWEEN :start AND :end', { start: Fechainicio, end: FechaFin })
      .andWhere('usuariocitaequipo.id = :userId', { userId: Usuario })
      .orderBy('citas.hora', 'ASC')
      .getMany();
    return citas;
  }

  async findRangeEquipo(Fechainicio: string, FechaFin: string, Usuario: string) {
    const citas = await this.repository
      .createQueryBuilder('citas')
      .leftJoinAndSelect('citas.estadoCita', 'estadoCita')
      .leftJoinAndSelect('citas.tipoCita', 'tipoCita')
      .leftJoinAndSelect('citas.observacionCita', 'observacionCita')
      .leftJoinAndSelect('citas.equipocita', 'equipocita')
      .leftJoinAndSelect('citas.usuariocitaequipo', 'usuariocitaequipo')
      .leftJoinAndSelect('citas.citas', 'citasRelacionadas')
      .where('citas.fecha BETWEEN :start AND :end', { start: Fechainicio, end: FechaFin })
      .andWhere('equipocita.id = :userId', { userId: Usuario })
      .orderBy('citas.id', 'ASC')
      .getMany();
    return citas;
  }

  async findOne(id: number) {
    const cita = await this.repository
      .createQueryBuilder('citas')
      .where('citas.id = :id', { id })
      .leftJoinAndSelect('citas.estadoCita', 'estadoCita')
      .leftJoinAndSelect('citas.tipoCita', 'tipoCita')
      .leftJoinAndSelect('citas.observacionCita', 'observacionCita')
      .leftJoinAndSelect('citas.equipocita', 'equipocita')
      .leftJoinAndSelect('citas.usuariocitaequipo', 'usuariocitaequipo')
      .leftJoinAndSelect('citas.citas', 'citasRelacionadas')
      .getOne();
    return cita;

  }

  async update(id: number, updateCitasAsesoriaPpiDto: UpdateCitasAsesoriaPpiDto) {
    const existe = await this.repository.find({ where: { id } });
    if (!existe) {
      throw new NotFoundException('No encontrado');
    }
    return this.repository.update(id, updateCitasAsesoriaPpiDto);
  }

  remove(id: number) {
    return `This action removes a #${id} citasAsesoriaPpi`;
  }
}
