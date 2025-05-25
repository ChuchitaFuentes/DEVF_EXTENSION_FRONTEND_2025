// Esta función es el ayudante que sirve el plato
function servirPlato(plato) {
  console.log("Sirviendo el plato: " + plato);
}

// Esta función es el chef que cocina y luego llama al ayudante (callback)
function cocinar(plato, callback) {
  console.log("Chef: Estoy cocinando " + plato);

  // Simulamos que cocinar tarda tiempo usando setTimeout (2 segundos)
  setTimeout(() => {
    console.log("Chef: Terminé de cocinar " + plato);

    // Aquí el chef llama al ayudante para que sirva el plato
    callback(plato);
  }, 2000);
}

// Llamamos a cocinar, pasando el plato y la función del ayudante como callback
cocinar("arroz con pollo", servirPlato);

//EJERCICIO 2

// Ayudante 1: sirve el plato rápido
function ayudanteRapido(plato) {
  console.log("Ayudante rápido sirve: " + plato);
}

// Ayudante 2: sirve el plato con cuidado
function ayudanteCuidadoso(plato) {
  console.log("Ayudante cuidadoso sirve: " + plato);
}

// Función que simula cocinar y llama a la función que recibe como callback
function cocinar(plato, quienSirve) {
  console.log("Cocinando " + plato);

  setTimeout(() => {
    console.log("Terminé de cocinar " + plato);

    // Aquí se llama a la función que nos pasaron (que puede ser cualquiera de los ayudantes)
    quienSirve(plato);
  }, 1500);
}

// Aquí decidimos qué ayudante queremos usar
cocinar("pasta", ayudanteRapido);
cocinar("ensalada", ayudanteCuidadoso);

//EJEMPLO 3 Encadenamiento de los callbacks

function cocinar(plato, callback) {
  console.log("Cocinando " + plato);
  setTimeout(() => {
    console.log("Terminé de cocinar " + plato);
    callback(plato);
  }, 1000);
}

function servir(plato, callback) {
  console.log("Sirviendo " + plato);
  setTimeout(() => {
    console.log("Plato servido: " + plato);
    callback(plato);
  }, 1000);
}

function llevarAlCliente(plato) {
  console.log("Llevando el plato al cliente: " + plato);
}

// Empezamos la cadena
cocinar("paella", (plato) => {  servir(plato, (plato) => {    llevarAlCliente(plato);  });
});