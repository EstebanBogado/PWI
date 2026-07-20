document.addEventListener("DOMContentLoaded", () => {

    const textoNuevo = document.querySelector("#titulo");
    const cambiarTexto = document.querySelector("#texto");

    cambiarTexto.addEventListener("change", () => {
        if (cambiarTexto.value === "") {
            textoNuevo.textContent = "Título";
        } else {
            textoNuevo.textContent = cambiarTexto.value;
        }
    });

    const colorFondo = document.querySelector("#articleIzquierdo");
    const cambiarColor = document.querySelector("#color");

    cambiarColor.addEventListener("change", () => {
        colorFondo.style.backgroundColor = cambiarColor.value;
    })

    const alinearTexto = document.querySelectorAll('input[name="alineacion"]');

    alinearTexto.forEach(radio => {
        radio.addEventListener("change", () => {
            switch (radio.value) {
                case "center":
                    textoNuevo.style.textAlign = "center";
                    break;
                case "left":
                    textoNuevo.style.textAlign = "left";
                    break;
                case "right":
                    textoNuevo.style.textAlign = "right";
                    break;
            };
        });
    });

    const contenedor = document.getElementById("contenedor");
    const nuevoParrafo = document.createElement("p");

    nuevoParrafo.textContent = "Hola, soy nuevo!";

    contenedor.appendChild(nuevoParrafo);


});