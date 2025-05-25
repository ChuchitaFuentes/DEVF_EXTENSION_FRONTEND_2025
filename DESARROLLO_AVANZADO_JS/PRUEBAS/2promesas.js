function pedirPizza() {
  return new Promise((resolve, reject) => {
    console.log("Pediste una pizza. Esperando que llegue...");

    // Simulamos que tarda 3 segundos en llegar la pizza
    setTimeout(() => {
      const exito = true; // Cambia a false para probar el rechazo

      if (exito) {
        resolve("La pizza llegó 🍕"); // Promesa cumplida
      } else {
        reject("Hubo un problema con el pedido 😞"); // Promesa rechazada
      }
    }, 3000); // 3000 milisegundos = 3 segundos
  });
}

// Usamos la promesa
pedirPizza()
  .then(mensaje => {
    console.log("Éxito:", mensaje); // Si la promesa se cumplió
  })
  .catch(error => {
    console.error("Error:", error); // Si la promesa fue rechazada
  });

//EJEMPLO 2 con finally que es una accion que se ejecuta no importa el resultado

function pedirHelado() {
  return new Promise((resolve, reject) => {
    const exito = Math.random() > 0.5; // A veces sí, a veces no

    setTimeout(() => {
      if (exito) {
        resolve("🍦 Helado entregado");
      } else {
        reject("😭 No hay helado disponible");
      }
    }, 2000);
  });
}

pedirHelado()
  .then(mensaje => {
    console.log("✅ Éxito:", mensaje);
  })
  .catch(error => {
    console.error("❌ Error:", error);
  })
  .finally(() => {
    console.log("🕓 La operación terminó, éxito o error.");
  });