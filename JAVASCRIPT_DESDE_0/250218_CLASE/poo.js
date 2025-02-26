//1. Abstraccion: Definir una clase, es practicamente una plantilla, en este caso de un figura geométrica.
class Figura {
  constructor(color) {
    //El método constructor se asegura de que los objetos tengan las propiedades necesarias para funcionar.
    this.color = color;
  }
  //Métodos: son las acciones que puede realizar un objeto
  calcularArea(){
    throw new Error ("El método no ha sido implementado.")
  }

  obtenerColor(){
    return this.color;
  }

  miNombre(){
    return "Hola soy una figura";
  }
}
//2. Herencia: Creamos subclases específicas (a partir de la clase padre).

class Circulo extends Figura{
    constructor(color, radio){
        super(color); //super es la palabra que se ocupa para tomar de la clase padre el color
        this.radio = radio; //this funciona para darle un tipo indice al valor, para que sea unico para cada calculo por decirlo así
    }
    calcularArea(){
        return Math.PI = this.radio * this.radio;
    }
}

class Rectangulo extends Figura{
    constructor (color, base, altura){
        super(color);
        this.base = base;
        this.altura = altura;
    }
    calcularArea(){
        return this.base * this.altura;
    }
}

// 3.Crear mis objetos (instanciar)

const miCirculo = new Circulo("Morado", 14);
const miRectangulo = new Rectangulo("Verde", 12, 6);
const miTriangulo = new Triangulo ("Rosa", 10, 3);

console.log("Color del círculo:", miCirculo.obtenerColor());
console.log("Color del rectángulo:", miRectangulo.obtenerColor());
console.log("Rectangulo dice:", miRectangulo.miNombre());

// 4. Polimorfismo Un objeto puede hacer el mismo trabajo de forma diferente
function mostrarArea(figura){
    console.log(figura.calcularArea());
}

mostrarArea(miCirculo);
mostrarArea(miRectangulo);
mostrarArea(miTriangulo);