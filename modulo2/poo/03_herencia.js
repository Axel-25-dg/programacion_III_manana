class animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    hacerSonido() {
        console.log("realizar algun ruido");
    }
}

class Perro extends animal { }
const miPerro = new Perro("Firulais");
const miAnimal = new animal("rod");
miPerro.hacerSonido();
miAnimal.hacerSonido();