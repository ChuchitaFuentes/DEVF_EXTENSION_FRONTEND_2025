/*
let verduras = ['Lechuga', 'Tomate', 'Cebolla', 'Jitomate', 'Papa', 'Pimiento']; //Arreglo con datos

console.log(verduras[2]);
console.log(verduras.length);

console.log("Imprimiento verduras con ciclo for")
for (let i = 0; i < verduras.length ; i++){
    console.log(verduras[i]);
}
*/
let personas = []; //Este es un arreglo vacío

//push: agrega un elemento al final del arreglo
personas.push('Ana');
personas.push('Diego');
personas.push('Liset');
personas.push('Marcela');
console.log(personas);

// pop: elimina el ultimo elemento del arreglo
personas.pop();
console.log(personas);

//unshift: agrega un elemento al inicio del arreglo
personas.unshift('Alex');
personas.unshift('Yolanda');
console.log(personas);

//shift: elimina el primer elemento del arreglo
personas.shift();
console.log(personas);

// imprime el elemento con el indice 2 en el arreglo
console.log(personas[2]);