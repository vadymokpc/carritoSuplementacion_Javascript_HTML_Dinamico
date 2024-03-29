const arrayArticulos = [{
        id: 01,
        cantidad: 1,
        titulo: "Elevate Pre-Workout",
        peso: "1Kg",
        imagen: "img/suplemento1.jpg",
        imagenPuntuacion: "img/estrellas.png",
        precioAntiguo: 49.99,
        precioNuevo: 34.99,
    },
    {
        id: 02,
        cantidad: 1,
        titulo: "Complete Food Shake",
        peso: "1Kg",
        imagen: "img/suplemento2.jpg",
        imagenPuntuacion: "img/estrellas.png",
        precioAntiguo: 15,
        precioNuevo: 12.49,
    },
    {
        id: 03,
        cantidad: 1,
        titulo: "Clear Whey Isolate",
        peso: "500Gr",
        imagen: "img/suplemento3.jpg",
        imagenPuntuacion: "img/estrellas.png",
        precioAntiguo: 30.99,
        precioNuevo: 29.44,
    },
    {
        id: 04,
        cantidad: 1,
        titulo: "Clear Whey Isolate",
        peso: "500Gr",
        imagen: "img/suplemento3.jpg",
        imagenPuntuacion: "img/estrellas.png",
        precioAntiguo: 30.99,
        precioNuevo: 29.44,
    }
];

let articulosCarrito = [];

let tBody = document.querySelector("#lista-carrito tbody");

/* --------------------------------------------------------------------------------------------------------------------------------------- */

// 2 Crear el bucle y pintar cada uno de los objetos en console.log
// arrayArticulos.forEach(objeto => console.log(objeto));

// Pintar el titulo de cada objeto en un console.log
// arrayArticulos.forEach(objeto => console.log(objeto.titulo));

// 3 Como Crear un div con javascript

// Seleccionamos el Id #lista-articulos que sostiene la estructura de "row" y "cards"
let listaArticulos = document.getElementById('lista-articulos');
// Creamos el div "row cards" fuera del bucle por que si no nos creara 3 y no los necesitamos
let rowDiv = document.createElement('div');
rowDiv.classList.add('row');
// Agregamos al div #id lista-articulos el div "row Div"
listaArticulos.appendChild(rowDiv);

bucleForEach();

function bucleForEach() {
    // 4 Como añadir una clase a un elemento Html con javascript
    arrayArticulos.forEach(function (objeto) {

        // Creamos el div "fourColumns":
        let fourColumns = document.createElement('div');
        fourColumns.classList.add('four', 'columns');

        // Agregamos al div "row Div" los 3 divs "four columns"
        rowDiv.appendChild(fourColumns);


        // Creamos el div "card":
        let card = document.createElement('div');
        card.classList.add('card');

        // Agregamos al div "fourColumns" el div "card"
        fourColumns.appendChild(card);

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
        let a = document.createElement('a'); // Boton "Agregar al carrito"
        /* --------------------------------------------------------------addEventListener----------------------------------------------------------*/
        a.addEventListener("click", () => {
            actualizacionCarrito(objeto);
        });
        /* --------------------------------------------------------------addEventListener----------------------------------------------------------*/

        a.setAttribute('href', '#');
        a.classList.add('u-full-width', 'button-primary', 'button', 'input', 'agregar-carrito');
        a.setAttribute('data-id', objeto.id);
        a.textContent = 'Agregar Al Carrito';
        infoCard.appendChild(a);

    })
    //  console.log(rowDiv);
};

function actualizacionCarrito(objeto) {

    // Quitamos del Html el array obsoleto que se pinto anteriormente
    limpiarDuplicados();

    let existeEnCarrito = objeto.id;
    console.log(existeEnCarrito, "Objeto que acabas de agregar");

    // Filtramos por Id si el objeto que estamos agregando ya existe en el carrito
    let existingObject = articulosCarrito.find(obj => obj.id === existeEnCarrito);
    console.log(existingObject, "Metodo .find");

    // Si todavia no existe lo empujamos al carrito
    if (!existingObject) {

        articulosCarrito.push(objeto);

        for (i = 0; i < articulosCarrito.length; i++) {

            let rowTbody = document.createElement('tr');
            let tdImagen = document.createElement('td');
            let imgArticulo = document.createElement('img');
            imgArticulo.setAttribute('src', articulosCarrito[i].imagen);
            imgArticulo.setAttribute('width', "100");
            let tdTitulo = document.createElement('td');
            tdTitulo.textContent = articulosCarrito[i].titulo;
            let tdPrecio = document.createElement('td');
            tdPrecio.textContent = articulosCarrito[i].precioNuevo + "€";
            let tdCantidad = document.createElement('td');
            tdCantidad.textContent = articulosCarrito[i].cantidad;

            /* --------------------------------------------------------------Sumar 1 Articulo----------------------------------------------------------*/
            let tdSumarArticulo = document.createElement('td');
            let aSumar = document.createElement('a');

            let objetoIndice = objeto.cantidad;

            aSumar.addEventListener("click", () => {
                objeto.cantidad++;
                objetoIndice = objeto.cantidad;
                tdCantidad.textContent = objetoIndice;
                console.log(objetoIndice);
                console.log(articulosCarrito);
            });


            tdSumarArticulo.appendChild(aSumar);
            aSumar.setAttribute('href', "#");
            aSumar.classList.add('sumar-articulo');
            aSumar.setAttribute('data-id', articulosCarrito[i].id);
            aSumar.textContent = "+";

            /* --------------------------------------------------------------Sumar 1 Articulo----------------------------------------------------------*/
            /* --------------------------------------------------------------Restar 1 Articulo---------------------------------------------------------*/
            let tdRestarArticulo = document.createElement('td');
            let aRestar = document.createElement('a');

            aRestar.addEventListener("click", () => {
                objeto.cantidad--;
                objetoIndice = objeto.cantidad;
                tdCantidad.textContent = objetoIndice;
                console.log(objetoIndice);
                console.log(articulosCarrito);
            });

            tdRestarArticulo.appendChild(aRestar);
            aRestar.setAttribute('href', "#");
            aRestar.classList.add('restar-articulo');
            aRestar.setAttribute('data-id', articulosCarrito[i].id);
            aRestar.textContent = "-";
            /* --------------------------------------------------------------Restar 1 Articulo---------------------------------------------------------*/
            let tdBorrarArticulo = document.createElement('td');
            let aBorrar = document.createElement('a');
            tdBorrarArticulo.appendChild(aBorrar);
            aBorrar.setAttribute('href', "#");
            aBorrar.classList.add('borrar-articulo');
            aBorrar.setAttribute('data-id', articulosCarrito[i].id);
            aBorrar.textContent = "X";


            tdImagen.appendChild(imgArticulo);
            rowTbody.appendChild(tdImagen);
            tBody.appendChild(rowTbody);
            rowTbody.appendChild(tdTitulo);
            rowTbody.appendChild(tdPrecio);
            rowTbody.appendChild(tdCantidad);
            rowTbody.appendChild(tdSumarArticulo);
            rowTbody.appendChild(tdRestarArticulo);
            rowTbody.appendChild(tdBorrarArticulo);
        }
    }
    // Si ya existe simplemente le sumamos la cantidad y lanzamos el mismo bucle for
    else {
        console.log("Ya lo agregaste antes este articulo");
        objeto.cantidad++;

        for (i = 0; i < articulosCarrito.length; i++) {

            let rowTbody = document.createElement('tr');
            let tdImagen = document.createElement('td');
            let imgArticulo = document.createElement('img');
            imgArticulo.setAttribute('src', articulosCarrito[i].imagen);
            imgArticulo.setAttribute('width', "100");
            let tdTitulo = document.createElement('td');
            tdTitulo.textContent = articulosCarrito[i].titulo;
            let tdPrecio = document.createElement('td');
            tdPrecio.textContent = articulosCarrito[i].precioNuevo + "€";
            let tdCantidad = document.createElement('td');
            tdCantidad.textContent = articulosCarrito[i].cantidad;

            /* --------------------------------------------------------------Sumar 1 Articulo----------------------------------------------------------*/
            let tdSumarArticulo = document.createElement('td');
            let aSumar = document.createElement('a');

            let objetoIndice = objeto.cantidad;

            aSumar.addEventListener("click", () => {
                objeto.cantidad++;
                objetoIndice = objeto.cantidad;
                tdCantidad.textContent = objetoIndice;
                console.log(objetoIndice);
                console.log(articulosCarrito);
            });


            tdSumarArticulo.appendChild(aSumar);
            aSumar.setAttribute('href', "#");
            aSumar.classList.add('sumar-articulo');
            aSumar.setAttribute('data-id', articulosCarrito[i].id);
            aSumar.textContent = "+";

            /* --------------------------------------------------------------Sumar 1 Articulo----------------------------------------------------------*/
            /* --------------------------------------------------------------Restar 1 Articulo---------------------------------------------------------*/
            let tdRestarArticulo = document.createElement('td');
            let aRestar = document.createElement('a');

            /* aRestar.addEventListener("click", () => {
                objeto.cantidad--;
                objetoIndice = objeto.cantidad;
                tdCantidad.textContent = objetoIndice;
                console.log(objetoIndice);
                console.log(articulosCarrito);
            }); */

            tdRestarArticulo.appendChild(aRestar);
            aRestar.setAttribute('href', "#");
            aRestar.classList.add('restar-articulo');
            aRestar.setAttribute('data-id', articulosCarrito[i].id);
            aRestar.textContent = "-";
            /* --------------------------------------------------------------Restar 1 Articulo---------------------------------------------------------*/
            let tdBorrarArticulo = document.createElement('td');
            let aBorrar = document.createElement('a');
            tdBorrarArticulo.appendChild(aBorrar);
            aBorrar.setAttribute('href', "#");
            aBorrar.classList.add('borrar-articulo');
            aBorrar.setAttribute('data-id', articulosCarrito[i].id);
            aBorrar.textContent = "X";


            tdImagen.appendChild(imgArticulo);
            rowTbody.appendChild(tdImagen);
            tBody.appendChild(rowTbody);
            rowTbody.appendChild(tdTitulo);
            rowTbody.appendChild(tdPrecio);
            rowTbody.appendChild(tdCantidad);
            rowTbody.appendChild(tdSumarArticulo);
            rowTbody.appendChild(tdRestarArticulo);
            rowTbody.appendChild(tdBorrarArticulo);
        }
    };
    //  console.log(articulosCarrito);
};

function sumar(articulo) {
    /* let objetoIndice = articulosCarrito[i];
    console.log(objetoIndice); */
    console.log(articulosCarrito[i].cantidad);
    console.log(articulo, "Funcion sumar");
};

function limpiarDuplicados() {
    tBody.innerHTML = "";
};