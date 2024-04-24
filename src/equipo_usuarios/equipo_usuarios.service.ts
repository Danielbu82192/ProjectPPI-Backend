import { Injectable } from '@nestjs/common';
import { CreateEquipoUsuarioDto } from './dto/create-equipo_usuario.dto';
import { UpdateEquipoUsuarioDto } from './dto/update-equipo_usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EquipoUsuario } from './entities/equipo_usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EquipoUsuariosService {

  constructor(
    @InjectRepository(EquipoUsuario) private readonly repository: Repository<EquipoUsuario>) {
  }

  create(createEquipoUsuarioDto: CreateEquipoUsuarioDto) {
    return 'This action adds a new equipoUsuario';
  }

  findAll() {
    return `This action returns all equipoUsuarios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} equipoUsuario`;
  }

  async findEstudiante() {
    const resultados = await this.repository
      .createQueryBuilder('equipoUsuario')
      .leftJoinAndSelect('equipoUsuario.usuario', 'usuario') 
      .getMany();
 
    const resultadosAgrupados = {};
    resultados.forEach((resultado) => {
      const key = resultado.codigoEquipo; 
      if (!resultadosAgrupados[key]) {
        resultadosAgrupados[key] = [];
      }
      resultadosAgrupados[key].push(resultado.usuario);
    }); 
    return resultadosAgrupados;
  }
  update(id: number, updateEquipoUsuarioDto: UpdateEquipoUsuarioDto) {
    return `This action updates a #${id} equipoUsuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} equipoUsuario`;
  }
}
