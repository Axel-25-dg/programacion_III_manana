var edad = 30;
var nombre = "Alexander";
var activo = true;
var salario = 1200;
if (edad >= 18 && activo) {
    console.log("Empleado activo");
}
else {
    console.log("No cumple condiciones laborales");
}
var departamentos = ["Talento Humano", "Finanzas", "Legal"];
for (var i = 0; i < departamentos.length; i++) {
    console.log(departamentos[i]);
}
var EstadoContrato;
(function (EstadoContrato) {
    EstadoContrato[EstadoContrato["pendiente"] = 0] = "pendiente";
    EstadoContrato[EstadoContrato["firmado"] = 1] = "firmado";
    EstadoContrato[EstadoContrato["finalizado"] = 2] = "finalizado";
})(EstadoContrato || (EstadoContrato = {}));
console.log(EstadoContrato);
console.log(EstadoContrato.finalizado);
