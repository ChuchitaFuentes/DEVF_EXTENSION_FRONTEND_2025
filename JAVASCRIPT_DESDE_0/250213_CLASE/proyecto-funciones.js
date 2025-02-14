let librosLeidos = [];

function agregarLibro(tituloLibro){
    librosLeidos.push(tituloLibro);
}

agregarLibro("Cien años de soledad");
agregarLibro("El principito");
agregarLibro("El alquimista");

// console.log(librosLeidos);

function mostrarLeidos(){
    for(let i = 0; i < librosLeidos.length; i++){
        console.log(librosLeidos[i]);
    }
    console.log("-------------------------");
}

mostrarLeidos();

agregarLibro("La chica del tren");
agregarLibro("El libro interminable");

mostrarLeidos();

agregarLibro("El club de la salamandra");

mostrarLeidos();