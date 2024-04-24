import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEquipoPpiDto } from './dto/create-equipo_ppi.dto';
import { UpdateEquipoPpiDto } from './dto/update-equipo_ppi.dto';
import { EquipoPpi } from './entities/equipo_ppi.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EquipoPpiService {

  constructor(
    @InjectRepository(EquipoPpi) private readonly repository: Repository<EquipoPpi>) {
  }

  create(createEquipoPpiDto: CreateEquipoPpiDto) {
    return 'This action adds a new equipoPpi';
  }

  async findAll() {
    return this.repository.find();
  }

  async findOne(id: number) {
    return await this.repository.find({ where: { id } });
  }

  async update(id: number, updateEquipoPpiDto: UpdateEquipoPpiDto) {
    const existe = await this.repository.find({ where: { id } });
    if (!existe) {
      throw new NotFoundException('No encontrado');
    }
    return this.repository.update(id, updateEquipoPpiDto);
  }

  remove(id: number) {
    return `This action removes a #${id} equipoPpi`;
  }
}
