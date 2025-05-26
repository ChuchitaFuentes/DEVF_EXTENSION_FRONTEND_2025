const form = document.getElementById("formRegistro");


async function validarDatos(e) {
    //Previene el envio inicial del formualiro
    e.preventDefault();
    //Trim es para quitar espacios en blanco, aqui se obtienen los valores del DOM
    const telefono = document.getElementById("telefono").value.trim();
    const fecha = document.getElementById("fecha");
    const intereses = document.querySelectorAll('#intereses input[type="checkbox"]:checked');

    // Validar teléfono: solo números y exactamente 10 dígitos
    const telefonoValido = /^\d{10}$/.test(telefono);
    if (!telefonoValido) {
        alert("El número de teléfono debe tener exactamente 10 dígitos y no contener letras.");
        return;
    }

    // Validar que al menos un checkbox esté marcado
    if (intereses.length === 0) {
        alert("Por favor selecciona al menos un interés.");
        return;
    }

    //Validar la fecha posterior a hoy
    const fechaSeleccionada = new Date(fecha.value);
    
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    if (fechaSeleccionada <= hoy) {
        alert("La fecha debe ser posterior al día de hoy.")
        return;
    }
    try {
    await simularEnvio(); // Aquí usamos await
    alert("✅ ¡Formulario enviado correctamente!");
    form.reset(); // Opcional: limpia el formulario
  } catch (error) {
    alert(` Error al enviar: ${error}`);
  }
}
// Función que simula un envío usando una promesa con setTimeout
function simularEnvio() {
  return new Promise((resolve, reject) => {
    const tiempo = Math.floor(Math.random() * 3000) + 1000; // 1 a 4 segundos
    console.log("Enviando datos...");

    setTimeout(() => {
      const exito = Math.random() > 0.2; // 80% de probabilidad de éxito
      if (exito) {
        resolve(); // Éxito en el "envío"
      } else {
        reject("Hubo un error inesperado al enviar los datos.");
      }
    }, tiempo);
  });
}


form.addEventListener("submit", validarDatos);
