 // Importamos Zod
    const { z } = window.Zod;
//Se crea el  esquema de validacion
const schema = z.object({
  name: z.string().min(2, "El nombre debe tener minimo dos caracteres"),
  email: z.string().email(),
  password: z.string()
    .max(30,"La contraseña debe tener al maximo 30 caracteres")
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .regex(/[A-Z]/, "Debe contener al menos una letra mayúscula")
    .regex(/[a-z]/, "Debe contener al menos una letra minúscula")
    .regex(/\d/, "Debe contener al menos un número")
    .regex(/[^A-Za-z0-9]/, "Debe contener al menos un carácter especial")
});

const registerForm = document.getElementById("registerForm");

function validarFormulario(datos){
   
    try {
    schema.parse(datos); // Intenta validar los datos
    alert("¡Registro exitoso!"); // Éxito
  } catch (error) {
    if (error instanceof z.ZodError) {
    document.getElementById("errorP").textContent =
      error.errors.map((e) => e.message).join(', ');
  }
  }
}

registerForm.addEventListener("submit", function (e) {
  e.preventDefault(); 

  const datos = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  };

  validarFormulario(datos); 
});