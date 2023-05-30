const arrayArticulos = [{
        id: 01,
        titulo: "Elevate Pre-Workout",
        peso: "1Kg",
        imagen: "img/suplemento1.jpg",
        imagenPuntuacion: "img/estrellas.png",
        precioAntiguo: 49.99,
        precioNuevo: 34.99,
    },
    {
        id: 02,
        titulo: "Complete Food Shake",
        peso: "1Kg",
        imagen: "img/suplemento2.jpg",
        imagenPuntuacion: "img/estrellas.png",
        precioAntiguo: 15,
        precioNuevo: 12.49
    },
    {
        id: 03,
        titulo: "Clear Whey Isolate",
        peso: "500Gr",
        imagen: "img/suplemento3.jpg",
        imagenPuntuacion: "img/estrellas.png",
        precioAntiguo: 30.99,
        precioNuevo: 29.44
    }
];

/* --------------------------------------------------------------------------------------------------------------------------------------- */

// 2 Crear el bucle y pintar cada uno de los objetos en console.log
// arrayArticulos.forEach(objeto => console.log(objeto));

// Pintar el titulo de cada objeto en un console.log
// arrayArticulos.forEach(objeto => console.log(objeto.titulo));

// 3 Como Crear un div con javascript

// Seleccionamos el Id #lista-articulos que sostiene la estructura de "row" y "cards"
let listaArticulos = document.getElementById('lista-articulos');
// Creamos el div "row cards" fuera del bucle por que si no nos creara 3 y no los necesitamos
let rowCards = document.createElement('div');
rowCards.classList.add('row', 'cards');
// Agregamos al div #id lista-articulos el div "row cards"
listaArticulos.appendChild(rowCards);

bucleForEach();

function bucleForEach() {
    // 4 Como añadir una clase a un elemento Html con javascript
    arrayArticulos.forEach(function (objeto) {
        // Creamos el div "fourColumns":
        let fourColumns = document.createElement('div');
        fourColumns.classList.add('four', 'columns');

        // Agregamos al div "row cards" los 3 divs "four columns"
        rowCards.appendChild(fourColumns);

        // Creamos el div "card":
        let card = document.createElement('div');
        card.classList.add('card');

        // Agregamos al div "fourColumns" el div "card"
        fourColumns.appendChild(card);

        // Cogemos el segundo div "row cards"
        let divRowCards = document.getElementsByClassName("row cards")[0];
        // Le agregamos el div "fourColumns":
        divRowCards.appendChild(fourColumns);

        // Creamos la etiqueta de imagen
        let img = document.createElement('img');
        // Le asignamos el atributo img/articulo3.jpg
        img.setAttribute('src', objeto.imagen);
        // Le asignamos la clase imagen-articulo
        img.classList.add('imagen-articulo', 'u-full-width');
        // Se la anidamos al Div card
        card.appendChild(img);

        let infoCard = document.createElement('div');
        infoCard.classList.add('info', 'card');
        card.appendChild(infoCard);

        let h4 = document.createElement('h4');
        h4.textContent = objeto.titulo;
        infoCard.appendChild(h4);

        let p = document.createElement('p');
        p.textContent = objeto.peso;
        infoCard.appendChild(p);

        let img2 = document.createElement('img');
        img2.setAttribute('src', objeto.imagenPuntuacion);
        infoCard.appendChild(img2);

        let pPrecio = document.createElement('p');
        pPrecio.classList.add('precio');
        pPrecio.textContent = `${objeto.precioAntiguo}€`;
        infoCard.appendChild(pPrecio);

        let span = document.createElement('span');
        span.classList.add('u-pull-right');
        span.textContent = `${objeto.precioNuevo}€`;
        pPrecio.appendChild(span);

        let a = document.createElement('a');
        a.setAttribute('href', '#');
        a.classList.add('u-full-width', 'button-primary', 'button', 'input', 'agregar-carrito');
        a.setAttribute('data-id', objeto.id);
        a.textContent = 'Agregar Al Carrito';
        infoCard.appendChild(a);
    })
    /* --------------------------------------------------------------addEventListener----------------------------------------------------------*/
    // Seleccionar todos los botones dentro del bucle
    const botones = document.querySelectorAll(".agregar-carrito");
    // Agregar un event listener a cada botón
    botones.forEach(boton => {

        boton.addEventListener('click', (e) => {
            // Guardamos el Id del articulo clicado en articuloId
            let articuloId = e.target.getAttribute("data-id");
            console.log(articuloId);
            // Ejecutamos metodo .find para que imprima el objeto que corresponda con la Id clicada anteriormente
            let objetoClicado = arrayArticulos.find(function (elemento) {
                return elemento.id == articuloId;
            });
            console.log(objetoClicado);
        });
    });
    /* --------------------------------------------------------------addEventListener----------------------------------------------------------*/
};

// 1 Hacer una funcion que haga un bucle y recorra todos los objetos del array y los pinte en el Htmls