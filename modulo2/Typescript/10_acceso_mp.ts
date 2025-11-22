import { Empleado } from "./09_acceso_mp";

const myEmpleado: Empleado = new Empleado('Alexander Pérez');
console.log(myEmpleado.nombre);
console.log(myEmpleado.getFechaIngreso());
console.log(myEmpleado.getAtributes());