let puntajesEvaluacion = [10, 5, 26, 9];
let listaVacía = new Array();
let listaVacía2 = [];

console.log(listaVacía);
console.log(listaVacía2);
console.log(puntajesEvaluacion[0]);
console.log(puntajesEvaluacion[3]);

puntajesEvaluacion[0] = 100;
console.log(puntajesEvaluacion);

puntajesEvaluacion.push(500);
console.log(puntajesEvaluacion);

puntajesEvaluacion.unshift(888);
console.log(puntajesEvaluacion);

puntajesEvaluacion.pop();
console.log(puntajesEvaluacion);

puntajesEvaluacion.shift();
console.log(puntajesEvaluacion);

let indice = 0;
while (indice < puntajesEvaluacion.length) {
    console.log("Puntaje", indice, ":", puntajesEvaluacion[indice]);
    indice++;
}

for (let i = 0; i < puntajesEvaluacion.length; i++) {
    console.log(puntajesEvaluacion[i]);
}

for (let valor of puntajesEvaluacion) {
    console.log(valor);
}

puntajesEvaluacion.forEach(function (valor, indice) {
    console.log(indice, valor);
});