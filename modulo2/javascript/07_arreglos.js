let numeros = [10, 5, 26, 9];
let arrayVacio = new Array();
let arrayVacio2 = [];

console.log(arrayVacio);
console.log(arrayVacio2);
console.log("acceso a losl elementos array");
console.log(numeros[0]);
console.log(numeros[3]);

console.log("modificar elementos del array");
numeros[0] = 100;
console.log(numeros);

console.log("arreglar elementoal inicio del array");
numeros.push(500);
console.log(numeros);
console.log("arreglar elementoal inicio del array");
numeros.unshift(888);
console.log(numeros);
console.log("eliminar el ultimo elemnto del array array");
numeros.pop();
console.log(numeros);
console.log("eliminar el primer elemento en el array");
numeros.shift();
console.log(numeros);

console.log("iteracion de array de array")
let indice = 0
console.log("interacion cpon while")
while (indice < numeros.length) {
    console.log("valor", indice, "es", numeros[indice]);
    indice++;
}
console.log("interacion con for")
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}
console.log("interacion for ...for");
for (let valor of numeros) {
    console.log(valor);
}
console.log("interacion con for each");
numeros.forEach(function (valor, indice){
    console.log(indice, valor);
});