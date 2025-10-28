class persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    mayorEdad() {
        if (this.edad >= 18) {
            console.log(`${this.nombre} es mayor de edad`);
        } else {
            console.log(`${this.nombre} es menor de edad`);
        }
    }
    mostrar(){
        console.log(this.nombre, this.edad);
    }
}
const Pedro = new persona('Pedro', 20);
Pedro.mayorEdad();
Pedro.mostrar();












3