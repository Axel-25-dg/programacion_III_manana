let empleado = {
    nombre: "Alexander",
    edad: 19,
    ciudad: "Quito"
};

console.log(empleado);
console.log(empleado.nombre);
console.log(empleado.edad);
console.log(empleado["ciudad"]);

empleado.nombre = "Alexito";
console.log(empleado);

empleado.departamento = "Recursos Humanos";
console.log(empleado);

delete empleado.departamento;
console.log(empleado);

for (let clave in empleado) {
    console.log(clave);
}

console.log(Object.keys(empleado));
console.log(Object.values(empleado));

let registroEmpleado = {
    nombre: "Alexander",
    apellido: "Guaman",
    contacto: {
        correo: "alex@gmail.com",
        telefono: "02345567",
        celular: "0999991571"
    },
    capacitaciones: [
        {
            nombre: "Gestión de Talento",
            certificacion: 9
        },
        {
            nombre: "Legislación Laboral",
            calificacion: 9
        }
    ]
};

console.log(registroEmpleado);