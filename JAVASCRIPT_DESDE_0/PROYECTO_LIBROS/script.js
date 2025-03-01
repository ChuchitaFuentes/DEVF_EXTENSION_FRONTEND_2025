//Problema:Crear un objeto libro que contenga varias propiedades y un método para imprimir la información basica del libro

class Libro{
    static totalLibros=0;
    constructor(name,autor,year,status){
        this._name = name;
        this._autor = autor;
        this._year = year;
        this._status = status;
        this._capitulos=[];
        this._numeroInventario= ++Libro.totalLibros;
    
    }
    //Funcion para mostrar la información del libro
    descripcionLibro(){
        return `El libro "${this._name}" fue escrito por ${this._autor} en el año de ${this._year} en este momento de encuentra "${this._status}". Número ID: ${this._numeroInventario}`
    }
    //Funcion para obtener el numero de inventario de un libro
    get numeroID(){
        return `${this._numeroInventario}`
        ;
    }
   
    
    //Funcion para agregar capitulos
    agregarCapitulo(nuevoCapitulo){
        this._capitulos.push(nuevoCapitulo);
        return `Se ha agregado el capítulo "${nuevoCapitulo}" al libro "${this._name}".` 
    }
    //Funcion que elimina capitulos
    eliminarCapitulos(){
        let mensaje=`Se ha eliminado el capítulo "${this._capitulos[(this._capitulos).length-1]}" del libro "${this._name}"`;
        this._capitulos.pop();
        return mensaje;
    }

    //Funcion para listar capitulos(No se muy bien como funciona)
    listadoCapitulos(){
        console.log(`Capítulos de "${this._name}":`);
        this._capitulos.forEach((element, indice)=> {
            console.log(`${indice+1}. ${element}`);
        });
        return console.log(`----------------------`) ;
    }
   
}

//console.log(libro1.numeroID); Se puede obtener el numero de inventario de un libro

//Declaracion de objetos
let libro1= new Libro('El libro interminable', 'Michael Ende', 2013, 'Disponible');
let libro2= new Libro('El hombre que vendio su Ferrari', 'Robert S. Sharman', 2008, 'No disponible');


//Llamando a funciones del libro 1
console.log(libro1.descripcionLibro());
console.log(libro1.agregarCapitulo('Fantasia en peligro'));
console.log(libro1.agregarCapitulo('El llamamiendo de Atreyu'));
console.log(libro1.eliminarCapitulos());
libro1.listadoCapitulos();


//Llamando a funciones del libro 2

console.log(libro2.descripcionLibro());
console.log(libro2.agregarCapitulo('El despertar'));
console.log(libro2.agregarCapitulo('El visitante misterioso'));
libro2.listadoCapitulos();

console.log(`TOTAL DE LIBROS : ${Libro.totalLibros}`); //Se obtiene el numero total de objetos creados