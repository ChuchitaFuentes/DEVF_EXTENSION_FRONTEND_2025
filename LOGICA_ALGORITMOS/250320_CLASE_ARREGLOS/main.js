//Diferencia entre declarar un arreglo con const para mantener la inmutabilidad  y con let
const numbers = [9,3, 5, 6, 7, 2];
//console.log(numbers);
numbers.sort(); //Ordena el arreglo
//console.log(numbers);
//const no se puede reasignar, sin embargo a través de un méodo como .sort se reasignaría, sin embargo si se quiere modificar es mejor declarar otro arreglo y hacer una copia del arreglo
const copyOfNumbers=Array.from(numbers); //Es igual al de abajo
const copyOfNumbers2=[...numbers];
console.log(copyOfNumbers2);
/*Buscar en google "bubble sort js"

 El Bubble Sort es un algoritmo de ordenamiento simple pero ineficiente para grandes conjuntos de datos. Funciona comparando pares de elementos adyacentes y los intercambia si están en el orden incorrecto. Este proceso se repite hasta que la lista está ordenada. 

const bubbleSort = (arr) => {
    let n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Intercambio de elementos usando destructuring
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        n--; // Reducimos el rango porque el último ya está en su lugar
    } while (swapped);

    return arr;
};

console.log(bubbleSort(numbers));*/

//Let me puede reasignar el arreglo, no es tan recomendable declararlo de este modo, para que puedan permanecer inmutables, sin embargo puede depender del tipo de lógica, en este caso incluso cambia el tipo de variable que tiene el arreglo.
let nombres = ["Diego", "Ana", "Lupita"];
console.log(nombres);

nombres = [true, false, false, true];
console.log(nombres);

//Acceder a los elementos de un arreglo

for(let i = 0; i <nombres.length; i++){
    console.log(nombres[i]);
}

for(let nombre of nombres){
    console.log(nombre);
}

/*DIFERENCIA ENTRE LOS MÉTODOS Y LOS ARREGLOS:
Una función es un bloque de código reutilizable que puede estar dentro o fuera de un objeto.
Un método es una función dentro de un objeto o clase y puede usar this.
Los métodos se llaman con objeto.metodo(), mientras que las funciones se llaman solas funcion().
*/
//EJEMPLO DE UNA FUNCION
function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

// Función flecha
const despedir = (nombre) => `Adiós, ${nombre}!`;

console.log(saludar("Carlos"));  // "Hola, Carlos!"
console.log(despedir("Ana"));    // "Adiós, Ana!"

//EJEMPLO DE UN MÉTODO esto es un método personalizado
const persona = {
    nombre: "Juan",
    edad: 30,
    // Método dentro del objeto
    presentar() {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
    }
};

console.log(persona.presentar()); // "Hola, soy Juan y tengo 30 años."

//METODOS DE OBJETO
const obj = { 
    a: 1, 
    b: 2, 
    c: 3 
};

console.log(Object.keys(obj));   // ["a", "b", "c"] - Obtiene las claves del objeto
console.log(Object.values(obj)); // [1, 2, 3] - Obtiene los valores del objeto
console.log(Object.entries(obj)); // [["a",1], ["b",2], ["c",3]] - Claves y valores en pares

//METODOS DE ARREGLOS
const numeros = [1, 2, 3, 4, 5];

// Método push (agrega un elemento al final)
numeros.push(6);
console.log(numeros); // [1, 2, 3, 4, 5, 6]

// Método pop (elimina el último elemento)
numeros.pop();
console.log(numeros); // [1, 2, 3, 4, 5]

// Método map (crea un nuevo array transformando cada elemento)
const duplicados = numeros.map(num => num * 2);
console.log(duplicados); // [2, 4, 6, 8, 10]

//METODOS DE STRING
const texto = "Hola, mundo";

// Método toUpperCase (convierte a mayúsculas)
console.log(texto.toUpperCase()); // "HOLA, MUNDO"

// Método replace (reemplaza un valor)
console.log(texto.replace("mundo", "JavaScript")); // "Hola, JavaScript"

// Método split (convierte el string en un array)
console.log(texto.split(", ")); // ["Hola", "mundo"]

//METODOS DE MATH
console.log(Math.round(4.7)); // 5 (redondea al entero más cercano)
console.log(Math.floor(4.7)); // 4 (redondea hacia abajo)
console.log(Math.ceil(4.3)); // 5 (redondea hacia arriba)
console.log(Math.random()); // Número aleatorio entre 0 y 1
console.log(Math.max(10, 20, 5)); // 20 (máximo valor)
console.log(Math.min(10, 20, 5)); // 5 (mínimo valor)

//METODOS DE DATE
const fecha = new Date();

console.log(fecha.getFullYear()); // Año actual
console.log(fecha.getMonth() + 1); // Mes actual (0-indexado, por eso sumamos 1)
console.log(fecha.toDateString()); // Representación legible de la fecha

//REVISAR LOS PROTOTIPOS EN LOS OBJETOS**

//--------------------------------ARRAYS---------------------------------------------

const frutas =["manzana", "pera", "mango"];

//1.MÉTODOS QUE MODIFICAN EL ARREGLO ORIGINAL-------------------------------------


// push() - Agregar un elemento al final
frutas.push("uva");
console.log(frutas); // ["manzana", "pera", "mango", "uva"]

// pop() - Eliminar el último elemento
frutas.pop();
console.log(frutas); // ["manzana", "pera", "mango"]

// unshift() - Agregar un elemento al inicio
frutas.unshift("kiwi");
console.log(frutas); // ["kiwi", "manzana", "pera", "mango"]

// shift() - Eliminar el primer elemento
frutas.shift();
console.log(frutas); // ["manzana", "pera", "mango"]

// splice() - Reemplazar un elemento en una posición específica
frutas.splice(1, 1, "durazno");
console.log(frutas); // ["manzana", "durazno", "mango"]

// reverse() - Invertir el orden del array
frutas.reverse();
console.log(frutas); // ["mango", "durazno", "manzana"]

// sort() - Ordenar el array alfabéticamente
frutas.sort();
console.log(frutas); // ["durazno", "manzana", "mango"]

//2. METODOS QUE NO MODIFICAN EL ARRAY ORIGINAL DEVUELVEN UNO NUEVO-----------------------------

// map() - Crear un nuevo array transformando cada elemento
const mayusculas = frutas.map(fruta => fruta.toUpperCase());
console.log(mayusculas); // ["MANZANA", "PERA", "MANGO"]

// filter() - Filtrar elementos según una condición
const conM = frutas.filter(fruta => fruta.startsWith("m"));
console.log(conM); // ["manzana", "mango"]

// slice() - Extraer parte del array sin modificarlo
const nuevasFrutas = frutas.slice(0, 2);
console.log(nuevasFrutas); // ["manzana", "pera"]

// concat() - Unir dos arrays en uno nuevo
const nuevas = frutas.concat(["fresa", "sandía"]);
console.log(nuevas); // ["manzana", "pera", "mango", "fresa", "sandía"]

// 3. MÉTODOS PARA BUSCAR EN EL ARRAY------------------------------------------------
// indexOf() - Obtener la posición de un elemento
console.log(frutas.indexOf("pera")); // 1

// includes() - Verificar si un elemento existe
console.log(frutas.includes("mango")); // true

// find() - Buscar el primer elemento que cumpla una condición
console.log(frutas.find(fruta => fruta.length > 5)); // "manzana"

// findIndex() - Obtener la posición del primer elemento que cumple la condición
console.log(frutas.findIndex(fruta => fruta.length > 5)); // 0

//4. MÉTODOS PARA RECORRER EL ARRAY-------------------------------------------------

// forEach() - Ejecutar una función en cada elemento
frutas.forEach(fruta => console.log(fruta));

// some() - Verificar si **al menos un** elemento cumple la condición
console.log(frutas.some(fruta => fruta.length > 6)); // true

// every() - Verificar si **todos** los elementos cumplen la condición
console.log(frutas.every(fruta => fruta.length > 3)); // true

//MÉTODOS PARA REDUCIR LOS VALORES DEL ARRAY A UNO SOLO-------------------------------
// reduce() - Acumular valores en una variable
const totalLetras = frutas.reduce((acumulador, fruta) => acumulador + fruta.length, 0);
console.log(totalLetras); // 17 (suma de los caracteres)

// join() - Unir los elementos en un string
console.log(frutas.join(" - ")); // "manzana - pera - mango"

//--------------------------EJEMPLOS EN CLASE-----------------------------------------------------
const numbers2 =[1,3,6,8];
const miFrutaFavorita = frutas.find((element)=>element==="mango")
console.log(miFrutaFavorita);

