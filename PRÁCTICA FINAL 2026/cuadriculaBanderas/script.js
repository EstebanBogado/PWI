document.addEventListener('DOMContentLoaded', function () {
    const paises = [
        { nombre: "Argentina", bandera: "https://flagcdn.com/ar.svg", info: "País en Sudamérica." },
        { nombre: "Brasil", bandera: "https://flagcdn.com/br.svg", info: "País en Sudamérica." },
        { nombre: "España", bandera: "https://flagcdn.com/es.svg", info: "País en Europa." },
        { nombre: "Japón", bandera: "https://flagcdn.com/jp.svg", info: "País en Asia." },
        { nombre: "Inglaterra", bandera: "https://flagcdn.com/gb.svg", info: "País en Europa." },
        { nombre: "India", bandera: "https://flagcdn.com/in.svg", info: "País en Asia." },
        { nombre: "Francia", bandera: "https://flagcdn.com/fr.svg", info: "País en Europa." },
        { nombre: "Italia", bandera: "https://flagcdn.com/it.svg", info: "País en Europa." },
        { nombre: "Alemania", bandera: "https://flagcdn.com/de.svg", info: "País en Europa." },
        { nombre: "Canadá", bandera: "https://flagcdn.com/ca.svg", info: "País en América del Norte." },
        { nombre: "Algeria", bandera: "https://flagcdn.com/dz.svg", info: "País en África." },
        { nombre: "Australia", bandera: "https://flagcdn.com/au.svg", info: "País en Oceanía." },
        { nombre: "Bangladesh", bandera: "https://flagcdn.com/bd.svg", info: "País en Asia." },
        { nombre: "Rusia", bandera: "https://flagcdn.com/ru.svg", info: "País en Europa y Asia." },
        { nombre: "China", bandera: "https://flagcdn.com/cn.svg", info: "País en Asia." },
        { nombre: "Sudáfrica", bandera: "https://flagcdn.com/za.svg", info: "País en África." },
        { nombre: "Egipto", bandera: "https://flagcdn.com/eg.svg", info: "País en África." },
        { nombre: "Grecia", bandera: "https://flagcdn.com/gr.svg", info: "País en Europa." },
        { nombre: "Noruega", bandera: "https://flagcdn.com/no.svg", info: "País en Europa." },
        { nombre: "Suecia", bandera: "https://flagcdn.com/se.svg", info: "País en Europa." },
        { nombre: "Finlandia", bandera: "https://flagcdn.com/fi.svg", info: "País en Europa." },
        { nombre: "Polonia", bandera: "https://flagcdn.com/pl.svg", info: "País en Europa." },
        { nombre: "Portugal", bandera: "https://flagcdn.com/pt.svg", info: "País en Europa." },
        { nombre: "Suiza", bandera: "https://flagcdn.com/ch.svg", info: "País en Europa." }
    ];
    function crearTabla(m, n, datos) {
        const tabla = document.createElement('table');
        tabla.classList.add('tabla-banderas');
        let index = 0;
        for (let i = 0; i < m; i++) {
            const fila = document.createElement('tr');
            for (let j = 0; j < n; j++) {
                const celda = document.createElement('td');
                celda.classList.add('celda-banderas');
                if (index < datos.length) {
                    const pais = datos[index];
                    celda.innerHTML = `<h3>${pais.nombre}</h3><img src="${pais.bandera}" alt="Bandera de ${pais.nombre}"><h5>${pais.info}</h5>`;
                    index++;
                }
                fila.appendChild(celda);
            }
            tabla.appendChild(fila);
        }
        return tabla;
    }
    const contenedorTabla = document.getElementById('contenedor-tabla');
    function renderGrid(datos) {
        contenedorTabla.innerHTML = ""; // limpiar antes
        const tabla = crearTabla(4, 6, datos);
        contenedorTabla.appendChild(tabla);
    }
    // inicializar con todos los países
    renderGrid(paises);
    // Filtro en tiempo real
    const filtro = document.getElementById("bandera");
    filtro.addEventListener("input", () => {
        const texto = filtro.value.toLowerCase();
        const filtrados = paises.filter(p => p.nombre.toLowerCase().includes(texto));
        renderGrid(filtrados);
    });
});