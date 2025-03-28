function encontrarPar (arr, objetivo){
    let izquierda = 0;
    let derecha = arr.length -1;
     while (izquierda <derecha){
        let suma = arr[izquierda] + arr[derecha];
        if(suma === objetivo){
            return [arr[izquierda], arr[derecha]];
        }
        else if (suma < objetivo){
            izquierda++;
        }
        else {
            derecha--;
        }
     }
     return null;
}


let arr = [2,7,11,15];
let objetivo = 9;

let ejemplo = encontrarPar(arr,objetivo);

console.log(ejemplo);

function improvedTwoSum(arr,target){
    let left = 0;
    let right = arr.length - 1;
    let counter = 0;

    while(left < right){
        let result =arr[left] + arr [right];
        if(result === target){
            return [arr[left], arr[right]];
        }
        counter++;
        if (counter % 2 === 0){
            right--;
        }
        else{
            left++;
        }
    }
    return null;
}

let newArr = [2,15,11,7,8,10,44];
let target = 9;
let improvedResult = improvedTwoSum(newArr, target);
console.log(improvedResult)