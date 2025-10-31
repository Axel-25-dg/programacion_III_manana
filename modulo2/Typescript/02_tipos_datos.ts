let edad: number = 30;
let nombre: string = "Juan";
let activo: boolean = true;
let valor: any = 6;
if (edad > 18 && activo){
    console.log('trabajo activo');
}else{
    console.log("no trabaja")
}

let frutas: string[] = ["manzana", "pera", "banana"];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

enum Estado {
    pendiente,
    enviado,
    entregado
}

console.log(Estado);
console.log(Estado.entregado);