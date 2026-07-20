document.addEventListener("DOMContentLoaded", function () {
    // Crear el header
    const header = document.createElement("header");
    header.innerHTML = `
    <nav class="menu">
      <a href="index.html">Inicio</a>
      <a href="vuelos.html">Vuelos</a>
      <a href="contacto.html">Contacto</a>
    </nav>
  `;
    document.getElementById("header").appendChild(header);

    // Crear el footer
    const footer = document.createElement("footer");
    footer.innerHTML = `
    <p>&copy; 2026 Aero Viajes. Todos los derechos reservados.</p>
  `;
    document.getElementById("footer").appendChild(footer);
});
