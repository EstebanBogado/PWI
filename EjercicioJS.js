

const opciones = ['piedra', 'papel', 'tijera'];

function jugar(){
    const eleccionUsuario = document.getElementById('eleccion').value.toLowerCase();
    const resultadoDiv = document.getElementById('resultado');
    // Validar entrada
    if (!opciones.includes(eleccionUsuario)) {
        resultadoDiv.textContent = "Por favor ingresa piedra, papel o tijera.";
        return;
    }
    // Elección aleatoria de la computadora
    const eleccionComputadora = opciones[Math.floor(Math.random() * opciones.length)];
    // Comparar
    let mensaje = `Computadora eligió: ${eleccionComputadora}. `;
    if (eleccionUsuario === eleccionComputadora) {
        mensaje += "¡Empate!";
    } else if (
        (eleccionUsuario === "piedra" && eleccionComputadora === "tijera") ||
        (eleccionUsuario === "papel" && eleccionComputadora === "piedra") ||
        (eleccionUsuario === "tijera" && eleccionComputadora === "papel")
    ) {
        mensaje += "¡Ganaste!";
    } else {
        mensaje += "Perdiste.";
    }

    resultadoDiv.textContent = mensaje;
};