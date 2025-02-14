//Funciones
//Palabra reservada funcion + nombre de la funcion+ parámetros
/*
function Sumar(numero1, numero2){ 
    let total = 1 + 2;
    return total;
}
//LLamada a mi funcion
let resultado = Sumar(10,10);

//Return nos permite 
console.log(resultado);

console.log(Sumar(12,20));

Sumar(2,3); // Se ejecuta pero no se imprime nada

function Saludar (nombre){
    console.log("Hola, bienvenido/a  " + nombre); //Concatenar

}

Saludar ("Carolina");
Saludar ("Monserrat");

console.log(Sumar(2,3));

function Restar(a,b){
    let total=a-b;
    console.log(total); //Con conslole.log solo se imprime en la consola
}
console.log(Restar(13,3));
//No se guarda el resultado en una variable
*/
//ME PERDI REVISAR CODIGO DE ARRIBA

function Casita(){ //No recibe parámetros
    let nombre1="Maria";
    let apellido="Fuentes";
    console.log("Esta es una casita");

}
Casita();
//console.log(nombre1); //No se puede acceder porque esta dentro de una funcion 
//Scope de bloque

let nombre = "Maria";
let edad = 26;
let ciudad = "Tulancingo";

//Actualizacion de ES6 en 2015 permite escribir muchas cosas juntas se ve la diferencia en estos dos enunciados
console.log("Ella se llama " + nombre + "tiene" + edad + "años de edad y vive en " + ciudad);
console.log(`Ella se llama ${nombre} tiene ${edad} años de edad y vive en ${ciudad}`); 

//Pedir datos en una ventana emergente en el navegador está direccionada con el archivo index.html de esta carpeta
//Estos datos que se piden al usuario los datos se guardan como string por lo que se tienen que convertir
let gatos = prompt("¿Cuantos gatos tienes?");
let perros = prompt("¿Cuantos perros tienes?");
//parseInt or Number para convertir, no hacen la misma funcion parseInt solo convierte en enteros, en cambio el Number si respeta los decimales
let total=parseInt(perros)+parseInt(gatos);
//Estos datos se ven en consola
console.log(`Tienes ${gatos} gatos y tienes ${perros} perros`);
//Vemos los datos en un pop up
alert(`Tienes ${gatos} gatos y tienes ${perros} perros`);
//Vemos los datos en la pantalla
document.write(`Tienes ${gatos} gatos y tienes ${perros} perros`);
document.write(`Tienes ${total} mascotas en total`)