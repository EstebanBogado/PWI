document.addEventListener('DOMContentLoaded', function () {
    const contenedor = document.getElementById('contenedor');
    const validar = document.getElementById('validar');
    const resultado = document.getElementById('resultado');
    const tabla = document.getElementById('tabla');

    validar.addEventListener('click', function () {
        const filas = tabla.rows;
        let mensaje = '';
        let color = '';

        for (let i = 1; i < filas.length; i++) {
            const fila = filas[i];
            const celdas = fila.cells;
            const nombre = celdas[0].textContent.trim();
            const edad = parseInt(celdas[1].textContent.trim());
            const ciudad = celdas[2].textContent.trim();

            if (nombre === '' || isNaN(edad) || ciudad === '') {
                mensaje += `Fila ${i}: Datos incompletos o inválidos.\n`;
                color = 'rojo';
            } else {
                mensaje += `Fila ${i}: Datos válidos.\n`;
                color = 'verde';
            }
        }

        resultado.textContent = mensaje;
        resultado.className = color;
    });
});