document.addEventListener("DOMContentLoaded", () => {


    const dias = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const btnIniciar = document.getElementById("btnIniciar");
    let contador = 0;
    const total = document.getElementById("resultado");
    const btnLimpiar = document.getElementById("btnLimpiar");
    const resultado = document.getElementById("titulo");
    resultado.style.display = "none";
    total.style.display = "none";

    for (i in dias) { alert.(dias[i]); }

    btnIniciar.addEventListener("click", () => {
        checkboxes.forEach(checkbox => {
            if (getComputedStyle(checkbox).display === "none") {
                checkbox.style.display = "block";
                btnIniciar.style.backgroundColor = "red";
                btnIniciar.textContent = "cerrar";
                total.style.display = "block";
                resultado.style.display = "block";
            } else {
                checkbox.style.display = "none";
                btnIniciar.style.backgroundColor = "green";
                btnIniciar.textContent = "abrir";
                resultado.style.display = "none";
                total.style.display = "none";
            }
        });
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
        contador = "";
        total.value = contador;
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
    })
});