const unorderList = document.getElementById("unorderList");
const addOrderBtn = document.getElementById("addOrderBtn");


function generarID(){
    return Date.now();
}


function procesarPedido(id) {
  return new Promise((resolve, reject) => {
    const tiempoPreparacion = Math.floor(Math.random() * 3000) + 2000;

    setTimeout(() => {
      const exito = Math.random() > 0.1; // 90% éxito, 10% falla
      if (exito) {
        resolve(); // Pedido completado
      } else {
        reject(`❌ Error al preparar el pedido #${id}`);
      }
    }, tiempoPreparacion);
  });
}

async function crearPedido(){
    const productoInput = document.getElementById("producto").value;
    const id = generarID();
    const li = document.createElement("li");
    li.textContent =`Pedido #${id} - Producto: ${productoInput} - ⏲️ En proceso...`
    unorderList.appendChild(li);
    try {
    await procesarPedido(id);
    li.textContent = `Pedido #${id} - Producto: ${productoInput} - ✅ Completado`;
  } catch (error) {
    li.textContent = error;
  }
}


addOrderBtn.addEventListener("click",crearPedido);

