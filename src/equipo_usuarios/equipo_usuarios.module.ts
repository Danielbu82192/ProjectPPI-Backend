import { Module } from '@nestjs/common';
import { EquipoUsuariosService } from './equipo_usuarios.service';
import { EquipoUsuariosController } from './equipo_usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquipoUsuario } from './entities/equipo_usuario.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([EquipoUsuario]), 
  ],
  controllers: [EquipoUsuariosController],
  providers: [EquipoUsuariosService],
})
export class EquipoUsuariosModule {}
