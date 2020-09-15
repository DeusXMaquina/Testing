// VARIABLES
const productos = [
    { precioDeCompra:13, precioDeVenta:15,  nombre:'cocacola', inventarios: 100, ordenDeRecompra: 50 },
    { precioDeCompra:10, precioDeVenta:13, nombre:'pepsi', inventarios: 100, ordenDeRecompra: 50 },
    { precioDeCompra:11, precioDeVenta:15, nombre:'chaparrita', inventarios: 100, ordenDeRecompra: 50 },
    { precioDeCompra:12, precioDeVenta:17, nombre:'sprite', inventarios: 100, ordenDeRecompra: 50 },
    { precioDeCompra:8, precioDeVenta:12, nombre:'manzana' , inventarios: 100, ordenDeRecompra: 50 },
    { precioDeCompra:36, precioDeVenta:40, nombre:'monster' , inventarios: 100, ordenDeRecompra: 50 },
    { precioDeCompra:40, precioDeVenta:49, nombre:'red bull' , inventarios: 100, ordenDeRecompra: 50 },
];

// FUNCIONES

function inventario(){
    let inventario = productos.length;
    alert(inventario + ' ' + 'Productos.');
}

function botonCliente(){
    window.location.href = 'http://127.0.0.1:5500/Proyecto_cieguis/puntoDeVenta.html#';
}

function cicloArreglo(arreglo){
    
}

function buscarProducto(){
    let arreglo = productos;
    let noEncontrado = true;
    for(let i = 0; i < arreglo.length ; i++){
        if( prompt('ingrese el nombre del producto') === arreglo[i].nombre ){
            console.log(arreglo[i].nombre);
        }
    }
}   

function ingresarProducto(){
    let productos1 = new Array();
    let elementos = parseInt(prompt('Cuantos productos quieres agregar?'));
    for(let i = 0 ; i < elementos  ; i++){
        let precioDeCompra = parseInt(prompt('Introduce el precio de compra'));
        let precioDeVenta = parseInt(prompt('Introduce el precio de venta'));
        let nombre = prompt('Introduce el nombre del producto');
        let inventario =parseInt(prompt('Introduce el inventario'));
        let ordenDeRecompra =parseInt(prompt('Introduce la orden de recompra'));

        productos1 += productos.push({nombre,precioDeCompra,precioDeVenta,inventario,ordenDeRecompra});
    }
    return productos1;
}

function nuevoProducto () {
    let precioDeCompra = parseInt(prompt('Introduce el precio de compra'));
    let precioDeVenta = parseInt(prompt('Introduce el precio de venta'));
    let nombre = prompt('Introduce el nombre del producto');
    let inventario =parseInt(prompt('Introduce el inventario'));
    let ordenDeRecompra =parseInt(prompt('Introduce la orden de recompra'));
    let nuevoProducto = {precioDeCompra: precioDeCompra,
         precioDeVenta: precioDeVenta,
          nombre: nombre, inventario: inventario,
           ordenDeRecompra: ordenDeRecompra
        }
    return nuevoProducto
}


function agregarAProductos () {
    productos[productos.lenght] = nuevoProducto()
}

/* function ingresarProducto(){

    let elementos = parseInt(prompt('Cuantos productos quieres agregar?'));
    for(let i = 0 ; i < elementos  ; i++){
        let precioDeCompra = parseInt(prompt('Introduce el precio de compra'));
        let precioDeVenta = parseInt(prompt('Introduce el precio de venta'));
        let nombre = prompt('Introduce el nombre del producto');
        let inventario =parseInt(prompt('Introduce el inventario'));
        let ordenDeRecompra =parseInt(prompt('Introduce la orden de recompra'));

        productos.push({nombre,precioDeCompra,precioDeVenta,inventario,ordenDeRecompra});
    }
} */

function borrarProducto(item){
    item = prompt('coloque el nombre del producto a eliminar');
    if(item === productos.nombre){
        
    }
    return productos;
}

document.addEventListener("DOMContentLoaded", function(event){
    for( let i = 0 ; i < productos.length ; i++){
        if( productos[i].inventarios < 50){
            alert(`Se tiene que realizar orden de recompra para el producto "${productos[i].nombre}"
            , ya que solo contamos con "${productos[i].inventarios}" piezas en el inventario.`);
        }
    }
});



const mostrarInformacion = function (producto) {
    console.log(`Precio de compra: $ ${producto.precioDeCompra}, Precio de venta: $ ${producto.precioDeVenta}, 
    Nombre: ${producto.nombre}, Cantidad de inventario: ${producto.inventarios}, Orden de compra: ${producto.ordenDeRecompra}.`);
}

