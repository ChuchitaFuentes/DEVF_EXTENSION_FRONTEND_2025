const unorderList = document.getElementById("unorderList");
const addOrderBtn = document.getElementById("addOrderBtn");


function generarID(){
    return Date.now();
}


function procesarPedido(id) {
  return new Promise((resolve, reject) => {
  
    const tiempoPreparacion = Math.floor(Math.random() * 5000) + 3000;

    setTimeout(() => {
      const exito = Math.random() > 0.2; // 80% éxito, 10% falla
      if (exito) {
        resolve(); // Pedido completado
      } else {
        reject(`❌ Error en cocina al preparar el pedido #${id}`);
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

