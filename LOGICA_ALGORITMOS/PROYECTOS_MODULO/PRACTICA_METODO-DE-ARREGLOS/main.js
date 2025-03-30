let productos =[ 
    {nombre: "Harina", precio: 20, categoría: "Horneado"},
    {nombre: "Chocolate", precio: 80, categoría: "Coberturas"},
    {nombre: "Azucar", precio: 30, categoría: "Horneado"},
    {nombre: "Mermelada", precio: 50, categoría: "Rellenos"},
    {nombre: "Chispas", precio: 60, categoría: "Decorado"}
];

function filtrar(productosArr,costoMaximo){
    let costosFiltrados = productosArr.filter(producto=> producto.precio < costoMaximo)
    return costosFiltrados;
}

function ordenAlfabético(productosArr){
    let productosOrdenados =productosArr.sort((a, b) => a.nombre.localeCompare(b.nombre));
    return productosOrdenados;

}

function obtenerNombres(productosArr){
    let nuevo= productosArr.map(producto=>({
        nombre: producto.nombre
    }));
    return nuevo;
}

 console.log(filtrar(productos,60));
 console.log(ordenAlfabético(productos));
 console.log(obtenerNombres(productos));