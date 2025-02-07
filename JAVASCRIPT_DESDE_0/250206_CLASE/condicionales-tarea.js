let notaEstudiante=100;
console.log("Tu nota es:"+notaEstudiante);

if (typeof(notaEstudiante)==="string"){
    console.log("La nota que ingresaste es un texto, favor de ingresar solo números.");
}
else if (notaEstudiante>=90){
    console.log("Nota aprobatoria ¡Excelente!");
}
else if (notaEstudiante>=75 && notaEstudiante<=89){
    console.log("Nota aprobatoria ¡Bien!");
}
else if (notaEstudiante>=60 && notaEstudiante<=74){
    console.log("Nota aprobatoria ¡Suficiente!");
}
else {
    console.log("Nota no aprobatoria");
}


