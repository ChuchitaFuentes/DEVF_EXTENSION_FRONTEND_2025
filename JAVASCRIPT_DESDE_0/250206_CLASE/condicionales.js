// Tipos de mascota = Gato, Perro, Hamster
// Condicionales (Jaula mediana, Jaula grande, Jaula pequeña)

let tipoDeMascota = "";

if(tipoDeMascota==="Perro"){
    console.log("Si tienes un perro, necesitas la jaula grande.");
} else if (tipoDeMascota === "Gato"){
    console.log("Si tienes un gato, necesitas la jaula mediana.");
} else if (tipoDeMascota === "Hamster"){
    console.log("Si tienes un hamster, necesitas la jaula pequeña.");
} else{
    console.log("No contamos con jaulas para esa mascota o dejaste en blanco la respuesta");
}

// Semaforo color = Rojo, Amarillo, Verde
//Rojo=Alto, Amarillo =Dentente, Verde=Siga

let colorSemaforo = "Verde";

if(colorSemaforo==="Rojo"){
    console.log("Alto");
} else if (colorSemaforo === "Amarillo"){
    console.log("Precaución");
} else if (colorSemaforo === "Verde"){
    console.log("Siga");
} else{
    console.log("El semáforo está descompuesto! Ahh!");
}

let edad =20;
let tieneLicencia=true;

if (edad>=18 && tieneLicencia){
    console.log("Puedes conducir");
} else{
    console.log("No puedes conducir");
}

let creditos=9;
let promedio=8;

if (creditos>=10 && promedio>=8.5){
    console.log("Tienes derecho a una beca");
} else{
    console.log("No tienes derecho a una beca");
    if(creditos<10 && promedio>=8.5){
        console.log("Te hacen falta creditos");
    } else if(creditos>=10 && promedio<=8.5){
        console.log("Tu promedio debe subir");
    } else{
        console.log("Tienes que tener mas creditos y subir tu promedio");
    }
}