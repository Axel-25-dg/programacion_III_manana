class Empleado {
    constructor(nombre) {
        this.nombre = nombre;
    }
    realizarTarea() {
        console.log("Ejecutando actividad asignada");
    }
}

class Coordinador extends Empleado { }

const empleado1 = new Coordinador("Alexander");
const empleado2 = new Empleado("María");

empleado1.realizarTarea();
empleado2.realizarTarea();