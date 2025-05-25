//OBTENER ELEMENTOS DEL DOM
const fetchBtn = document.getElementById("fetch-btn");
const axiosBtn = document.getElementById("axios-btn");
const dataContainer = document.getElementById("data-container");

//FUNCIONES DE SOLICITUD
function obtenerConFetch() {
  console.log("Cargando con Fetch...");
    dataContainer.innerHTML = "<h2>Cargando personajes...</h2>";

  fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json()) // convierte a objeto
    .then(data => {
      dataContainer.innerHTML = ""; // limpiamos
      mostrarPersonajes(data.results); // usamos los personajes
    })
    .catch(err => {
      dataContainer.innerHTML = "<h2>Error al cargar datos</h2>";
      console.error("Error al usar fetch:", err);
    });
}

function obtenerConAxios() {
  console.log("Cargando con Axios...");
  dataContainer.innerHTML = "<h2>Cargando personajes...</h2>";
  
  axios.get("https://rickandmortyapi.com/api/character")
    .then(respuesta => {
      dataContainer.innerHTML = "";
      mostrarPersonajes(respuesta.data.results);
    })
    .catch(error => {
      dataContainer.innerHTML = "<h2>Error al cargar los datos con Axios</h2>";
      console.error("Error con Axios:", error);
    });
}

//FUNCION PARA MOSTRAR PERSONAJES
function mostrarPersonajes(personajes) {
  personajes.forEach(personaje => {
    const div = document.createElement("div");
    div.setAttribute('class', 'contenedor-individual')
    div.innerHTML = `<h3>${personaje.name}</h3><img src="${personaje.image}" alt="${personaje.name}" width="150">
    `;
    dataContainer.appendChild(div);
  });
}

//DECLARACION DE EVENTOS CON LOS BOTONES
fetchBtn.addEventListener("click", obtenerConFetch);
axiosBtn.addEventListener("click", obtenerConAxios);