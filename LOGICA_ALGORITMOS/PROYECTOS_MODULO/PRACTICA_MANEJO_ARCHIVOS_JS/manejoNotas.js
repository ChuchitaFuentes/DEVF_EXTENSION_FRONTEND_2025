//Se importa el modulo fs de Node.js, este nos permite leer y escribir archivos, lo que se necesita para trabajar con notas.json
const fs = require("fs");
const path = require("path");
// Ruta del archivo de notas, se guarda como una constante.
// Usamos __dirname para que siempre apunte a la misma carpeta donde está el script
const filePath = path.join(__dirname, "notas.json");

//Funcion para agregar una nota
function agregarNota(titulo, contenido) {
  //Se crea un arreglo que se llenara con las notas que ya existen en el archivo si las hay.
  let notas = [];
  //Se crea la condicional para verificar si el archivo existe
  if (fs.existsSync(filePath)) {
    //si el archivo existe
    const data = fs.readFileSync(filePath, "utf-8"); //.readFileSync lee el archivo y con el utef 8 lo convierte a texto
    notas = JSON.parse(data); //Se guarda dentro del arreglo notas la informacion obtenida, JSON.parse convierte el texto en objetos
  } 
    //Se busca dentro del arreglo de objetos si una nota ya existe con ese titulo para evitar duplicar
    const yaExiste = notas.find((nota) => nota.titulo === titulo);
    if (yaExiste) {
      console.log(`Ya existe una nota nombrada "${titulo}"`);
      return;
    } 
      //Se crea el objeto con el titulo y el contenido que se recibe
      const nuevaNota = { titulo, contenido };
      //Se agrega al final del arreglo de objetos notas
      notas.push(nuevaNota);
      //Se guardan las notas en el archivo notas.json
      fs.writeFileSync(filePath, JSON.stringify(notas)); //JSON.stringify: convierte el arreglo de notas a texto JSON | fs.writeFileSync: guarda el texto en el archivo
      console.log(`La nota "${titulo}" se agregó correctamente`);
    
}

function listarNotas() {
  //Verificamos si hay notas dentro del archivo, si no hay manda el mensaje de que no hay notas
  if (!fs.existsSync(filePath)) {
    console.log("No hay notas guardadas aún.");
    return;
  } else {
    //Al igual que en la funcion anterior, se lee el archivo y se convierte a texto
    const data = fs.readFileSync(filePath, "utf-8");
    //Se declara una variable llamada notas que guardara como un arreglo de objetos las notas
    const notas = JSON.parse(data);
    //Se muestran en consola para cada nota
    console.log("Lista de notas:");
    notas.forEach((nota, index) => {
      console.log(`${index + 1}. ${nota.titulo}: ${nota.contenido}`);
    });
  }
}

function eliminarNota(titulo) {
  //Verificamos si hay notas dentro del archivo, si no hay manda el mensaje de que no hay notas
  if (!fs.existsSync(filePath)) {
    console.log("No hay notas guardadas.");
    return;
  } else {
    //Se lee el archivo como texto
    const data = fs.readFileSync(filePath, "utf-8");
    //Se asigna a notas el arreglo de objetos convertidos mediante .parse
    const notas = JSON.parse(data);

    //Se crea una arreglo que se queda con todas las notas excepto con la que se quiere eliminar
    const nuevasNotas = notas.filter((nota) => nota.titulo !== titulo);
    //Si el numero de elementos en las notas iniciales es igual que el numero de elementos en el nuevo arrgelo entonces significa que no hay una nota por eliminar
    if (notas.length === nuevasNotas.length) {
      console.log(`No se encontro ninguna nota llamada "${titulo}"`);
      return;
    } else {
      //Se guardan las nuevas notas en el archivo
      fs.writeFileSync(filePath, JSON.stringify(nuevasNotas));
      console.log(`La nota "${titulo}" fue eliminada correctamente.`);
    }
  }
}
function eliminarTodas(){
      //Verificamos si hay notas dentro del archivo, si no hay manda el mensaje de que no hay notas
    if (!fs.existsSync(filePath)) {
      console.log("No hay notas guardadas.");
      return;
    } else {
      fs.writeFileSync(filePath, JSON.stringify([]));
      console.log("Todas las notas se han eliminado.");
    }
}

agregarNota("Despensa", "Jamón, arroz, calabazas");
agregarNota("Productos personales", "Crema, exfoliante");
agregarNota("Regalos","Carritos, sombras");

listarNotas();

eliminarNota("Despensa");

listarNotas();

eliminarNota("Limpieza");

