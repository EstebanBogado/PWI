document.getElementById('formulario').addEventListener('submit', function (evento) {

    evento.preventDefault();

    const inputNombre = document.getElementById("nombre").value.trim();
    const inputEmail = document.getElementById("email").value.trim();
    const inputEdad = document.getElementById("edad").value.trim();
    const inputPais = document.getElementById("pais").value.trim();
    const inputTerminos = document.getElementById("terminos").checked;

    let valido = true;

    if (inputNombre.lenght < 5 || inputNombre.value === "") {
        alert("El nombre debe tener al menos 5 caracteres");
        valido = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (inputEmail === "" || !emailRegex.test(inputEmail)) {
        alert("El correo no es valido");
        valido = false;
    }

    if (inputEdad < 18 || inputEdad > 60) {
        alert("La edad debe estar entre 18 y 60 años");
        valido = false;
    }

    if (inputPais === "") {
        alert("Por favor seleccione un pais");
        valido = false;
    }

    if (inputTerminos === false) {
        alert("Debe aceptar los terminos y condiciones");
        valido = false;
    }


    if (valido) {
        const datosUrl = {
            nombre: inputNombre,
            email: inputEmail,
            edad: inputEdad,
            pais: inputPais
        };

        const parametrosURL = new URLSearchParams(datosUrl).toString();

        window.location.href = "paginaB.html?" + parametrosURL;
    }

});