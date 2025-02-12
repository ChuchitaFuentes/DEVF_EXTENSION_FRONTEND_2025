let frutas = ['Manzana', 'Pera', 'Manzana', 'Pera', 'Naranja', 'Fresa', 'Fresa', 'Guayaba', 'Manzana'];
let categoriasFrutas=['Manzana', 'Pera', 'Naranja', 'Platano', 'Fresa','Guayaba'];
let numeroFrutas=[0,0,0,0,0,0];

for (let i=0; i < frutas.length; i++){
    for(let j=0; j < categoriasFrutas.length; j++){
        if (frutas[i]===categoriasFrutas [j]){
            numeroFrutas[j]++;
        }
    }
}

for (let i = 0; i < categoriasFrutas.length; i++){
    console.log(categoriasFrutas[i] + " : " + numeroFrutas[i]);
}