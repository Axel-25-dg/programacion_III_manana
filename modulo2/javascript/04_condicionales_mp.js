let temperaturaAmbiente = 35;

if (temperaturaAmbiente > 30) {
    console.log("Ambiente laboral caluroso, considerar ventilación o teletrabajo");
}

let password = "admin123";
if (password === "rrhh2025") {
    console.log("Acceso autorizado al sistema de Recursos Humanos");
} else {
    console.log("Acceso denegado al sistema");
}

let evaluacion = 7;
if (evaluacion >= 9) {
    console.log("Desempeño sobresaliente");
} else if (evaluacion >= 6) {
    console.log("Desempeño aceptable");
} else {
    console.log("Desempeño insuficiente");
}

let edad = 20;
let tieneDocumentacion = true;
if (edad >= 18) {
    if (tieneDocumentacion) {
        console.log("Candidato apto para contratación");
    } else {
        console.log("Falta documentación requerida");
    }
} else {
    console.log("Candidato menor de edad");
}

edad = 20;
tieneDocumentacion = true;
if (edad >= 18 && tieneDocumentacion) {
    console.log("Candidato cumple requisitos de contratación");
} else {
    console.log("No cumple requisitos de edad o documentación");
}

let dia = "lunes";
switch (dia) {
    case "lunes":
        console.log("Planificación semanal de Recursos Humanos");
        break;
    case "viernes":
        console.log("Revisión de cumplimiento y cierre de semana");
        break;
    default:
        console.log("Gestión operativa del día");
}

let candidatoA = 10;
let candidatoB = 20;
let candidatoC = 15;

if (candidatoA > candidatoB && candidatoA > candidatoC) {
    console.log("Candidato A tiene el mejor puntaje");
} else if (candidatoB > candidatoA && candidatoB > candidatoC) {
    console.log("Candidato B tiene el mejor puntaje");
} else {
    console.log("Candidato C tiene el mejor puntaje");
}

switch (true) {
    case (candidatoA > candidatoB && candidatoA > candidatoC):
        console.log("Candidato A tiene el mejor puntaje");
        break;
    case (candidatoB > candidatoA && candidatoB > candidatoC):
        console.log("Candidato B tiene el mejor puntaje");
        break;
    default:
        console.log("Candidato C tiene el mejor puntaje");
}
