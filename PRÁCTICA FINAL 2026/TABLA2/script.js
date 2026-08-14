document.addEventListener('DOMContentLoaded', function () {
    const datos = ["11", "29", "73", "34", ">", "<", "=", "!="];
    const tituloTabla = document.createElement(`tr`);
    const validacion = document.createElement(`p`);

    function crearTabla(m, n, datos) {
        const tabla = document.createElement(`table`);
        tabla.classList.add(`formatoTabla`);
        const tituloTabla = document.createElement("tr");
        const th = document.createElement("th");
        th.colSpan = n;
        const validacion = document.createElement("p");
        validacion.textContent = "Validación: ";
        th.appendChild(validacion);
        tituloTabla.appendChild(th);
        tabla.appendChild(tituloTabla);
        let index = 0;
        for (let i = 1; i <= m; i++) {
            const fila = document.createElement(`tr`);
            for (let j = 1; j <= n; j++) {
                const celda = document.createElement(`td`);
                const boton = document.createElement(`button`);
                boton.innerHTML = `${datos[index]}`;
                celda.appendChild(boton);
                celda.classList.add(`celda`);
                fila.appendChild(celda);
                boton.addEventListener("click", () => {
                    const valor = boton.textContent;
                    if (!isNaN(valor)) {
                        if (numeroA === null) {
                            numeroA = parseInt(valor);
                            localStorage.setItem("numeroA", numeroA);
                            validacion.textContent = `Validación número A: ${numeroA}`;
                        } else if (numeroB === null) {
                            numeroB = parseInt(valor);
                            localStorage.setItem("numeroB", numeroB);
                            validacion.textContent = `Validación número B: ${numeroB}`;
                        }
                    } else {
                        operador = valor;
                        localStorage.setItem("operador", operador);
                    }
                    if (numeroA !== null && numeroB !== null && operador !== null) {
                        switch (operador) {
                            case ">": resultado = numeroA > numeroB; break;
                            case "<": resultado = numeroA < numeroB; break;
                            case "=": resultado = numeroA === numeroB; break;
                            case "!=": resultado = numeroA !== numeroB; break;
                        }
                        localStorage.setItem("resultado", resultado);
                        validacion.textContent = `Resultado: ${resultado}`;
                        numeroA = null;
                        numeroB = null;
                        operador = null;
                    }
                    // 🔹 Actualizar en tiempo real
                    mostrarValores();
                });
                index++;
            }
            tabla.appendChild(fila);
        }
        return tabla;
    }
    let numeroA = null;
    let numeroB = null;
    let operador = null;
    let resultado = null;
    const contenedor = document.getElementById(`contenedor`);
    const tablaCreada = crearTabla(2, 4, datos);
    contenedor.appendChild(tablaCreada);
    const localStorageNumeroA = localStorage.getItem("numeroA");
    const localStorageNumeroB = localStorage.getItem("numeroB");
    const localStorageOperador = localStorage.getItem("operador");
    const valoresGuardados = {
        numeroA: localStorage.getItem("numeroA") ? parseInt(localStorage.getItem("numeroA")) : null,
        numeroB: localStorage.getItem("numeroB") ? parseInt(localStorage.getItem("numeroB")) : null,
        operador: localStorage.getItem("operador") || null
    };
    function mostrarValores() {
        const contenedorValores = document.getElementById("valores");
        if (!contenedorValores) return;
        // Limpio antes de volver a escribir
        contenedorValores.innerHTML = "";
        const numeroA = localStorage.getItem("numeroA");
        const numeroB = localStorage.getItem("numeroB");
        const operador = localStorage.getItem("operador");
        const resultado = localStorage.getItem("resultado");
        if (numeroA) contenedorValores.innerHTML += `<p>Número A: ${numeroA}</p>`;
        if (numeroB) contenedorValores.innerHTML += `<p>Número B: ${numeroB}</p>`;
        if (operador) contenedorValores.innerHTML += `<p>Operador: ${operador}</p>`;
        if (resultado) contenedorValores.innerHTML += `<p>Resultado: ${resultado}</p>`;
    }
    const encabezado = document.createElement(`header`);
    encabezado.innerHTML = `<h1> ENCABEZADO </H1>`;
    document.getElementById(`header`).appendChild(encabezado);
    const pieDePagina = document.createElement(`footer`);
    pieDePagina.innerHTML = `<h1> FOOTER </H1>`;
    document.getElementById(`footer`).appendChild(pieDePagina);
});