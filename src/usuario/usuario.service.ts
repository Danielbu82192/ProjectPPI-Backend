import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {

  constructor(
    @InjectRepository(Usuario) private readonly repository: Repository<Usuario>) {
  }

  create(createUsuarioDto: CreateUsuarioDto) {
    return 'This action adds a new usuario';
  }

  findAsesor() {
     return this.repository.createQueryBuilder('usuario')
    .leftJoinAndSelect('usuario.rol', 'rol')
    .where('rol.id = :rolId', { rolId: 1 })
    .getMany(); 
  }

  findAll() {
    return this.repository.find();
 }

  async Login(Correo: string, Contrasena: string) { 
    return this.repository.find({where:{correo:Correo,clave:Contrasena}})  
  }
  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
