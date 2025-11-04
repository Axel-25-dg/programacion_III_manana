for (let i = 1; i <= 5; i++) {
    console.log("Evaluando candidato número:", i);
}

let horasTotales = 0;
for (let i = 1; i <= 10; i++) {
    horasTotales += 8;
}
console.log("Total de horas trabajadas:", horasTotales);

let salarioBase = 1000;
console.log("Tabla de incrementos salariales sobre base de", salarioBase);
for (let i = 1; i <= 10; i++) {
    console.log("Nivel", i, ":", salarioBase * i);
}

let nombreEmpleado = "Alexander";
for (let i = 0; i < nombreEmpleado.length; i++) {
    console.log("Letra en posición", i, "es", nombreEmpleado[i]);
}

let otroNombre = "Francisco";
for (let i = 0; i < otroNombre.length; i++) {
    console.log("Letra:", otroNombre[i]);
}

for (let i = 1; i <= 10; i++) {
    console.log("Bonificación por año", i, ":", i ** 2, "USD");
}

console.log("Revisión de solicitudes pendientes");
let i = 1;
while (i <= 6) {
    console.log("Solicitud número", i);
    i++;
}

let evaluaciones = [-1, 3, 1, 2, 3];
let indice = 1;
while (indice < evaluaciones.length) {
    console.log("Evaluación", indice, ":", evaluaciones[indice]);
    indice++;
}

let j = 1;
while (j <= 10) {
    if (j % 2 == 0) {
        console.log("Empleado con", j, "proyectos (par)");
    }
    j++;
}

let x = 5;
do {
    console.log("Días restantes para capacitación:", x);
    x--;
} while (x != 0);

let productividad = 5;
let z = 1;
while (z <= 10) {
    console.log("Día", z, ":", productividad * z, "unidades");
    z++;
}

let mult = 1;
while (mult <= 10) {
    console.log("Meta día", mult, ":", mult * 5, "tareas");
    mult++;
}

let puntajes = [2, 10, 6, 7, 5];
let indice2 = 0;
let mejorPuntaje = 0;
while (indice2 < puntajes.length) {
    if (puntajes[indice2] > mejorPuntaje) {
        mejorPuntaje = puntajes[indice2];
    }
    indice2++;
}
console.log("El mejor puntaje de desempeño es:", mejorPuntaje);