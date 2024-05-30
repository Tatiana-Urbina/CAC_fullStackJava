        // Tu API Key de OMdb
        const apiKey = '2ebc78e'; // Reemplaza con tu API Key
        const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=movie`;

        // Función para obtener datos de la API
        async function fetchMovies() {
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error(`Error en la solicitud: ${response.statusText}`);
                }
                const data = await response.json();
                if (data.Response === "True") {
                    displayMovies(data.Search);
                } else {
                    throw new Error(`Error en la respuesta de la API: ${data.Error}`);
                }
            } catch (error) {
                console.error('Error:', error.message);
                alert(`Error al obtener los datos: ${error.message}`);
            }
        }

        // Función para mostrar las películas en el DOM
        function displayMovies(movies) {
            const moviesDiv = document.getElementById('movies');
            moviesDiv.classList.add('peliculas');
            moviesDiv.innerHTML = '';
            movies.forEach(movie => {
                const movieElement = document.createElement('div');
                movieElement.classList.add('pelicula');
                movieElement.innerHTML = `
                    <h4 class="tituloPelicula">${movie.Title}</h4>
                    <p >Año: ${movie.Year}</p>
                    <img class="imgTendencia" src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/100x200?text=No+Image'}" alt="${movie.Title}">
                `;
                moviesDiv.appendChild(movieElement);
            });
        }

        // Llamar a la función fetchMovies cuando la página se cargue
        window.onload = fetchMovies;
 /*
 // URL de la API
    const apiUrl = 'http://www.omdbapi.com/?apikey=[2ebc78e]&';

    // Función para obtener datos de la API
    async function fetchMovies() {
        try {
            // Hacer una solicitud a la API
            const response = await fetch(apiUrl);

            // Verificar si la respuesta es exitosa
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.statusText);
            }

            // Parsear la respuesta JSON
            const data = await response.json();

            // Mostrar las películas en la página
            displayMovies(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }

// Array de películas
const peliculasObjetos = [
    {titulo: 'Forrest Gump', genero: 'Drama', duracion: 142 , imagen :'aclamada_1.jpg'}, 
    {titulo: 'La vida es bella', genero: 'Drama', duracion: 116, imagen :'aclamada_2.jpg'},
    {titulo: 'El padrino', genero: 'Drama', duracion: 175, imagen : 'aclamada_3.jpg'},
    {titulo: 'El señor de los anillos', genero: 'Fantasia', duracion: 201 , imagen:'aclamada_4.jpg'},
    {titulo: 'El señor de los anillos', genero: 'Fantasia', duracion: 201 , imagen:'aclamada_4.jpg'},
    {titulo: 'El señor de los anillos', genero: 'Fantasia', duracion: 201 , imagen:'aclamada_4.jpg'},
    {titulo: 'El señor de los anillos', genero: 'Fantasia', duracion: 201 , imagen:'aclamada_4.jpg'},
    {titulo: 'El señor de los anillos', genero: 'Fantasia', duracion: 201 , imagen:'aclamada_4.jpg'},
    {titulo: 'El señor de los anillos', genero: 'Fantasia', duracion: 201 , imagen:'aclamada_4.jpg'},
    {titulo: 'El señor de los anillos', genero: 'Fantasia', duracion: 201 , imagen:'aclamada_4.jpg'},
    {titulo: 'El señor de los anillos', genero: 'Fantasia', duracion: 201 , imagen:'aclamada_4.jpg'},
    {titulo: 'El señor de los anillos', genero: 'Fantasia', duracion: 201 , imagen:'aclamada_4.jpg'},
    {titulo: 'El señor de los anillos', genero: 'Fantasia', duracion: 201 , imagen:'aclamada_4.jpg'},
    {titulo: 'El señor de los anillos', genero: 'Fantasia', duracion: 201 , imagen:'aclamada_4.jpg'}
];

// Obtener la sección de películas del DOM
const peliculasSection = document.getElementById('peliculasSection');
const cargarPeliculas = document.getElementById('button');

console.log(peliculasSection);

// Función para crear una tarjeta (card) de película
function crearTarjetaPelicula(pelicula) {
    // Crear elementos de la tarjeta de película
    // creamos la columna de bootstrap 
    const card = document.createElement('div');
    card.classList.add('col-12','col-md-3', 'pelicula-card');
    // estamos creando la tarjeta
    const cardInner = document.createElement('div');
    cardInner.classList.add('card');
    // creo la imagen de la tarjeta
    const cardImg = document.createElement('img');
    cardImg.classList.add('card-img-top');

    cardImg.src = `assets/${pelicula.imagen}`;
    cardImg.alt = pelicula.titulo;

    // creamos el cuerpo de la tarjeta
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = pelicula.titulo;


    const cardGenre = document.createElement('p');
    cardGenre.classList.add('card-text');
    cardGenre.textContent = `Género: ${pelicula.genero}`;


    const cardDuration = document.createElement('p');
    cardDuration.classList.add('card-text');
    cardDuration.textContent = `Duración: ${pelicula.duracion} minutos`;

    // Añadir elementos a la tarjeta de película
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardGenre);
    cardBody.appendChild(cardDuration);
    cardInner.appendChild(cardImg);
    cardInner.appendChild(cardBody);
    // agrego la tarejta a la columna de bootstrap
    card.appendChild(cardInner);

    return card;
}

// Función para agregar todas las tarjetas de películas al DOM
function agregarTarjetasPeliculas() {
    peliculasObjetos.forEach(function(pelicula) {
        const peliculaCard = crearTarjetaPelicula(pelicula); // crea la columna con la tarjeta dentro
        peliculasSection.appendChild(peliculaCard);
    });
}

// Llamar a la función para agregar las tarjetas de películas cuando el DOM esté cargado
// document.addEventListener("DOMContentLoaded", agregarTarjetasPeliculas);
// agregarTarjetasPeliculas();
 cargarPeliculas.addEventListener('click', agregarTarjetasPeliculas);
 */