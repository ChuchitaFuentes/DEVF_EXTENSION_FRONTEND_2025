/*const suma = function(a,b){
    return a + b;
}*/
const suma = (a,b) => a + b;
//Las arrow function tienen las ventajas que puedes hacer las cosas en el mismo renglon la flecha es el equivalente a return
const generarMensajeSaludo = (nombre) =>"Hola, " + nombre;
console.log(suma(5,8));
console.log(generarMensajeSaludo("Diego"));

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newArray =array.map((item, index)=>{
    return item**item;
})
console.log(newArray); 

const forEachResult =newArray.forEach((item)=>{
    console.log(item);
})

console.log(forEachResult);

let nombre="Maria";

const pElements =array.map((item)=> `<h1>${item}</h1>`);
console.log(pElements);
const miDiv=document.querySelector(".mi-div");
pElements.forEach((element)=>{
    miDiv.insertAdjacentHTML("beforeend", element)
})

const options ={
    isEnable:true,
    time:15,
    code:"Aproved"
}

const { isEnable, time, code} =options;
console.log(isEnable, time, code);