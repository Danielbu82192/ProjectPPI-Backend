import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CitasAsesoriaPpiService } from './citas_asesoria_ppi.service';
import { CreateCitasAsesoriaPpiDto } from './dto/create-citas_asesoria_ppi.dto';
import { UpdateCitasAsesoriaPpiDto } from './dto/update-citas_asesoria_ppi.dto';

@Controller('citas-asesoria-ppi')
export class CitasAsesoriaPpiController {
  constructor(private readonly citasAsesoriaPpiService: CitasAsesoriaPpiService) {}

  @Post()
  create(@Body() createCitasAsesoriaPpiDto: CreateCitasAsesoriaPpiDto) {
    return this.citasAsesoriaPpiService.create(createCitasAsesoriaPpiDto);
  }

  @Get()
  findAll() {
    return this.citasAsesoriaPpiService.findAll();
  }

  @Get(':Fechainicio/:FechaFin/:Usuario')
  findRangeAsesor(@Param('Fechainicio') Fechainicio: string, @Param('FechaFin') FechaFin: string, @Param('Usuario') Usuario: string) {
    return this.citasAsesoriaPpiService.findRangeAsesor(Fechainicio, FechaFin, Usuario);
  }

  @Get('/Equipo/:Fechainicio/:FechaFin/:Usuario')
  findRangeEquipo(@Param('Fechainicio') Fechainicio: string, @Param('FechaFin') FechaFin: string, @Param('Usuario') Usuario: string) {
    return this.citasAsesoriaPpiService.findRangeEquipo(Fechainicio, FechaFin, Usuario);
  }

  @Get('/Estado/:Fechainicio/:FechaFin/:Estado')
  findRangeEstado(@Param('Fechainicio') Fechainicio: string, @Param('FechaFin') FechaFin: string, @Param('Estado') Estado: string) {
    return this.citasAsesoriaPpiService.findRangeEstado(Fechainicio, FechaFin, Estado);
  }


  @Get('/BuscarFechaHoraUsuario/:Fecha/:Hora/:Usuario')
  findFechaHora(@Param('Fecha') Fecha: string, @Param('Hora') Hora: string, @Param('Usuario') Usuario: string) {
    return this.citasAsesoriaPpiService.findFechaHora(Fecha, Hora, Usuario);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.citasAsesoriaPpiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCitasAsesoriaPpiDto: UpdateCitasAsesoriaPpiDto) {
    return this.citasAsesoriaPpiService.update(+id, updateCitasAsesoriaPpiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.citasAsesoriaPpiService.remove(+id);
  }
}
