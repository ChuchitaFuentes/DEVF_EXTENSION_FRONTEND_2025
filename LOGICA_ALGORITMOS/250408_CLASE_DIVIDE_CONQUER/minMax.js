function MinMax (Array, startIndex, lastIndex) {
    if (startIndex == lastIndex){
        return [Array[startIndex], Array[startIndex]];
    }

     if ((lastIndex-startIndex) == 1){
        if (Array[startIndex] > Array[lastIndex]){
            return [Array[lastIndex], Array[startIndex]]
        }
        else {
            return [Array[startIndex], Array[lastIndex]]
        }
     }
     else {
        let mid = Math.floor((startIndex + lastIndex)/2);
        let [leftMin, leftMax] = MinMax (Array, startIndex, mid);
        let [rightMin, rightMax] = MinMax (Array, mid + 1, lastIndex);

        return [Math.min(leftMin, rightMin), Math.max(leftMax,rightMax)];
     }
}

let arreglo = [109,44,3,22,400,12,10,1,0];
let menor = 0; //indice donde se inicia en el arreglo
let mayor = arreglo.length-1; //indice final del arreglo
console.log(MinMax(arreglo,menor,mayor));