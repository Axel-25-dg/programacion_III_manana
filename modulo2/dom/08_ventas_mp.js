const formulario = document.getElementById('formulario');
const contenedor = document.getElementById('contenedorEmpleados');
let empleados = [];

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const cargo = document.getElementById('cargo').value.trim();
  const salario = parseFloat(document.getElementById('salario').value.trim());

  if (nombre && cargo && !isNaN(salario)) {
    const nuevoEmpleado = { id: Date.now(), nombre, cargo, salario };
    empleados.push(nuevoEmpleado);
    renderizarEmpleado(nuevoEmpleado);
    formulario.reset();
  }
});

function renderizarEmpleado({ id, nombre, cargo, salario }) {
  const div = document.createElement('div');
  div.className = 'empleado';
  div.setAttribute('data-id', id);
  div.innerHTML = `
    <h3>${nombre}</h3>
    <p>${cargo}</p>
    <p><strong>Salario: $${salario.toFixed(2)}</strong></p>
    <div class="acciones"><button class="eliminar">Eliminar</button></div>
  `;
  contenedor.appendChild(div);
}

contenedor.addEventListener('click', (e) => {
  if (e.target.classList.contains('eliminar')) {
    const tarjeta = e.target.closest('.empleado');
    const id = parseInt(tarjeta.getAttribute('data-id'));
    empleados = empleados.filter(e => e.id !== id);
    tarjeta.remove();
  }
});