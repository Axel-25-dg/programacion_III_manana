function saludarEmpleado(nombre) {
    return "Hola ".concat(nombre, ", bienvenido al sistema de RRHH");
}
console.log(saludarEmpleado('Alexander'));
var calcularBonificacion = function (base, porcentaje) {
    return base * (porcentaje / 100);
};
console.log(calcularBonificacion(1200, 15));
function mostrarMensajeBienvenida() {
    console.log('Acceso autorizado');
    console.log('Bienvenido al módulo de Recursos Humanos');
}
mostrarMensajeBienvenida();
function calcularVacaciones(dias) {
    return dias * 8;
}
function calcularVacacionesVoid(dias) {
    console.log(dias * 8);
}
console.log(calcularVacaciones(5));
calcularVacacionesVoid(7);
