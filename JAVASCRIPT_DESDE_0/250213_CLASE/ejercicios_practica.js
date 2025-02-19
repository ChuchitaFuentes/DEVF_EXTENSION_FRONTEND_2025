function areaCirculo(radio) {
    return 3.1416*radio*radio;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function areaRectangulo(base,altura) {
    return base*altura;
}

function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function esPar(numero) {
    if (numero % 2 === 0){
        console.log("El número es PAR");
    }
    else{
        console.log("El número es IMPAR")
    }
}
let numeroprueba=5;

areaCirculo(numeroprueba);
areaTriangulo(numeroprueba);
areaRectangulo(numeroprueba);
celsiusAFahrenheit(numeroprueba);
esPar(numeroprueba);