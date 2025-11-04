let edad: number = 30;
let nombre: string = "Alexander";
let activo: boolean = true;
let salario: any = 1200;

if (edad >= 18 && activo) {
    console.log("Empleado activo");
} else {
    console.log("No cumple condiciones laborales");
}

let departamentos: string[] = ["Talento Humano", "Finanzas", "Legal"];
for (let i = 0; i < departamentos.length; i++) {
    console.log(departamentos[i]);
}

enum EstadoContrato {
    pendiente,
    firmado,
    finalizado
}

console.log(EstadoContrato);
console.log(EstadoContrato.finalizado);