// detalle gif

let queryString = location.search; // Capturamos la query string
let queryStringToObject = new URLSearchParams(queryString); // La transformamos en un objeto URLSearchParams
let id = queryStringToObject.get('id');
console.log("id personaje", id);
let url = `https://rickandmortyapi.com/api/character/${id}`;

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // Mostramos los datos en las nuevas etiquetas HTML
        let nombreElement = document.querySelector('.nombre-personaje');
        let statusElement = document.querySelector('.status');
        let especieElement = document.querySelector('.especie');
        let imagenElement = document.querySelector('.imagen-personaje');

        // puede ser con textContent tb
        nombreElement.innerText = data.name;
        statusElement.innerText += data.status;
        especieElement.innerText += data.species;
        imagenElement.src = data.image;
        imagenElement.alt = `Imagen de ${data.name}`;
    })
    .catch(function (error) {
        console.log(error);
    });

    //Agregar gif a lista de favoritos.
let favoritos = [];

//REcuperar datos del storage
let recuperoStorage = localStorage.getItem('favoritos');

//Chequear y agregar la información de local storage en el array
if(recuperoStorage != null){
    favoritos = JSON.parse(recuperoStorage);
}

//Cuando el usuario haga click en "agregar a favoritos _> Agregar id del gif dentro del array.
let fav = document.querySelector('.fav');
console.log(fav);

fav.addEventListener("click", function(e){
    e.preventDefault();
        favoritos.push(id);
        console.log(favoritos);              
        //Armamos un string
        let favParaStorage = JSON.stringify(favoritos);
        //Lo guardamos dentro de localStorage
        localStorage.setItem('favoritos', favParaStorage);
        console.log(localStorage);
        alert("¡Personaje agregado a favoritos correctamente!");
})

