

//Creo mi carrito como array vacio
let carrito = [];
let contado_prouctos=0;


//Hago la funcion para armar mi muestra de productos a elegir trayendo la data desde un archivo en formato JSON
function traerproductosJson(){
    const DATAJSON="/productos.json";
    fetch(DATAJSON)
        .then(res => res.json())
        .then(datosDeProductos => {
            const desayunos=datosDeProductos.menu;
            desayunos.forEach(desayuno =>{
                document.getElementById("idDesayunos").innerHTML +=  ` 
                <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                <div class="card mb-4 product-card">
                <img class="card-img-top" src="${desayuno.img}" alt="Card image cap"/>
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
traerproductosJson();



//En el siguiente codigo voy armando el carrito mostrando los desayunos seleccionados
function agregarAlCarrito(productoSeleccionado){
    carrito.push(productoSeleccionado);//Aqui añado el desayuno seleccionado al carrito
    contado_prouctos += 1;
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
    <p>
    <div id='product-item-${contado_prouctos}'  >
        <div>${productoSeleccionado.nombre}</div>
        <div>${productoSeleccionado.precio}</div>
        <div><a href="#" id='btn-borrar-item${contado_prouctos}'class="btn btn-outline-danger" onclick="eliminarItemCarrito(this)">X</a></div>
    </div>
    </p>
    `;

    
let totalCarrito = carrito.reduce((sumador,desayuno)=>sumador+desayuno.precio,0);
document.getElementById("total").textContent="Total a pagar $: "+totalCarrito;
};


function eliminarItemCarrito(element){
    element.parentElement.parentElement.remove();
};
