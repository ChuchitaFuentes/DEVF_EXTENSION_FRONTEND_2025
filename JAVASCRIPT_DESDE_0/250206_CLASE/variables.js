//Var es un forma antigua de declarar variables
var nombre = "Ana";

var nombre = "Fernanda";

var nombre = "Victor";

console.log(nombre);

// Let no permite redeclarar variables, lo que significa que no puedes declarar la misma variable dos veces.
//let tiene un scope de bloque, lo que significa que solo vive en el bloque donde fue decalraro. Un bloque es {}
let apellido = "Gutierrez";

let apellido2 = "López";

//let si permite cambiar el valor 

apellido = "Pérez";
console.log(apellido);

//const es una constante, no se puede reasignar el valor
const PI = 3.1416;

PI = 4; //esto no se puede hacer
