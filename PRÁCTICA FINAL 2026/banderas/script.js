document.addEventListener("DOMContentLoaded", () => {
    renderGrid(paises);
});
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
    { nombre: "México", bandera: "https://flagcdn.com/mx.svg", info: "País en América del Norte." },
    { nombre: "Rusia", bandera: "https://flagcdn.com/ru.svg", info: "País en Europa y Asia." },
    { nombre: "Sudáfrica", bandera: "https://flagcdn.com/za.svg", info: "País en África." },
    { nombre: "China", bandera: "https://flagcdn.com/cn.svg", info: "País en Asia." },
    { nombre: "Corea del Sur", bandera: "https://flagcdn.com/kr.svg", info: "País en Asia." },
    { nombre: "Noruega", bandera: "https://flagcdn.com/no.svg", info: "País en Europa." },
    { nombre: "Suecia", bandera: "https://flagcdn.com/se.svg", info: "País en Europa." },
    { nombre: "Finlandia", bandera: "https://flagcdn.com/fi.svg", info: "País en Europa." },
    { nombre: "Grecia", bandera: "https://flagcdn.com/gr.svg", info: "País en Europa." },
    { nombre: "Turquía", bandera: "https://flagcdn.com/tr.svg", info: "País en Europa y Asia." },
    { nombre: "Egipto", bandera: "https://flagcdn.com/eg.svg", info: "País en África." },
    { nombre: "Tailandia", bandera: "https://flagcdn.com/th.svg", info: "País en Asia." },
    { nombre: "Vietnam", bandera: "https://flagcdn.com/vn.svg", info: "País en Asia." },
];

const grid = document.getElementById("grid");
const filtro = document.getElementById("filtro");
const popup = document.getElementById("popup");
const cerrar = document.getElementById("cerrar");
const popupNombre = document.getElementById("popup-nombre");
const popupBandera = document.getElementById("popup-bandera");
const popupInfo = document.getElementById("popup-info");

// Render inicial
function renderGrid(lista) {
    grid.innerHTML = "";
    lista.forEach(p => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<h3>${p.nombre}</h3><img src="${p.bandera}" alt="Bandera de ${p.nombre}">`;
        card.addEventListener("click", () => mostrarPopup(p));
        grid.appendChild(card);
    });
}

function mostrarPopup(pais) {
    popupNombre.textContent = pais.nombre;
    popupBandera.src = pais.bandera;
    popupInfo.textContent = pais.info;
    popup.classList.remove("hidden");
}

cerrar.addEventListener("click", () => popup.classList.add("hidden"));

// Filtro en tiempo real (case-insensitive)
filtro.addEventListener("input", () => {
    const texto = filtro.value.toLowerCase();
    const filtrados = paises.filter(p => p.nombre.toLowerCase().includes(texto));
    renderGrid(filtrados);
});