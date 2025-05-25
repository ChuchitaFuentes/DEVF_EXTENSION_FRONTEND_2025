// Codigo donde se genera el arreglo con los libros a partir d eun objeto

let libros = [];

class Libro {
    constructor (titulo, autor, genero, disponible){
        this._titulo = titulo;
        this._autor = autor;
        this._genero = genero,
        this._disponible = disponible
    }
}

libros.push(new Libro('El libro interminable', 'Michael Ende', "Fantasía", true));
libros.push(new Libro('El hombre perdido', 'Jane Harper', "Crimen", false));
libros.push(new Libro('El socio', 'John Grisham', "Crimen", false));
libros.push(new Libro('Mis tres deseos', 'Barbara Delinsky', "Romance", true));
libros.push(new Libro('Toxina', 'Robin Cook', "Suspenso", false));
libros.push(new Libro('Finge que no la ves', 'Mary Higgins Clark', "Suspenso", true));

//Función para simular la lectura de datos, el callback indica que no se ejecuta hasta que la funcion como argumanto obtenga un valor o algo asi, se le pone argumento al callback porque digamos que le da los valores
function leerDatos(callback) {
  console.log("Simulando lectura del archivo JSON...");
  setTimeout(() => {
    callback(libros); 
  }, 2000); 
}

//Funcion para mostrar todos los libros en la lista
function mostrarLibros(arreglo){
  console.log("Lista de libros:");
  arreglo.forEach((libro, index) => {
    console.log(`Libro ${index + 1}
Título: ${libro._titulo}
Autor: ${libro._autor}
Género: ${libro._genero}
Disponible: ${libro._disponible ? "Disponible" : "En prestamo"}
    `);
  });
}

 function agregarLibro(nuevoLibro, callback) {
  console.log("Agregando libro...");
  setTimeout(() => {
    libros.push(nuevoLibro); // se agrega al array libros
    console.log(`Libro ${nuevoLibro._titulo} se agregó correctamente.`);
    callback(libros); // mostramos todos los libros con el callback
  }, 2000);
}

function actualizarDisponibilidad(titulo, nuevaDisponibilidad, callback) {
  console.log("Actualizando disponibilidad del libro...");

  setTimeout(() => {
    const libro = libros.find((lib) => lib._titulo === titulo);

    if (!libro) {
      console.log("Libro no encontrado.");
      return;
    }
    if (libro._disponible === nuevaDisponibilidad) {
      console.log(`El libro "${libro._titulo}" ya está marcado como ${nuevaDisponibilidad ? "disponible" : "en prestamo"}.`);
    } else {
      libro._disponible = nuevaDisponibilidad;
      console.log(`Estado actualizado para "${libro._titulo}". Ahora está ${nuevaDisponibilidad ? "disponible" : "en prestamo"}.`);
    }

    callback(libros); // Mostramos el nuevo estado de la colección
  }, 2000);
}

//CONSULTA DE INVENTARIO
leerDatos(mostrarLibros);

//AGREGAR UN LIBRO
const libroAdd1= new Libro("Y por eso rompimos", "Daniel Handler", "Romance", true);
agregarLibro(libroAdd1, mostrarLibros);

//ACTUALIZAR DISPONIBILIDAD
actualizarDisponibilidad('El socio', true, mostrarLibros);