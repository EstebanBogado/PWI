document.addEventListener("DOMContentLoaded", function () {
    const cursoRadios = document.getElementsByName("curso");
    const fondoRadios = document.getElementsByName("fondo");
    const textoColor = document.getElementById("colorTexto");
    const tituloCurso = document.getElementById("tituloCurso");

    cursoRadios.forEach(radio => {
        radio.addEventListener("change", function () {
            tituloCurso.textContent = `Curso seleccionado: ${this.value.toUpperCase()}`;
        });
    });

    textoColor.addEventListener("change", () => {
        const eleccion = textoColor.value;
        if (eleccion) {
            tituloCurso.style.color = eleccion;
        }
    });

    fondoRadios.forEach(radio => {
        radio.addEventListener("change", function () {
            tituloCurso.style.backgroundColor = this.value;
        })
    });
});
