import { Personal, Administrativo } from "./11_herencias_mp";

const miEmpleado = new Personal('Alexander Pérez', 'Analista');
console.log(miEmpleado.nombre);
console.log(miEmpleado.cargo);
miEmpleado.trabajar();

const miAdministrativo =
    new Administrativo('María López', 'Secretaria');
console.log(miAdministrativo.nombre);
console.log(miAdministrativo.cargo);
miAdministrativo.trabajar();