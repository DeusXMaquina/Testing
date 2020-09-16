// VARIABLES
window.productos = [
    { precioDeCompra:13, precioDeVenta:15,  nombre:'cocacola', inventarios: 100, ordenDeRecompra: 50 },
    { precioDeCompra:10, precioDeVenta:13, nombre:'pepsi', inventarios: 100, ordenDeRecompra: 50 },
    { precioDeCompra:11, precioDeVenta:15, nombre:'chaparrita', inventarios: 100, ordenDeRecompra: 50 },
    { precioDeCompra:12, precioDeVenta:17, nombre:'sprite', inventarios: 100, ordenDeRecompra: 50 },
    { precioDeCompra:8, precioDeVenta:12, nombre:'manzana' , inventarios: 100, ordenDeRecompra: 50 },
    { precioDeCompra:36, precioDeVenta:40, nombre:'monster' , inventarios: 100, ordenDeRecompra: 50 },
    { precioDeCompra:40, precioDeVenta:49, nombre:'red bull' , inventarios: 100, ordenDeRecompra: 50 },
];


// FUNCIONES


function botonCliente(){
    window.location.href = 'http://127.0.0.1:5500/Proyecto_cieguis/puntoDeVenta.html#';
}
function eliminar(){
    window.location.href = "http://127.0.0.1:5500/Proyecto_cieguis/eliminar.html";
}

function botonEnter(){

    let precioDeCompra = parseInt(document.getElementById('precioDeCompra').value);
    let precioDeVenta = parseInt(document.getElementById('precioDeVenta').value);
    let nombre = document.getElementById('nombreProducto').value;
    let inventario = parseInt(document.getElementById('inventarios').value);
    let ordenDeRecompra = parseInt(document.getElementById('ordenDeRecompra').value);
    
    productos.push({precioDeCompra : precioDeCompra,precioDeVenta :precioDeVenta,nombre:nombre,
    inventario:inventario,ordenDeRecompra:ordenDeRecompra});
    

    alert(`${nombre} fue agregado al inventario.`);

    document.getElementById('precioDeCompra').value = null;
    document.getElementById('precioDeVenta').value = null;
    document.getElementById('nombreProducto').value= null;
    document.getElementById('inventarios').value = null;
    document.getElementById('ordenDeRecompra').value = null;
    
}


