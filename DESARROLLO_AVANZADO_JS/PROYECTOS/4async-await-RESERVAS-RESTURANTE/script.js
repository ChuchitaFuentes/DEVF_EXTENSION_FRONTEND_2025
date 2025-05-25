let mesasDisponibles = 5;  // Número de mesas disponibles para reservar

// Función que simula la verificación de disponibilidad de mesas
function verificarDisponibilidad(mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mesasSolicitadas<=mesasDisponibles){
        resolve(`Tu reservación de ${mesasSolicitadas} mesas solicitadas ha sido exitosa.`)
      }
      else{
        reject(`Lo sentimos actualmente solo contamos con ${mesasDisponibles}. Reservación fallida.`)
      }
    }, 2000);  // Simula un retraso en la verificación (2 segundos)
  });
}

// Función que simula el envío de un correo de confirmación
function enviarConfirmacionReserva(nombreCliente) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exitoEnvio = Math.random() > 0.3; // 70% exito
      if (exitoEnvio){
        resolve(`Se envió un correo de confirmación de tu reservación a nombre de ${nombreCliente}`)
      }
      else {
        reject(`Error al enviar el correo de confirmación a ${nombreCliente}`)
      }
    }, 1500);  // Simula el envío de un correo (1.5 segundos)
  });
}

// Función principal para manejar una reserva Async Await
async function hacerReserva(nombreCliente, mesasSolicitadas) {
  try {
    console.log("Procesando reservación...");
    const disponibilidad = await verificarDisponibilidad(mesasSolicitadas);  // Llama a la función de verificación
    console.log(disponibilidad);
    const envioCorreo = await enviarConfirmacionReserva(nombreCliente);
    console.log(envioCorreo);
    mesasDisponibles -= mesasSolicitadas;
    console.log(`${mesasDisponibles} mesas todavía disponibles`)
    }
  catch (error) {
    console.log("Error:", error);  // Maneja los errores en la promesa
  }
}

hacerReserva("Alejandro Rosales", 2);