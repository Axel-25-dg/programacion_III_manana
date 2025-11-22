interface Empleado {
    id: number;
    nombre: string;
    correo?: string;
}

const empleado1: Empleado = {
    id: 101,
    nombre: 'Alexander Ruiz'
};

const empleado2: Empleado = {
    id: 102,
    nombre: 'María Torres',
    correo: 'maria.torres@rrhh.com'
};

console.log(empleado1);
console.log(empleado1.id);
console.log(empleado1.nombre);
console.log(empleado1.correo);

console.log(empleado2);
console.log(empleado2.id);
console.log(empleado2.nombre);
console.log(empleado2.correo);