document.addEventListener("DOMContentLoaded", () => {
    const universidad = document.querySelector('.color-universidad');
    const selectUni = document.getElementById("universidad");

    selectUni.addEventListener("change", () => {
        universidad.textContent = selectUni.value;
    });

    const selectColor = document.getElementById("color-fondo");
    const articleIzquierdo = document.querySelector(".article-izquierdo");

    selectColor.addEventListener("change", () => {
        // Cambia el fondo del primer article según el value elegido
        articleIzquierdo.style.backgroundColor = selectColor.value;
    });

    const radios = document.querySelectorAll('input[name="color"]');

    radios.forEach(radio => {
        radio.addEventListener("change", () => {
            switch (radio.value) {
                case "blanco":
                    universidad.style.color = "white"; //cambiar a blanco
                    break;
                case "gris":
                    universidad.style.color = "gray";
                    break;
                case "amarillo":
                    universidad.style.color = "yellow";
                    break;
                default:
                    universidad.style.color = "black";
            }
        });
    });
});