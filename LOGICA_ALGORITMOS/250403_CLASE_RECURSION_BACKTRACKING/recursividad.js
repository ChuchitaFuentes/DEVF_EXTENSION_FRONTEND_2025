function factorial(n){
    debugger;
    if (n < 1){
        return 1;
    }
    return n * factorial(n-1);
}

let totalFactorial = factorial(5);

console.log(totalFactorial);