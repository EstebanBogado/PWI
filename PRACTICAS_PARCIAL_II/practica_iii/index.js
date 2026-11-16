document.addEventListener("DOMContentLoaded", () => {


    // const dias = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
    const resultado = document.getElementById("resultado");
    const main = document.querySelector("main");
    for (let i = 0; i < 5; i++) {
        const checkbox = document.createElement("input");  // crea <input>
        checkbox.type = "checkbox";                         // lo convierte en checkbox
        checkbox.style.display = "none";                    // arranca oculto
        main.insertBefore(checkbox, resultado);             // lo pone antes del label
    }
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const btnIniciar = document.getElementById("btnIniciar");
    let contador = 0;
    const btnLimpiar = document.getElementById("btnLimpiar");
    const total = document.getElementById("titulo");
    resultado.style.display = "none";
    total.style.display = "none";

    // for (let i in dias) { alert(dias[i]); }
    btnIniciar.addEventListener("click", () => {
        for (let i = 0; i < 5; i++) {
            checkboxes.forEach(checkbox => {
                if (getComputedStyle(checkbox).display === "none") {

                    checkbox.style.display = "block";
                    btnIniciar.style.backgroundColor = "red";
                    btnIniciar.textContent = "cerrar";
                    total.style.display = "block";
                    total.style.width = "3rem";
                    total.style.color = "blue";
                    total.style.backgroundColor = "yellow";
                    total.style.fontSize = "1.5rem";
                    total.style.textAlign = "center";
                    total.style.fontWeight = "bold";
                    total.value = 0;
                    resultado.style.display = "block";
                } else {
                    checkbox.style.display = "none";
                    btnIniciar.style.backgroundColor = "green";
                    btnIniciar.textContent = "abrir";
                    resultado.style.display = "none";
                    total.style.display = "none";

                }
            });
        }
    });

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                contador++;
                total.value = contador;
            } else {
                if (contador > 0) {
                    contador--;
                }
                total.value = contador;
            }
        });
    });

    btnLimpiar.addEventListener("click", () => {
        contador = 0;
        total.value = contador;
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
    })
});