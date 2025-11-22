import { Personal } from "./11_herencias_mp";

export class Obrero extends Personal {
    getTipoTrabajo(): void {
        console.log('Trabajo pesado');
    }
}

const miObrero =
    new Obrero('Carlos Gómez', 'Operario');
console.log(miObrero.nombre);
console.log(miObrero.cargo);
miObrero.trabajar();
miObrero.getTipoTrabajo();