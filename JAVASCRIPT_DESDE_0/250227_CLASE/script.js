document.addEventListener('DOMContentLoaded', () =>{
    //Obtencion de elementos del DOMV por su ID de las secciones
    const inicio = document.getElementById('inicio');
    const productos = document.getElementById('productos');
    const contacto= document.getElementById('contacto');

    //Obtencion de elementos del DOM por su ID del menu de navegación
    const menuInicio = document.getElementById('menu-inicio');
    const menuProductos = document.getElementById('menu-productos');
    const menuContacto= document.getElementById('menu-contacto');

    //Obtencion de elementos del DOM  para el carrito de compras
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total-carrito');
    let total =0; //Variable para almacenar el total del carrito

    //Obtencion de los elementos del DOM para el formulario
    const formularioContacto =document.getElementById('formulario-contacto');
    const mensajeEnviado =document.getElementById('mensaje-enviado');

// Evento para mostrar la seccion de inicio y ocultar las demás
    menuInicio.addEventListener('click',(e) =>{
    e.preventDefault(); //Evitar un comportamiento por defecto
    inicio.style.display = 'block'; //Mostrar
    productos.style.display = 'none'; //Ocultar
    contacto.style.display = 'none'; //Ocultar
});
menuProductos.addEventListener('click',(e) =>{
    e.preventDefault(); //Evitar un comportamiento por defecto
    inicio.style.display = 'none';
    productos.style.display = 'block';
    contacto.style.display = 'none';
});

menuContacto.addEventListener('click',(e) =>{
    e.preventDefault(); //Evitar un comportamiento por defecto
    inicio.style.display = 'none';
    productos.style.display = 'none';
    contacto.style.display = 'block';
});


//Evento para agregar productos al carrito
productos.addEventListener('click', (e)=>{
if(e.target.classList.contains('agregar-carrito')){
    const nombre = e.target.dataset.nombre; //Obtiene el nombre del producto
    const precio =  parseInt(e.target.dataset.precio); //Obtiene el precio del producto

    const nuevoItem = document.createElement('li');
    nuevoItem.textContent=`${nombre}-${precio}`;
    listaCarrito.appendChild(nuevoItem);

    total+=precio; //Suma el precio de los productos
    console.log(total);
    actualizarTotalCarrito(); //Actualiza el total del carrio
}
//target: es una propiedad que despliega el elemento que desencadenó
//classlist: Nos permite acceder a las clases de un elemento
});
 
//Ejemplo de queryselector para manipular el total de carrito
const totalElemento = document.querySelector('#total-carrito');
function actualizarTotalCarrito(){
    totalElemento.textContent = total;
}

//Titulo del carrito con querySelector
const tituloCarrito = document.querySelector('#carrito h2');
tituloCarrito.textContent ='Sus pasteles:';

//Simular envio de formulario
formularioContacto.addEventListener('submit', function(event){
    event.preventDefault();//Evitar el comportamiento por defecto del submit
    formularioContacto.style.display='none';
    mensajeEnviado.style.display='block';
});

//Ejemplo con querySelector para mostrar el precio del producto
productos.addEventListener('mouseover',(e) =>{
    if (e.target.classList.contains('producto')) {
        const precio = e.target.querySelector('.agregar-carrito').dataset.precio; //Encuentra el precio dentro del producto del boton
        e.target.setAtribute('title,`Precio: $${precio`'); //Lo muestra como tooltip
    }
});
});



