export class Empleado {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(): void {
        console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y pertenezco al equipo de RRHH`);
    }
}