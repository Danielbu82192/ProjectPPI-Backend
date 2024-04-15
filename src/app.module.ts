import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BannerModule } from './banner/banner.module';
import { EstadoSeguimientoModule } from './estado_seguimiento/estado_seguimiento.module';
import { EstadoSeguimientoCambioModule } from './estado_seguimiento_cambio/estado_seguimiento_cambio.module';
import { SeguimientoPpiModule } from './seguimiento_ppi/seguimiento_ppi.module';
import { ObservacionCitaModule } from './observacion_cita/observacion_cita.module';
import { TipoCitaModule } from './tipo_cita/tipo_cita.module';
import { EstadoCitaModule } from './estado_cita/estado_cita.module';
import { CitasAsesoriaPpiModule } from './citas_asesoria_ppi/citas_asesoria_ppi.module';
import { TipoEntregaModule } from './tipo_entrega/tipo_entrega.module';
import { ConfiguracionEntregaModule } from './configuracion_entrega/configuracion_entrega.module';
import { AsignaturaModule } from './asignatura/asignatura.module';
import { EntregaEquipoPpiModule } from './entrega_equipo_ppi/entrega_equipo_ppi.module';
import { EquipoUsuariosModule } from './equipo_usuarios/equipo_usuarios.module';
import { ProgramaModule } from './programa/programa.module';
import { RolModule } from './rol/rol.module';
import { HoraSemanalModule } from './hora_semanal/hora_semanal.module';
import { UsuarioModule } from './usuario/usuario.module';
import { EquipoPpiModule } from './equipo_ppi/equipo_ppi.module';
import { EquipoPpiPjicModule } from './equipo_ppi_pjic/equipo_ppi_pjic.module';
import { TimezoneModule } from './timezone.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(), // Importa el módulo de configuración para leer las variables de entorno
    TypeOrmModule.forRootAsync({ // Usa TypeOrmModule.forRootAsync para configurar TypeORM de forma asíncrona
      imports: [ConfigModule], // Importa ConfigModule para poder inyectar ConfigService
      useFactory: (configService: ConfigService) => ({ // Usa una función factory para configurar TypeORM
        type: 'postgres',
        host: configService.get<string>('PGHOST'), // Usa ConfigService para obtener el valor de la variable de entorno
        port: configService.get<number>('PGPORT'), // Usa ConfigService para obtener el valor de la variable de entorno
        username: configService.get<string>('POSTGRES_USER'), // Usa ConfigService para obtener el valor de la variable de entorno
        password: configService.get<string>('POSTGRES_PASSWORD'), // Usa ConfigService para obtener el valor de la variable de entorno
        database: configService.get<string>('POSTGRES_DB'), // Usa ConfigService para obtener el valor de la variable de entorno
        entities: ['dist/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
      inject: [ConfigService], // Inyecta ConfigService para usarlo dentro de la función factory
    }),
    TimezoneModule,
    BannerModule,
    EstadoSeguimientoModule,
    EstadoSeguimientoCambioModule,
    SeguimientoPpiModule,
    ObservacionCitaModule,
    TipoCitaModule,
    EstadoCitaModule,
    CitasAsesoriaPpiModule,
    TipoEntregaModule,
    ConfiguracionEntregaModule,
    AsignaturaModule,
    EntregaEquipoPpiModule,
    EquipoUsuariosModule,
    ProgramaModule,
    RolModule,
    HoraSemanalModule,
    UsuarioModule,
    EquipoPpiModule,
    EquipoPpiPjicModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
