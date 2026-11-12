document.addEventListener("DOMContentLoaded", function () {
    const eleccion = document.getElementById("jugador1");
    const jugar = document.getElementById("jugar");
    const resultado = document.getElementById("resultado");
    const oponente = ["piedra", "papel", "tijera"];

    jugar.addEventListener('click', function () {
        const nuevoParrafo = document.createElement('p');
        const eleccionUsuario = eleccion.value;
        const eleccionOponente = oponente[Math.floor(Math.random() * oponente.length)];
        if (eleccionUsuario === eleccionOponente) {
            document.getElementById("resultado").textContent = `Empate! Elegiste ${eleccionUsuario} y el oponente eligió ${eleccionOponente}`;
            nuevoParrafo.textContent = `mmm...`;
            nuevoParrafo.classList.add('amarillo');
            document.getElementById("resultado").appendChild(nuevoParrafo);
        } else if ((eleccionUsuario === "piedra" && eleccionOponente === "tijera") ||
            (eleccionUsuario === "papel" && eleccionOponente === "piedra") ||
            (eleccionUsuario === "tijera" && eleccionOponente === "papel")) {
            document.getElementById("resultado").textContent = `Ganaste! Elegiste ${eleccionUsuario} y el oponente eligió ${eleccionOponente}`;
            nuevoParrafo.textContent = `joya`;
            nuevoParrafo.classList.add('verde');
            document.getElementById("resultado").appendChild(nuevoParrafo);
        } else {
            document.getElementById("resultado").textContent = `Perdiste! Elegiste ${eleccionUsuario} y el oponente eligió ${eleccionOponente}`;
            nuevoParrafo.textContent = `ufa...`;
            nuevoParrafo.classList.add('rojo');
            document.getElementById("resultado").appendChild(nuevoParrafo);
        }
    });
});      