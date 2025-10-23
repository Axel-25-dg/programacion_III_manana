for (let i = 1; i <= 5; i++) {
    console.log("Iteración número:", i);
}

let suma = 0;
for (let i = 1; i <= 10; i++) {
    suma += i;
}
console.log("La sumatoria es:", suma);

let numero = 4;
console.log("Tabla de multiplicar del", numero);
for (let i = 1; i <= 10; i++) {
    console.log(numero, "x", i, "=", numero * i);
}

let Nombre = "Alexander";
for (let i = 0; i < Nombre.length; i++) {
    console.log("Letra en posición", i, "es", Nombre[i]);
}


let nombre = "francisco";
for (let i = 0; i < nombre.length; i++) {
    console.log(nombre[i]);
}

for (let i = 1; i <= 10; i++) {
    console.log("cuadrado de", i, "es", i ** 2);
}
console.log("bucle while");
let i = 1
while (i <= 6) {
    console.log("indice", i)
    i++;
}

let miArreglo = [-1, 3, 1, 2, 3];
let indice = 1
while (indice < miArreglo.length) {
    console.log("valor", indice, "es", miArreglo[indice])
    indice++;
}


let j = 1
while (j <= 10) {
    if (j % 2 == 0) {
        console.log("el numero", j, "es par")
    }
    j++;
}

let x = 5
do {
    console.log("x es", x);
    x--;
} while (x != 0);

let numeroo = 5;
let z = 1;
while (z <= 10) {
    console.log(numeroo, "x", z, "=", numeroo * z);
    z++;
}

let mult = 1;
while (mult <= 10) {
    console.log(mult, "*5=", mult * 5);
    mult++;
}

let numeros = [2, 10, 6, 7, 5];
let indice2 = 0;
let mayor = 0;
while (indice2 < numeros.length) {
    if (numeros[indice2] > mayor) {
        mayor = numeros[indice2];
    }
    indice2++;
}
console.log("El número mayor es:", mayor);  

