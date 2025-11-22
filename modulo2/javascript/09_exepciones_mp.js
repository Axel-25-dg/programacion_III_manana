try {
    console.log(nombreEmpleadoNoRegistrado);
} catch (error) {
    console.log("Error en sistema de RRHH: " + error.message);
}

try {
    console.log("Intentando acceder al expediente del empleado...");
    throw new Error("Expediente no encontrado");
} catch (error) {
    console.log("Mensaje de error: " + error.message);
} finally {
    console.log("Proceso de revisión finalizado");
}