document.addEventListener("DOMContentLoaded", function () {
    const eleccion = document.getElementById("jugador1");
    const jugar = document.getElementById("jugar");
    const resultado = document.getElementById("resultado");
    const oponente = ["piedra", "papel", "tijera"];

    jugar.addEventListener('click', function () {
        const titulo = document.createElement('h2');
        const nuevoParrafo = document.createElement('p');
        const jugador1 = eleccion.value;
        const jugador2 = oponente[Math.floor(Math.random() * oponente.length)];

        if (jugador1 === jugador2) {
            titulo.textContent = `Empate! Elegiste ${jugador1} y el oponente eligió ${jugador2}`;
            nuevoParrafo.textContent = `mmm...`;
            nuevoParrafo.classList.add('amarillo');
        } else if ((jugador1 === "piedra" && jugador2 === "tijera") ||
            (jugador1 === "papel" && jugador2 === "piedra") ||
            (jugador1 === "tijera" && jugador2 === "papel")) {
            titulo.textContent = `Ganaste! Elegiste ${jugador1} y el oponente eligió ${jugador2}`;
            nuevoParrafo.textContent = `joya`;
            nuevoParrafo.classList.add('verde');
        } else {
            titulo.textContent = `Perdiste! Elegiste ${jugador1} y el oponente eligió ${jugador2}`;
            nuevoParrafo.textContent = `ufa...`;
            nuevoParrafo.classList.add('rojo');
        }

        resultado.innerHTML = "";
        resultado.appendChild(titulo);
        resultado.appendChild(nuevoParrafo);
    });
});      