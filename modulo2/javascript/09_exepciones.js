try {
    console.log(VariableNoDeclarada);
} catch (error) {
    console.log("Ha ocurrido un error: " + error.message);
}


try{
    console.log("intentando abrir archivo...");
    throw new Error("Archivo no encontrado")
}catch(error){
    console.log("mensaje de error: " + error.message);
}finally{
    console.log("operacion finalizada");
}