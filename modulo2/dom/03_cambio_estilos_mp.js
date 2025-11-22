const mensaje = document.getElementById("mensaje");
mensaje.textContent = "Acceso autorizado al sistema de Recursos Humanos";
mensaje.style.color = "blue";

const link = document.getElementById("link");
link.setAttribute("href", "https://rrhh.empresa.com");
link.classList.add("boton");