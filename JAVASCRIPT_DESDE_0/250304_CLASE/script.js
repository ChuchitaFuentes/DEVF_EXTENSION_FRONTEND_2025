const rangeContainer = document.querySelector('.range-container');
const inputRange = rangeContainer.querySelector('input[type="range"]');
const lenghtCounter = rangeContainer.querySelector('h1');
const generateBtn = document.querySelector('.generator form button')
const passwordHeading =document.querySelector('.password-container h1')

//Funcion que ayude a actualizar el valor del contador, cada que se cambie la longitud cambie el valor del range
const handleChange =()=>{
    lenghtCounter.textContent = inputRange.value;
}

const generatePassword = (passwordLenght) =>{
    let result ='';
    let characters ='';

    //Obtener las opcions que esten seleccionaste
    const useUppercase = document.querySelector('#uppercase').checked;
    const useLowercase = document.querySelector('#lowercase').checked;
    const useNumbers = document.querySelector('#numbers').checked;
    const useSymbols = document.querySelector('#symbols').checked;

    //Creamos un conjunto de caracteres a usar en la contraseña
    if(useUppercase) characters += 'ABCDEFGHIJKLMNSOPQRSTUVWXYZ';
    if(useLowercase) characters += 'abcdefghijklmnsopqrstuvwxyz';
    if(useNumbers) characters += '0123456789';
    if(useSymbols) characters += '!$%&/()=?¡¿*';

    //Si no selecciona ninguna opcion
    if (characters===''){
        passwordHeading.textContent ='Selecciona al menos una opcion:';
        return '';
    }
    //Generador de contraseña aleatoria
    for (let i=0; i<passwordLenght; i++){
        result += characters.charAt(Math.floor(Math.random()*characters.length));
    }
    return result;
};

//funcion que imprima la contraseña
const PrintPassword =(event)=>{
    event.preventDefault();
    const password = generatePassword(inputRange.value);
    if (password){
        passwordHeading.textContent=password;
    }
};

inputRange.addEventListener('input', handleChange);
generateBtn.addEventListener('click', PrintPassword);