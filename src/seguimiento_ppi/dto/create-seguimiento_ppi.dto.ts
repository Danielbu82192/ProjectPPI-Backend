import { CitasAsesoriaPpi } from "src/citas_asesoria_ppi/entities/citas_asesoria_ppi.entity";

export class CreateSeguimientoPpiDto { 
    id: number;
    fecha: Date; 
    compromiso: string | null;
    observacion: string | null;
    semana: number | null;
    asistencia: JSON;
    citas: CitasAsesoriaPpi;
}
