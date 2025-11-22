class Empleado {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    verificarEdadLaboral() {
        if (this.edad >= 18) {
            console.log(`${this.nombre} cumple con la edad laboral`);
        } else {
            console.log(`${this.nombre} no cumple con la edad laboral`);
        }
    }
    mostrarDatos() {
        console.log(this.nombre, this.edad);
    }
}

const empleado1 = new Empleado('Pedro', 20);
empleado1.verificarEdadLaboral();
empleado1.mostrarDatos();