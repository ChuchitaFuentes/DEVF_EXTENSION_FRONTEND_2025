class Publicacion{
    constructor(nombre, ocupacion, tipoComentario, comentario){
        this._nombre = nombre;
        this._ocupacion = ocupacion;
        this._tipoComentario = tipoComentario;
        this._comentario = comentario;
        
    }
    mostrarInfo(){
        let descripcion=`Me llamo ${this._nombre}, soy ${this._ocupacion}, tengo una ${this._tipoComentario}: ${this._comentario}`;
        return descripcion; 
    }
    seleccionIcono(){
        let icono="";
        if (this._tipoComentario == 'pregunta'){
            icono="❔";
        }
        else{
            icono="🗨️"
        }
        return `${icono}`;    
    }
    publicacionFecha(){
        let obtenerDatos = new Date();
        let fecha=obtenerDatos.toLocaleDateString();
        let hora=obtenerDatos.toLocaleTimeString();
        return `${fecha} ${hora}`;
    }
}


//Capturamos el formulario del DOM

const formulario = document.getElementById("formComentario");
const comentarios = document.getElementById("comentarios");


formulario.addEventListener("submit", function(event){
    event.preventDefault();

const nombre = document.getElementById("nombre").value;

const ocupacion = document.querySelector('input[name="ocupacion"]:checked').value;

const tipoComentario = document.querySelector('input[name="tipoComentario"]:checked').value;

const comentario = document.getElementById("comentario").value;

const tagsSeleccionados = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(tag => tag.value);

const nuevoComentario = new Publicacion(nombre, ocupacion, tipoComentario, comentario);
const div=document.createElement('div');
div.className='tarjeta-comentario';

const titulo=document.createElement('h2');
titulo.className='icono';
titulo.textContent=nuevoComentario.seleccionIcono();

const parrafo=document.createElement('p');
parrafo.className='parrafo-informacion';
parrafo.textContent=nuevoComentario.mostrarInfo();

const date=document.createElement('p');
date.className='parrafo-fecha';
date.textContent=nuevoComentario.publicacionFecha();

const contenedorEtiquetas=document.createElement('ul');
contenedorEtiquetas.className='contenedor-etiquetas';

tagsSeleccionados.forEach(item => {
    const li = document.createElement("li"); 
    li.textContent = '🔗'+ item; 
    li.className='etiqueta-tag'
    contenedorEtiquetas.appendChild(li);
  });

const boton=document.createElement('button');
boton.className='boton-eliminar';
boton.textContent='✖️';
boton.onclick =function(){
    div.remove();
}

div.appendChild(titulo);
div.appendChild(parrafo);
div.appendChild(date);
div.appendChild(contenedorEtiquetas);
div.appendChild(boton);


comentarios.insertAdjacentElement('afterbegin',div);

formulario.reset();

});
