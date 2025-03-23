// viajes.js
// Array para guardar los destinos
const destinos = [];
const costosPorDestino = {
    "Paris": 500,
    "Londres": 400,
    "New York": 600
};
const costosPorTransporte = {
    "Avión": 200,
    "Tren": 100
};
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

        if (costosPorDestino[destino] !== undefined) {
            costoBase += costosPorDestino[destino];
        } else {
            console.log(`Destino "${destino}" no encontrado.`);
        }

        if (costosPorTransporte[transporte] !== undefined) {
            const costoTransporte = costosPorTransporte[transporte];
            costoBase += costoTransporte;
        } else {
            console.log(`Transporte "${transporte}" no encontrado.`);
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