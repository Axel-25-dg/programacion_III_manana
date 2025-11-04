const empleados = [
    { nombre: "Alexander", cargo: "Analista de RRHH", salario: 1200, departamento: "Talento Humano", ubicacion: "Oficina A" },
    { nombre: "María", cargo: "Coordinadora de Nómina", salario: 1500, departamento: "Finanzas", ubicacion: "Oficina B" },
    { nombre: "Luis", cargo: "Especialista en Capacitación", salario: 1350, departamento: "Desarrollo", ubicacion: "Oficina C" },
    { nombre: "Carla", cargo: "Reclutadora", salario: 1100, departamento: "Selección", ubicacion: "Oficina D" },
    { nombre: "Jorge", cargo: "Consultor Laboral", salario: 1600, departamento: "Legal", ubicacion: "Oficina E" },
    { nombre: "Ana", cargo: "Asistente de RRHH", salario: 950, departamento: "Administración", ubicacion: "Oficina F" },
    { nombre: "Pedro", cargo: "Encargado de Bienestar", salario: 1250, departamento: "Clima Organizacional", ubicacion: "Oficina G" },
    { nombre: "Lucía", cargo: "Analista de Desempeño", salario: 1400, departamento: "Evaluación", ubicacion: "Oficina H" },
    { nombre: "Esteban", cargo: "Gestor de Contratos", salario: 1300, departamento: "Legal", ubicacion: "Oficina I" },
    { nombre: "Sofía", cargo: "Responsable de Inclusión", salario: 1450, departamento: "Diversidad", ubicacion: "Oficina J" }
];

const tabla = document.getElementById('cuerpoTabla');
empleados.forEach(e => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
    <td>${e.nombre}</td>
    <td>${e.cargo}</td>
    <td>${e.departamento}</td>
    <td>$${e.salario.toFixed(2)}</td>
    <td>${e.ubicacion}</td>
  `;
    tabla.appendChild(fila);
});