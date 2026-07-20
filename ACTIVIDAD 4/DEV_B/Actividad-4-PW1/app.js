document.getElementById('registroForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const edad = parseInt(document.getElementById('edad').value, 10);
    const pais = document.getElementById('pais').value;
    const terminos = document.getElementById('terminos').checked;
    const mensajeError = document.getElementById('mensajeError');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nombre.length < 5) {
        mensajeError.textContent = "El nombre debe tener al menos 5 caracteres.";
        return;
    }
    if (!emailRegex.test(email)) {
        mensajeError.textContent = "Por favor, ingrese un email válido.";
        return;
    }
    if (isNaN(edad) || edad < 18 || edad > 60) {
        mensajeError.textContent = "La edad debe estar entre 18 y 60 años.";
        return;
    }
    if (pais === "") {
        mensajeError.textContent = "Debe seleccionar un país.";
        return;
    }
    if (!terminos) {
        mensajeError.textContent = "Debe aceptar los términos y condiciones.";
        return;
    }
    mensajeError.textContent = "";
    const parametros = new URLSearchParams({
        nombre: nombre,
        email: email,
        edad: edad,
        pais: pais,
        terminos: terminos
    });

    window.location.href = `paginaB.html?${parametros.toString()}`;
});