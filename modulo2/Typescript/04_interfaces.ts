interface usuario {
    id: number;
    nombre: string;
    correo?: string;
}

const usuario1: usuario = {
    id:12,
    nombre: 'Alias fito igueroa'
}
const usuario2: usuario = {
    id:13,
    nombre:'rodolfo sabio',
    correo: 'rodsabio1276@sabio.com'
}

console.log(usuario1);
console.log(usuario1.id);
console.log(usuario1.nombre);
console.log(usuario1.correo);
console.log(usuario2);
console.log(usuario2.id);
console.log(usuario2.nombre);
console.log(usuario2.correo);