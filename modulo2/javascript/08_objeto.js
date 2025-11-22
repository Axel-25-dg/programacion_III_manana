console.log("OBJETOS");
let persona = {
    nombre: "Alexander",
    edad: 19,
    ciudad: "Quito"
};

console.log(persona);
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona["ciudad"]);

console.log("Modificación del objeto");
persona.nombre = "Alexito";
console.log(persona);

console.log("Incluir clave al objeto");
persona.direccion = "Av. Occidental";
console.log(persona);

console.log("Eliminar clave del objeto");
delete persona.direccion;
console.log(persona);

console.log("Recorrer un objeto");
for (let clave in persona) {
    console.log(clave);
}

console.log("Mostrar claves con Object.keys");
console.log(Object.keys(persona));

console.log("Mostrar valores con Object.values");
console.log(Object.values(persona));

console.log("objetos anidados");
let estudiante = {
    nombre: "Alexander",
    apellido: "Guaman",
    contacto: {
        correo: "alex@gmail.com",
        telefono: "02345567",
        celular: "0999991571"
    },
    materias: [
        {
            nombre: "programacion III",
            certificacion: 9
        },
        {
            nombre: "Base de datos III",
            calificacion: 9
        },
    ]
};
console.log("Estudiante:  ", estudiante)
