var edad = 30;
var nombre = "Juan";
var activo = true;
var valor = 6;
if (edad > 18 && activo) {
    console.log('trabajo activo');
}
else {
    console.log("no trabaja");
}
var frutas = ["manzana", "pera", "banana"];
for (var i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
var Estado;
(function (Estado) {
    Estado[Estado["pendiente"] = 0] = "pendiente";
    Estado[Estado["enviado"] = 1] = "enviado";
    Estado[Estado["entregado"] = 2] = "entregado";
})(Estado || (Estado = {}));
console.log(Estado);
console.log(Estado.entregado);
