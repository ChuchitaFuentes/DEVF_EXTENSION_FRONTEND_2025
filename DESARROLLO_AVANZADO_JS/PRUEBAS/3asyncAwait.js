/* ¿Qué es async?
Es una palabra clave que se pone antes de una función para decirle a JavaScript que esa función va a trabajar con código asincrónico.
Al usar async, esa función devuelve automáticamente una promesa.
📌 Aunque tú solo retornes un string, al ser async, JavaScript lo convierte en una promesa por ti.*/

/* ¿Qué es await?
Solo se puede usar dentro de una función async.
Sirve para esperar a que una promesa se resuelva antes de continuar con el código.
Es como decir: “Espera aquí hasta que tenga el resultado”.*/

function prepararCafe() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = Math.random() > 0.3; // 70% de éxito

      if (exito) {
        resolve("☕ Tu café está listo");
      } else {
        reject("💥 La cafetera falló");
      }
    }, 2000); // tarda 2 segundos
  });
}

async function pedirCafe() {
  console.log("🧑‍💼 Voy a pedir un café...");

  try {
    const cafe = await prepararCafe(); // espera a que termine
    console.log("✅ Recibí:", cafe);
  } catch (error) {
    console.log("❌ Error:", error);
  }
}

pedirCafe();

/*✅ Lo que estás usando aquí
Parte	¿Qué hace?
prepararCafe()	Crea una promesa con resolve() y reject()
async function	Te permite usar await dentro de ella
await prepararCafe()	Espera que termine la promesa antes de seguir
try {}	Intenta ejecutar el código
catch (error)	Captura el error si la promesa falla*/