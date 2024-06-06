//Lista de gifs favoritos

//Recupero el storage.
let recuperoStorage = localStorage.getItem('favoritos');
//Obtengo el array 
let favoritos = JSON.parse(recuperoStorage);
//destino de los datos en el html
let lista = document.querySelector('.lista');


//Opcional avisar al usuario que no hay gifs en su lista.

//Necesitamos recorrer el array de facoritos
for (let i=0; i<favoritos.length; i++){
    //buscarYMostrarFavoritos
    buscarYMostrarFavoritos(favoritos[i]);
}


function buscarYMostrarFavoritos(id){
    let url = `https://rickandmortyapi.com/api/character/${id}`
    
    fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // Mostramos los datos en las nuevas etiquetas HTML
        lista.innerHTML += `<article>
                                <p><img src=${data.image} alt='${data.name}' /></p>
                                <a href="detalle.html?id=${data.id}"> Name: ${data.name} </a>
                                <p>Status: ${data.status} </p>
                            </article>`
      
    })
    .catch(function (error) {
        console.log(error);
    });
}