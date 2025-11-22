// funciones basicas
function saludar(nombre) {
    return "Hola ".concat(nombre);
}
console.log(saludar('Alexander'));
//funciones flecha
var sumar = function (a, b) {
    return a + b;
};
console.log(sumar(5, 10));
function saludarDeNuevo() {
    console.log('hola');
    console.log('BIENVENIDO WEY A TYPESCRIPT');
}
saludarDeNuevo();
function calcularAreaCirculo(radio) {
    return (Math.PI * radio * radio);
}
function calcularAreaCirculoVoid(radio) {
    console.log(Math.PI * radio * radio);
}
console.log(calcularAreaCirculo(5));
calcularAreaCirculoVoid(7);
