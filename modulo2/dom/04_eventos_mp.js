let parrafo = null;

document.getElementById('crear').addEventListener('click', () => {
    parrafo = document.createElement('p');
    parrafo.textContent = "Notificación generada desde el sistema de RRHH";
    document.getElementById('contenedor').appendChild(parrafo);
});

document.getElementById('eliminar').addEventListener('click', () => {
    if (parrafo) parrafo.remove();
});

function saludar() {
    alert("Acceso autorizado desde función");
}

document.getElementById('parrafo').addEventListener('dblclick', () => {
    alert("Asistencia confirmada");
});

document.getElementById('nombre').addEventListener('input', (e) => {
    console.log("Nombre ingresado:", e.target.value);
});