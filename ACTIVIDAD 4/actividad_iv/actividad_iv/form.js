// const { createElement } = require("react");

const form = document.getElementById("formulario");

form.addEventListener("submit", function (enviar) {
  enviar.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const edad = parseInt(document.getElementById("edad").value);
  const pais = document.getElementById("pais").value;
  const terminos = document.getElementById("terminos").checked;
  const mensajeError = document.getElementById(`mensajeError`);
  // Validaciones
  if (nombre.length < 5) {
    // alert("El nombre debe tener al menos 5 caracteres");
    mensajeError.textContent = "El nombre debe tener al menos 5 caracteres";
    return;
  }
  const emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    mensajeError.innerHTML = `email inválido`;
    // const mensajeError = document.getElementById("mensajeError");
    mensajeError.textContent = "Email inválido";
    // alert("Email inválido");
    return;
  }
  if (edad < 18 || edad > 60 || !edad) {
    // alert("La edad debe estar entre 18 y 60");
    mensajeError.textContent = "La edad debe estar entre 18 y 60";
    return;
  }
  if (!pais) {
    // alert("Debe seleccionar un país")
    mensajeError.textContent = "Debe seleccionar un país";
    return;
  }
  if (!terminos) {
    // alert("Debe aceptar los términos");
    mensajeError.textContent = "Debe aceptar los términos";
    return;
  }

  // Construcción de URL con parámetros
  const params = new URLSearchParams({
    nombre: nombre,
    email: email,
    edad: edad,
    pais: pais,
    terminos: terminos
  });

  window.location.href = "resultado.html?" + params.toString();
});
