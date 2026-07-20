const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const nombre = urlParams.get('nombre');
const email = urlParams.get('email');
const edad = urlParams.get('edad');
const pais = urlParams.get('pais');
const terminos = urlParams.get('terminos');
const contenedor = document.getElementById('resultado-container');

if (nombre) {
    contenedor.innerHTML = `
        <ul>
            <li><strong>Nombre:</strong> ${nombre}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Edad:</strong> ${edad} años</li>
            <li><strong>País:</strong> ${pais}</li>
            <li><strong>Términos aceptados:</strong> ${terminos ? 'Sí' : 'No especificado'}</li>
        </ul>
    `;
} else {
    contenedor.innerHTML = '<p>No se recibieron datos. Por favor, completa el formulario primero.</p>';
}