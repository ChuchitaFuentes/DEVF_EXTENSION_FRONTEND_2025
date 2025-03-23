// app.js
import { Viaje, mostrarItinerario} from './viajes.js';  


// Iniciar la aplicación
function iniciarApp() {
    // Ejemplo de cómo registrar destinos
    new Viaje("Paris", "2024-06-15", "Avión");
    new Viaje("Londres", "2024-07-01", "Tren");

    // Mostrar el itinerario de los viajes
    mostrarItinerario();
}

// Ejecutar la aplicación
iniciarApp();
