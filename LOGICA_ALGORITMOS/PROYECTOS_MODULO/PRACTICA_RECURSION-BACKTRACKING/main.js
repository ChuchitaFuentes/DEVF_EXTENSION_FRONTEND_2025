
function encontrarRegalo(arrRegalos, nombreRegalo, index = 0, contadorRegalos = 0, posiciones=[]){
    if (index >= arrRegalos.length){
        if (contadorRegalos>0){
            return `Se encontro el regalo ${nombreRegalo} existen ${contadorRegalos} en las posiciones: ${posiciones}`;
        }
        else{
            return `No se encontro ${nombreRegalo}`
        }
    }

    if (arrRegalos[index] === nombreRegalo){
        contadorRegalos++;
        posiciones.push(index);
    }
    return encontrarRegalo(arrRegalos, nombreRegalo, index + 1, contadorRegalos, posiciones);
}

const regalos  = "Muñeca, Carro, Camión, Rompecabezas, Pelota, Bicicleta, Pelota, Pelota";
const listaRegalos = regalos.split(', ');
console.log(encontrarRegalo(listaRegalos,"Muñeca"));