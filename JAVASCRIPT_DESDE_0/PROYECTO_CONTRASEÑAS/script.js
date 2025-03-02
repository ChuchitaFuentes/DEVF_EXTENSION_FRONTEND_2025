
//1. INPUT TIPO RANGE 
//Se obtiene el DOM de los elementos relacionados
const seleccionarLargo = document.getElementById("seleccionarLargo"); //input range
const valorSeleccionado = document.getElementById("valorSeleccionado"); //p valor del range

//Se crea la funcion que modifica el valor del larco con el range
function actualizarValor(){
    valorSeleccionado.textContent=seleccionarLargo.value
}
//Se declara el evento para que muestre el valor
seleccionarLargo.addEventListener("input", actualizarValor);

//2. GENERADOR DE CONTRASEÑA
//Se optiene el DOM del los elementos relacionados
const botonGenerador = document.getElementById("botonGenerador");
const passwordGenerada = document.getElementById("passwordGenerada");

//Generan los arreglos para las Letras Mayúsculas, Letras Minúsculas,  Números y Símbolos
const letrasMay = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const letrasMin = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const simbolos = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '<', '>', '?', '/', '{', '}', '[', ']', '|', '~'];

//Se declara la funcion para generar las contraseñas
function generarPassword(){
    const largoOpcion = seleccionarLargo.value;
    const checkLetrasMay = document.getElementById("letrasMayusculas").checked;
    const checkLetrasMin = document.getElementById("letrasMinusculas").checked;
    const checkNumeros = document.getElementById("numeros").checked;
    const checkSimbolos = document.getElementById("simbolos").checked;

    let caracteresDisponibles = [];

            if (checkLetrasMay) caracteresDisponibles = caracteresDisponibles.concat(letrasMay);
            if (checkLetrasMin) caracteresDisponibles = caracteresDisponibles.concat(letrasMin);
            if (checkNumeros) caracteresDisponibles = caracteresDisponibles.concat(numeros);
            if (checkSimbolos) caracteresDisponibles = caracteresDisponibles.concat(simbolos);

            if (caracteresDisponibles.length === 0) {
                passwordGenerada.textContent = "Selecciona al menos una opción";
                return;
            }

            let password = "";
            for (let i = 0; i < largoOpcion; i++) {
                const randomIndex = Math.floor(Math.random() * caracteresDisponibles.length);
                password += caracteresDisponibles[randomIndex];
            }

            passwordGenerada.value = password;

        }
//Se llama al evento que generla la contraseña con el botón
    botonGenerador.addEventListener("click",generarPassword);

//3. COPIAR CONTRASEÑA
//Se obtiene el DOM de los elementos relacionas  
const copiarPassword = document.getElementById("copiarPassword"); //boton
//Se declara la funcion
function copiar(){
    if (passwordGenerada.value){
        navigator.clipboard.writeText(passwordGenerada.value)
        .then(() => alert("¡Contraseña copiada!"))
    }
    else{
        alert("No hay contraseña para copiar. Primero da click en el botón Generar.");
    }
}

//Se llama al evento que copia la contraseña
copiarPassword.addEventListener("click", copiar);


