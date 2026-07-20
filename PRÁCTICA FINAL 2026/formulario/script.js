document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formulario");

    form.addEventListener("submit", function (enviar) {

        enviar.preventDefault();

        const usuario = document.getElementById("user").value;
        const password = document.getElementById("pass").value;
        const confirmPassword = document.getElementById("confirmPass").value;
        const registro = document.getElementById("registrar");
        const mensajeDeError = document.getElementById("mensajeDeError");


        // Validaciones
        if (usuario.length < 8 || usuario.length > 10) {
            //alert("El usuario debe tener entre 8 y 10 caracteres");
            mensajeDeError.textContent = "El usuario debe tener entre 8 y 10 caracteres";
            mensajeDeError.hidden = false;
            return;
        }
        const usuarioRegex = /^[A-Za-z]{8,10}$/;
        if (!usuarioRegex.test(usuario)) {
            //alert("El usuario debe contener solo letras");
            mensajeDeError.textContent = "El usuario debe contener solo letras";
            mensajeDeError.hidden = false;
            //alert("El usuario debe contener solo letras");
            return;
        }
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{10,}$/;
        if (!passwordRegex.test(password)) {
            //alert("La contraseña debe tener al menos 10 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial");
            mensajeDeError.textContent = "La contraseña debe tener al menos 10 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial";
            mensajeDeError.hidden = false;
            return;
        }
        if (password !== confirmPassword) {
            //alert("Las contraseñas no coinciden");
            mensajeDeError.textContent = "Las contraseñas no coinciden";
            mensajeDeError.hidden = false;
            return;
        }
        registro.disabled = false;
        window.location.href = "index.html";


    });
});