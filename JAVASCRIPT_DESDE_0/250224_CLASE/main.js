function cambiarTexto(){
    let titulo=document.getElementById("titulo");
    titulo.textContent = "Hola desde el DOM";
}

function cambiarColor(){
    let parrafos = document.getElementsByClassName("texto")
    for (let i=0; i<parrafos.length; i++){
        parrafos[i].style.color = "blue";
    }
}
/*Selecciona todos los elementos con la clase texto y luego usamos un bucle para cambiar de color todos los parrafos seleccionados*/

function ocultarParrafo(){
    let segundoParrafo = document.getElementsByTagName("p")[4];
    segundoParrafo.style.display = "none";
}