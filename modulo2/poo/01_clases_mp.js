class Empleado {
    constructor(nombre, cargo) {
        this.nombre = nombre;
        this.cargo = cargo;
    }
    ingresar() {
        console.log(`${this.nombre} (${this.cargo}) ha ingresado al sistema`);
    }
    trabajar() {
        console.log(`${this.nombre} (${this.cargo}) está realizando sus tareas`);
    }
    salir() {
        console.log(`${this.nombre} (${this.cargo}) ha finalizado su jornada`);
    }
}

const empleado1 = new Empleado('Alexander', 'Analista de RRHH');
empleado1.ingresar();
empleado1.trabajar();
empleado1.salir();
console.log(empleado1.nombre);
console.log(empleado1.cargo);