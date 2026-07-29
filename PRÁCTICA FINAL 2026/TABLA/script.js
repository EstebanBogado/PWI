document.addEventListener("DOMContentLoaded", function () {

    function crearTabla(m, n, dato) {
        const tabla = document.createElement(`table`);
        tabla.classList.add(`formatoTabla`);
        let index = 0;
        for (let i = 1; i <= m; i++) {
            const fila = document.createElement(`tr`);
            for (let j = 1; j <= n; j++) {
                const celda = document.createElement(`td`);
                celda.innerHTML = `<h3> ${i} ${j}</h1>`;
                celda.classList.add(`celda`);
                fila.appendChild(celda);
            }
            tabla.appendChild(fila);
        }
        return tabla;
    }
    const contenedor = document.getElementById(`contenedor`);
    const tablaCreada = crearTabla(4, 6, 0);
    contenedor.appendChild(tablaCreada);

    const encabezado = document.createElement(`header`);
    encabezado.innerHTML = `<h1> ENCABEZADO </H1>`;
    document.getElementById(`header`).appendChild(encabezado);

    const pieDePagina = document.createElement(`footer`);
    pieDePagina.innerHTML = `<h1> FOOTER </H1>`;
    document.getElementById(`footer`).appendChild(pieDePagina);


});