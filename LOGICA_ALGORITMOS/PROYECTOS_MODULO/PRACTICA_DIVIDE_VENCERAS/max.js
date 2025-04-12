function Max (Array, startIndex=0, lastIndex = Array.length-1) {
    if (startIndex === lastIndex){
        return Array[startIndex];
    }

        let mid = Math.floor((startIndex + lastIndex)/2);
        let leftMax = Max (Array, startIndex, mid);
        let rightMax = Max (Array, mid + 1, lastIndex);

        return  Math.max(leftMax,rightMax);
     
}

let arreglo = [108,99,22,13,1,6000];

console.log(Max(arreglo));