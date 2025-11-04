console.log("Funciones");
console.log("Forma clasica");
function registrarIngreso() {
    console.log("Empleado registrado en sistema de RRHH");
}
registrarIngreso();
registrarIngreso();

console.log("forma con pararametro remoto");
function calcularBonificacion(base, extra) {
    return base + extra;
}
let resultado = calcularBonificacion(1000, 250);
console.log("Bonificación total: ", resultado);

console.log("funciones flecha");
const calcularDescuento = (sueldo, rebaja) => {
    return sueldo - rebaja;
}
let resultadoResta = calcularDescuento(1200, 200);
console.log("Sueldo con descuento:", resultadoResta);

console.log("funciones retorno directo");
const antiguedad = años => años * años;
console.log("Antigüedad ponderada:", antiguedad(5));

console.log("funciones con parametros con defecto");
function saludarEmpleado(nombre, saludo = "Bienvenido ") {
    return saludo + nombre;
}
let saludo1 = saludarEmpleado("Alexander");
let saludo2 = saludarEmpleado("Alexandes", "Buenos días ");
console.log(saludo1);
console.log(saludo2);

console.log("funcion de si es par o impar");
function esTurnoPar(turno) {
    if (turno % 2 === 0) {
        console.log("Turno " + turno + " es par");
    } else {
        console.log("Turno " + turno + " es impar");
    }
}
esTurnoPar(2);
esTurnoPar(9);

console.log("funcion de un rectangulo area");
function calcularAreaOficina(base, altura) {
    let area = (base * altura) / 2;
    console.log("Área de oficina asignada:", area);
}
calcularAreaOficina(10, 20);