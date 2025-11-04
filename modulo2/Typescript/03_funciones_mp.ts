function saludarEmpleado(nombre?: string): string {
    return `Hola ${nombre}, bienvenido al sistema de RRHH`;
}
console.log(saludarEmpleado('Alexander'));

const calcularBonificacion = (base: number, porcentaje: number): number => {
    return base * (porcentaje / 100);
}
console.log(calcularBonificacion(1200, 15));

function mostrarMensajeBienvenida(): void {
    console.log('Acceso autorizado');
    console.log('Bienvenido al módulo de Recursos Humanos');
}
mostrarMensajeBienvenida();

function calcularVacaciones(dias: number): number {
    return dias * 8;
}
function calcularVacacionesVoid(dias: number): void {
    console.log(dias * 8);
}

console.log(calcularVacaciones(5));
calcularVacacionesVoid(7);