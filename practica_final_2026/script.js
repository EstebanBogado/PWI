
//     const colorTexto = document.createElement('p');
//     colorTexto.textContent = 'Cambie el color del texto:';
//     divCursos.appendChild(colorTexto);

//     const selecColor = document.createElement('label');
//     selecColor.htmlFor = 'colorTexto';
//     divCursos.appendChild(selecColor);

// const colorSelector = document.createElement('select');
// colorSelector.id = 'colorTexto';
// colorSelector.innerHTML = `
//     <option value="">Seleccione un color</option>
//     <option value="red">Rojo</option>
//     <option value="green">Verde</option>
//     <option value="yellow">Amarillo</option>
// `;
// colorSelector.addEventListener('change', function () {
//     contIzq.style.color = this.value;
// });



//     const colorSelector = document.createElement('select');
//     colorSelector.id = 'colorTexto';
//     colorSelector.innerHTML = `
//         <option value="">Seleccione un color</option>
//         <option value="red">Rojo</option>
//         <option value="green">Verde</option>
//         <option value="yellow">Amarillo</option>
//     `;
//     colorSelector.addEventListener('change', function () {
//         contIzq.style.color = this.value;
//     });
//     // for (const option of colorSelector.options) {
//     //     option.style.color = option.value; // Cambia el color del texto de cada opción
//     // }

document.addEventListener('DOMContentLoaded', function () {
    const header = document.createElement('header');
    header.textContent = 'Practica Final 2026';
    header.style.backgroundColor = 'blue';
    header.style.color = 'white';
    header.style.fontSize = '2rem';
    header.style.textAlign = 'center';
    header.style.padding = '1rem';
    document.body.insertBefore(header, document.body.firstChild);

    const footer = document.createElement('footer');
    footer.textContent = 'Derechos reservados 2026';
    footer.style.backgroundColor = 'blue';
    footer.style.color = 'white';
    footer.style.fontSize = '1rem';
    footer.style.textAlign = 'right';
    footer.style.padding = '1rem';
    document.body.appendChild(footer);

    const main = document.createElement('main');
    main.classList.add('main');
    main.style.padding = '1rem';
    document.body.insertBefore(main, footer);

    // Article izquierdo
    const artIzq = document.createElement('article');
    artIzq.classList.add('articleIzquierdo');
    main.appendChild(artIzq);

    const contIzq = document.createElement('div');
    contIzq.classList.add('content1');
    contIzq.textContent = 'Título del curso';
    artIzq.appendChild(contIzq);

    // Article derecho
    const artDer = document.createElement('article');
    artDer.classList.add('articleDerecho');
    main.appendChild(artDer);

    const contDer = document.createElement('div');
    contDer.classList.add('content2');
    artDer.appendChild(contDer);

    const divCursos = document.createElement('div');
    divCursos.classList.add('seelecCursos');
    contDer.appendChild(divCursos);

    // Radios de cursos
    const titulo = document.createElement('p');
    titulo.textContent = 'Seleccione un curso:';
    divCursos.appendChild(titulo);

    const cursos = ['HTML', 'CSS', 'JAVASCRIPT'];

    for (let i = 0; i < cursos.length; i++) {
        const boton = document.createElement('input');
        boton.classList.add('boton');
        boton.type = 'radio';
        boton.name = 'curso';
        boton.value = cursos[i];
        boton.id = `curso${i}`;

        boton.addEventListener('change', function () {
            contIzq.textContent = this.value;
        });

        const label = document.createElement('label');
        label.htmlFor = boton.id;
        label.style.marginRight = '1rem';
        label.append(boton, ` ${cursos[i]}`);
        divCursos.appendChild(label);
    }

    // Select de color de texto (solo afecta a contIzq)
    const colorTexto = document.createElement('label');
    colorTexto.htmlFor = 'colorTexto';
    colorTexto.textContent = 'Cambie el color del texto:';
    colorTexto.style.display = 'block';
    divCursos.appendChild(colorTexto);

    const colorSelector = document.createElement('select');
    colorSelector.id = 'colorTexto';
    colorSelector.innerHTML = `
        <option value="">Seleccione un color</option>
        <option value="red">Rojo</option>
        <option value="rgb(40, 197, 40)">Verde</option>
        <option value="yellow">Amarillo</option>
    `;
    colorSelector.addEventListener('change', function () {
        contIzq.style.color = this.value;
    });

    divCursos.appendChild(colorSelector);

    // Radios de color de fondo (solo afecta al primer article)
    const tituloFondo = document.createElement('p');
    tituloFondo.textContent = 'Cambie el color de fondo:';
    divCursos.appendChild(tituloFondo);

    const fondos = { verde: 'green', violeta: 'violet', naranja: 'orange' };

    for (const nombre in fondos) {
        const boton = document.createElement('input');
        boton.classList.add('boton');
        boton.type = 'radio';
        boton.name = 'fondo';
        boton.value = fondos[nombre];
        boton.id = `fondo-${nombre}`;

        boton.addEventListener('change', function () {
            // artIzq.style.backgroundColor = this.value;
            contIzq.style.backgroundColor = this.value;
        });

        const label = document.createElement('label');
        label.htmlFor = boton.id;
        label.style.marginRight = '1rem';
        label.append(boton, ` ${nombre}`);
        divCursos.appendChild(label);
    }
});