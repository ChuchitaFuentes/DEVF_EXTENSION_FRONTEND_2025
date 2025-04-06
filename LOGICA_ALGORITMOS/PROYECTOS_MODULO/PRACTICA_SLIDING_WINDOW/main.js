/*Encontrar la palabra más larga dentro de un texto*/

function palabraLarga(texto){
    let palabras = texto.split(' ');
    let palabraMasLarga = "";
    let palabraActual ="";
    let i = 0;
    while(i < palabras.length){
        palabraActual = palabras[i];
        if (palabraActual.length > palabraMasLarga.length){
            palabraMasLarga = palabraActual;
        }
        i++;   
    }
    return palabraMasLarga;
}

let pruebaTexto = "The world leader in GIS and NGMaps provide a world of interactive maps at nationalgeographic"

console.log(palabraLarga(pruebaTexto));