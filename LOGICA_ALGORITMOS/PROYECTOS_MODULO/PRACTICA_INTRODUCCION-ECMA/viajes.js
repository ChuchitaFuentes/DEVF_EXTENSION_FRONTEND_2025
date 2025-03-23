// viajes.js
// Array para guardar los destinos
const destinos = [];

class Viaje {
    constructor(destino, fecha, transporte) {
        this.destino = destino,
            this.fecha = fecha,
            this.transporte = transporte,
            this.costo = this.calcularCosto(destino, transporte);
        destinos.push(this);
    }

    // Función para calcular el costo del viaje
    calcularCosto(destino, transporte) {
        let costoBase = 0;
        // Costo base por destino
        if (destino === "Paris") {
            costoBase = 500;
        } else if (destino === "Londres") {
            costoBase = 400;
        } else if (destino === "New York") {
            costoBase = 600;
        }

        // Costo adicional por tipo de transporte
        if (transporte === "Avión") {
            costoBase += 200;
        } else if (transporte === "Tren") {
            costoBase += 100;
        }

        return costoBase;
    }

}
// Función para mostrar el itinerario de los viajes registrados
function mostrarItinerario() {
    console.log("ITINERARIO DE VIAJES");
    let contadorViajes = destinos.length;
    console.log(`Número de viajes programados: ${contadorViajes}`);
    // TODO: Recorrer el arreglo de destinos y mostrar la información de cada uno
    destinos.forEach((viaje, index) => {
        console.log("---------------------------");
        console.log(`Viaje: ${index + 1}`);
        console.log(`Destino: ${viaje.destino}`);
        console.log(`Fecha: ${viaje.fecha}`);
        console.log(`Transporte: ${viaje.transporte}`);
        console.log(`Costo: ${viaje.costo}`);
        console.log("---------------------------");
    });
}
export { Viaje, mostrarItinerario };