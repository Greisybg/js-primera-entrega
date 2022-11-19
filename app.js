

//Creo mi carrito como array vacio
let carrito = [];
let contador_productos=0;


//Hago la funcion para armar mi muestra de productos a elegir trayendo la data desde un archivo en formato JSON
function traerproductosJson(ruta){
    const DATAJSON=ruta+"productos.json";
    fetch(DATAJSON)
        .then(res => res.json())
        .then(datosDeProductos => {
            const desayunos=datosDeProductos.menu;
            desayunos.forEach(desayuno =>{
                document.getElementById("idDesayunos").innerHTML +=  ` 
                <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                <div class="card mb-4 product-card">
                <img class="card-img-top" src="${ruta}${desayuno.img}" alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">${desayuno.nombre}</h5>
                    <p class="card-text"> Precio: $ ${desayuno.precio}</p>
                    <a href="#" id='btn${desayuno.id}'class="btn btn-info">Seleccionar</a>
                </div>
            </div> </div>`;
            })
            

//Cuando se presiona el boton de seleccion se llama a la funcion para agregar dicho producto al carrito
            desayunos.forEach((desayuno) => {
                document.getElementById(`btn${desayuno.id}`).addEventListener("click",function(){
                    agregarAlCarrito(desayuno);
                });
                
            });

        })
}



//En el siguiente codigo voy armando el carrito mostrando los desayunos seleccionados
function agregarAlCarrito(productoSeleccionado){
    contador_productos = contador_productos+1;
    let newProductoSeleccionado = {... productoSeleccionado};
    newProductoSeleccionado.idItem='producto-item-'+contador_productos;
    carrito.push(newProductoSeleccionado);//Aqui añado el desayuno seleccionado al carrito
    Swal.fire({
        title: "Desayuno " + productoSeleccionado.nombre,
        text: "agregado a tus pedidos",
        imageUrl: productoSeleccionado.img,
        imageWidth: 300,
        imageHeight: 200,
        showConfirmButton: false,
        timer: 1500
    })





    document.getElementById("tablabody").innerHTML += `
    
    <tr>
        <td>${productoSeleccionado.nombre}</td>
        <td>${productoSeleccionado.precio}</td>
        <td>
        <a href="#" id='btn-borrar-item-${contador_productos}'class="btn btn-outline-danger" onclick="eliminarItemCarrito(this)">X</a>
        </td>
    </tr>
    `;

    actualizarTotal();

};


function eliminarItemCarrito(element){
    let idItem=element.id.replace('btn-borrar-item-','')
    let idItemCarrito="producto-item-"+idItem;
    console.log(carrito);
    console.log(idItemCarrito);
    carrito = carrito.filter(function(value, index, arr){ 
        return value.idItem != idItemCarrito;
    });
    console.log(carrito);
    element.parentElement.parentElement.remove();
    actualizarTotal();
};

function actualizarTotal(){
    let totalCarrito = carrito.reduce((sumador,desayuno)=>sumador+desayuno.precio,0);
    document.getElementById("total").textContent="Total a pagar $: "+totalCarrito;
}