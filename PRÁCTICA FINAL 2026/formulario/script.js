document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formulario");
    // document.getElementById("user").value = "";
    // document.getElementById("pass").value = "";
    // document.getElementById("confirmPass").value = "";

    form.addEventListener("submit", function (enviar) {
        enviar.preventDefault();
        const usuario = document.getElementById("user").value;
        const password = document.getElementById("pass").value;
        const confirmPassword = document.getElementById("confirmPass").value;
        const registro = document.getElementById("registrar");
        const errorUser = document.getElementById("mensajeDeError");
        const errorPass = document.getElementById("errorPass");
        const errorConfirmPass = document.getElementById("errorConfirmPass");

        // Validaciones
        if (usuario.length < 8 || usuario.length > 10) {
            //alert("El usuario debe tener entre 8 y 10 caracteres");
            errorUser.textContent = "El usuario debe tener entre 8 y 10 caracteres";
            errorUser.hidden = false;
            return;
        }
        const usuarioRegex = /^[A-Za-z]{8,10}$/;
        if (!usuarioRegex.test(usuario)) {
            //alert("El usuario debe contener solo letras");
            errorPass.textContent = "El usuario debe contener solo letras";
            errorPass.hidden = false;
            //alert("El usuario debe contener solo letras");
            return;
        }
        errorUser.hidden = true;

        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{10,}$/;
        if (!passwordRegex.test(password)) {
            //alert("La contraseña debe tener al menos 10 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial");
            errorPass.textContent = "La contraseña debe tener al menos 10 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial";
            errorPass.hidden = false;
            return;
        }
        errorPass.hidden = true;
        if (password !== confirmPassword) {
            //alert("Las contraseñas no coinciden");
            errorConfirmPass.textContent = "Las contraseñas no coinciden";
            errorConfirmPass.hidden = false;
            return;
        }
        errorConfirmPass.hidden = true;
        registro.disabled = false;
        window.location.href = "index.html";


    });
});