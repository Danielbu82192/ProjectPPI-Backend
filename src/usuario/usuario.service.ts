import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario) private readonly repository: Repository<Usuario>,
    private configService: ConfigService) {
  }

  create(createUsuarioDto: CreateUsuarioDto) {
    return 'This action adds a new usuario';
  }

  async findAsesor() {
    return this.repository.createQueryBuilder('usuario')
      .leftJoinAndSelect('usuario.rol', 'rol')
      .leftJoinAndSelect('usuario.hora', 'HoraSemanal')
      .where('rol.id = :rolId', { rolId: 3 })
      .getMany();
  }

  async finExisteSesion() {
    return this.configService.get<string>('CUENTA_GOOGLE');
  }

  async findAll() {
    return this.repository.find();
  }

  async Login(Correo: string, Contrasena: string) {
    return this.repository.createQueryBuilder('usuario')
      .leftJoinAndSelect('usuario.hora', 'HoraSemanal')
      .leftJoinAndSelect('usuario.rol', 'rol')
      .where('usuario.correo = :correo', { correo: Correo })
      .andWhere('usuario.clave = :clave', { clave: Contrasena })
      .getOne()
  }
  async findOne(id: number) {
    return this.repository.createQueryBuilder('usuario')
      .leftJoinAndSelect('usuario.hora', 'HoraSemanal')
      .where('usuario.id = :id', { id: id })
      .getOne();
  }

  async findCorreo(correo: string) {
    return this.repository.createQueryBuilder('usuario')
      .leftJoinAndSelect('usuario.rol', 'Rol')
      .leftJoinAndSelect('usuario.hora', 'HoraSemanal')
      .leftJoinAndSelect('usuario.usuario', 'EquipoUsuario')  
      .where('usuario.correo = :correo', { correo: correo })
      .getOne();
  }
  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `kk`;
  }

  async updateSesion(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    const existe = await this.repository
      .createQueryBuilder('usuario')
      .where('usuario.correo = :id', { id: id })
      .getOne();
    if (!existe) {
      throw new NotFoundException('No encontrado');
    }
    return this.repository.update(existe.id, updateUsuarioDto);
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
