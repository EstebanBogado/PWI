document.addEventListener("DOMContentLoaded", function () {
    const eleccion = document.getElementById("userChoice");
    const jugar = document.getElementById("playButton");
    const resultado = document.getElementById("result");
    const oponente = ["piedra", "papel", "tijera"];

    jugar.addEventListener('click', function () {
        const nuevoParrafo = document.createElement('p');
        const eleccionUsuario = eleccion.value;
        const eleccionOponente = oponente[Math.floor(Math.random() * oponente.length)];
        if (eleccionUsuario === eleccionOponente) {
            document.getElementById("result").textContent = `Empate! Elegiste ${eleccionUsuario} y el oponente eligió ${eleccionOponente}`;
            nuevoParrafo.textContent = `mmm...`;
            nuevoParrafo.classList.add('amarillo');
            document.getElementById("result").appendChild(nuevoParrafo);
        } else if ((eleccionUsuario === "piedra" && eleccionOponente === "tijera") ||
            (eleccionUsuario === "papel" && eleccionOponente === "piedra") ||
            (eleccionUsuario === "tijera" && eleccionOponente === "papel")) {
            document.getElementById("result").textContent = `Ganaste! Elegiste ${eleccionUsuario} y el oponente eligió ${eleccionOponente}`;
            nuevoParrafo.textContent = `joya`;
            nuevoParrafo.classList.add('verde');
            document.getElementById("result").appendChild(nuevoParrafo);
        } else {
            document.getElementById("result").textContent = `Perdiste! Elegiste ${eleccionUsuario} y el oponente eligió ${eleccionOponente}`;
            nuevoParrafo.textContent = `ufa...`;
            nuevoParrafo.classList.add('rojo');
            document.getElementById("result").appendChild(nuevoParrafo);
        }
    });
});

// document.addEventListener('DOMContentLoaded', function () {
//     const eleccion = document.getElementById('userChoice');
//     const jugar = document.getElementById('play-button');
//     const resultado = document.getElementById('result');
//     const oponente = ["piedra", "papel", "tijera"];

//     jugar.addEventListener('click', function () {
//         const eleccionUsuario = eleccion.value;
//         const eleccionOponente = oponente[Math.floor(Math.random() * oponente.length)];

//         if (eleccionUsuario === eleccionOponente) {
//             resultado.textContent = `Empate! Ambos eligieron ${eleccionUsuario}`;
//         } else if (
//             (eleccionUsuario === "piedra" && eleccionOponente === "tijera") ||
//             (eleccionUsuario === "papel" && eleccionOponente === "piedra") ||
//             (eleccionUsuario === "tijera" && eleccionOponente === "papel")
//         ) {
//             resultado.textContent = `Ganaste! Elegiste ${eleccionUsuario} y el oponente eligió ${eleccionOponente}`;
//         } else {
//             resultado.textContent = `Perdiste! Elegiste ${eleccionUsuario} y el oponente eligió ${eleccionOponente}`;
//         }
//     });
// });