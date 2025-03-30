const invitados = ["Zaira", "Verónica", "Alejandro", "Kike", "Jorge", "Zaid", "María"];

function encontrarPareja(arr){
    let arregloOrdenado = arr.sort()
    let izquierda = 0; 
    let derecha = 1;   

     while (izquierda < arregloOrdenado.length-1) {
        const inicialIzquierda = arregloOrdenado[izquierda][0];
        const inicialDerecha = arregloOrdenado[derecha][0];

        
        if (inicialIzquierda === inicialDerecha) {
            return [arregloOrdenado[izquierda], arregloOrdenado[derecha]];
        }

        else {
            izquierda++;
        }
        if (izquierda === derecha) {
            derecha++; 
        }
    }

    return null; 
}
    
console.log(encontrarPareja(invitados));