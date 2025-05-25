async function pedirDatos() {
  console.log("🧑‍💼 Cliente: Quiero la lista de usuarios...");

  try {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");

    const datos = await respuesta.json(); // convertimos la respuesta a objeto JS

    console.log("👨‍🍳 Servidor respondió con:");
    console.log(datos);
  } catch (error) {
    console.log("❌ Hubo un problema al traer los datos:", error);
  }
}

pedirDatos();

/*🧪 ¿Y en Postman cómo se vería?
Abres Postman

Pones la misma URL:
👉 https://jsonplaceholder.typicode.com/users

Seleccionas el método GET

Haces clic en Send

Y ves los mismos datos que obtendrías con fetch() en tu código*/