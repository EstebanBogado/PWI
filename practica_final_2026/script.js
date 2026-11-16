document.addEventListener('DOMContentLoaded', function () {
    // let header = document.querySelector('header');

    header = document.createElement('header');
    header.textContent = 'Practica Final 2026';
    header.style.backgroundColor = 'blue';
    header.style.color = 'white';
    header.style.fontSize = '2rem';
    header.style.textAlign = 'center';
    header.style.padding = '1rem';
    document.body.insertBefore(header, document.body.firstChild);

    footer = document.createElement('footer');
    footer.textContent = 'Derechos reservados 2026';
    footer.style.backgroundColor = 'blue';
    footer.style.color = 'white';
    footer.style.fontSize = '1rem';
    footer.style.textAlign = 'right';
    footer.style.padding = '1rem';
    document.body.appendChild(footer);

    main = document.createElement('main');
    // main.style.backgroundColor = 'lightgray';
    main.classList.add('main');
    main.style.padding = '1rem';
    document.body.insertBefore(main, footer);


    // Agregar contenido al main
    // for (let i = 1; i <= 2; i++) {
    const contizq = document.createElement('article');
    contizq.classList.add('article');
    // content.textContent = 'Bienvenido a la práctica final de 2026.';
    main.appendChild(contizq);
    const contder = document.createElement('article');
    contder.classList.add('article');
    // content.textContent = 'Bienvenido a la práctica final de 2026.';
    main.appendChild(contder);

    const content1 = document.createElement('div');
    content1.classList.add('div');
    content1.textContent = 'Contenedor izquierdo';
    contizq.appendChild(content1);

    const content2 = document.createElement('div');
    content2.classList.add('div');
    content2.textContent = 'Contenedor derecho';
    contder.appendChild(content2);

    // }

});
