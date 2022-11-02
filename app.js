//Función constructora (no se está usando todavia)


let carrito = [];

let contenedor = document.getElementById("misprods");

function renderizarProductos() {
    for (const producto of productos) {
        contenedor.innerHTML += `
        <div class="card col-sm-4">
            <img class="card-img-top" src="${producto.img}" alt="Card image cap"/>
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text"> Precio: $ ${producto.precio}</p>
                <a href="#" id='btn${producto.id}'class="btn btn-info">Seleccionar</a>
            </div>
        </div>

        `;
    }
}

renderizarProductos();

//Ahora la funcion para agregar al carrito los productos

productos.forEach((producto) => {
    document.getElementById(`btn${producto.id}`).addEventListener("click",function(){
        agregarAlCarrito(producto);
    });
    
});



function agregarAlCarrito(productoSeleccionado){
    carrito.push(productoSeleccionado);
    console.log(carrito);
    alert("Añadiste 1 Desayuno "+productoSeleccionado.nombre+ " a tu lista de pedidos");
    document.getElementById("tablabody").innerHTML += `
    <tr>
        <td>${productoSeleccionado.nombre}</td>
        <td>$ ${productoSeleccionado.precio}</td>
    </tr>

    `;
    
let totalCarrito = carrito.reduce((sumador,desayuno)=>sumador+desayuno.precio,0);
document.getElementById("total").innerText="Total a pagar $: "+totalCarrito;

};


