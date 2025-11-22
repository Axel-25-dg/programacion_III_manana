class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }
    trabajar() {
        console.log("Empleando Trabajando.....")
    }
    calcularVacaciones() {
        return this.salario * 0.15;
    }
    horasExtras(horas) {
        return ((this.salario / 30) / 8) * horas * 2;
    }
}
class Programador extends Empleado {
    calcularVacaciones() {
        return this.salario * 0.20;
    }
    horasExtras(horas) {
        return ((this.salario / 30) / 8) * horas * 2;
    }
}
class Diseñador extends Empleado {
    calcularVacaciones() {
        return this.salario * 0.10;
    }
}
const progPedro = new Programador("Pedro", 2000);
const diseJuan = new Diseñador("Juan", 1200);
progPedro.trabajar();
diseJuan.trabajar();
progPedro.calcularVacaciones();
diseJuan.calcularVacaciones();
progPedro.horasExtras(5);
diseJuan.horasExtras(4);
console.log(progPedro.calcularVacaciones());
console.log(diseJuan.calcularVacaciones());
console.log(progPedro.horasExtras(5));
console.log(diseJuan.horasExtras(4));