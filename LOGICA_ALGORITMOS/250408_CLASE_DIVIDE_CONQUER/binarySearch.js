let recursiveCounter = 0;
function binarySearch (array, target, low, high){
    //caso base
    if (low > high){
        return -1;
    }
    let mid = Math.floor((low + high) / 2);
    recursiveCounter++;
    console.log(`Iteración no.: ${recursiveCounter}`);

    if (array[mid] === target){
        return mid;
    }
    else if (array[mid] > target){
        return binarySearch (array, target, low, mid - 1);
    }
    else{
        return binarySearch (array, target, mid + 1, high)
    }
}

let arreglo = [22,23,26,28,35,37,89,75];
let objetivo = 89;
let menor = 0; //indice donde se inicia en el arreglo
let mayor = arreglo.length-1; //indice final del arreglo
console.log(binarySearch(arreglo,objetivo,menor,mayor));

//Hace menos pasos que si se usara un ciclo for, para recorrer el arreglo completo.