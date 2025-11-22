console.log("Funciones");
console.log("Forma clasica");
function saludar() {
    console.log("hola desde una funcion clasica");
}
saludar();
saludar();


console.log("forma con pararametro remoto");
function sumar(a, b) {
    return a + b;
}
let resultado = sumar(4, 9);
console.log("la suma es: ", resultado);

console.log("funciones flecha");
const resta = (a, b) => {
    return a - b
}
let resultadoResta = resta(9, 5)
console.log("la resta es", resultadoResta)

console.log("funciones retorno directo");
const cuadrado = x => x * x;
console.log("cuadrado de 5:", cuadrado(5));


console.log("funciones con parametros con defecto");
function saludar(nombre, saludo = "hola: ") {
    return saludo + "" + nombre;
}
let saludo1 = saludar("Alexander")
let saludo2 = saludar("Alexandes", "buenos dias ")
console.log(saludo1)
console.log(saludo2)

console.log("funcion de si es par o impar")
function esPar(numero) {
    if (numero % 2 === 0) {
        console.log(numero + " es par");
    } else {
        console.log(numero + " no es par");
    }
}
esPar(2);
esPar(9);

console.log("funcion de un rectangulo area")
function AreaDeTriangulo (base , altura){
    let area =(base * altura ) /2;
    console.log("el area del triangulo es:", area);

}
AreaDeTriangulo (10,20);


