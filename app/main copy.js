//Traer datos de JSON

const url = "./Json/productos.json"

fetch(url)
.then(respuesta => respuesta.json())
.then(data => mostrarProductos(data))


let carrito = []

if (localStorage.getItem("carrito")){
  carrito = JSON.parse(localStorage.getItem("carrito"))
}

document.addEventListener("DOMContentLoaded", ()=>{
  if (localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"))
    mostrarCarrito()
  }
})


//Constantes index 

const contenedorProductos = document.getElementById("contenedorProductos")

const verCarrito = document.getElementById("verCarrito")

verCarrito.addEventListener("click", ()=>{
  mostrarCarrito()
})

const contadorCarrito = document.getElementById("contadorCarrito")

const vaciarCarrito = document.getElementById("vaciarCarrito")

const total = document.getElementById("total")

const cuerpoCarrito = document.getElementById("cuerpoCarrito")

const finalizarCompra = document.getElementById("finalizarCompra")

finalizarCompra.addEventListener("click", finalizarCompraa)

vaciarCarrito.addEventListener("click", limpiarCarrito)


//FUNCIONES


//Mostrar juegos en el dom
function mostrarProductos (data){
  data.forEach((juego) =>{
    const div = document.createElement("div")
    div.classList.add("col-xl-3", "col-md-6", "col-xs-12")
    div.innerHTML = `
    
    <div class="card" style="width: 20rem;">
    <img src="${juego.img}" class="card-img-top" alt="${juego.nombre}">
    <div class="card-body">
    <h5 class="card-title">${juego.nombre}</h5>
    <p class="card-text">Precio: $${juego.precio}</p>
    <p class="card-text">Genero: ${juego.genero}</p>
    <p class="card-text">Plataforma: ${juego.plataforma}</p>
    <button class="btn colorBoton" id="boton${juego.id}">Agregar al carrito</button>
    </div>
    </div>
    `
    contenedorProductos.appendChild(div)
    
    const boton = document.getElementById(`boton${juego.id}`)
    boton.addEventListener("click", ()=>{
      agregarAlCarrito(juego.id, data)
    })
    
  })
}

//Agregar juegos al carrito

function agregarAlCarrito(id, array){
  const juego = array.find((juego) => juego.id === id)
  const juegoEnCarrito = carrito.find((juego) => juego.id === id)
  
  if(juegoEnCarrito){
    juego.cantidad++
    localStorage.setItem("carrito", JSON.stringify(carrito))
  } else {
    carrito.push(juego)
    localStorage.setItem("carrito", JSON.stringify(carrito))
  }
  console.log(carrito)
  Swal.fire(
    `${juego.nombre} agregado al carrito!`,
    'Que lo disfrutes!',
    'success'
    )
    mostrarCarrito()
  }
  
  
  //Mostrar carrito
  function mostrarCarrito(){
    cuerpoCarrito.innerHTML = ``
    carrito.forEach((juego) => {
      const div = document.createElement("div")
      div.className = ("productoEnCarrito ")
      div.innerHTML = `
      
      <img src="${juego.img}" class="imgCarrito" alt="${juego.nombre}">
      <span class="span-carrito">
      <p class="text-light">${juego.nombre}</p>
      <p class="text-light">Precio: $${juego.precio}</p>
      <p class="text-light text-center">Cantidad: ${juego.cantidad}</p>
      </span>
      <div class="d-flex justify-content-center">
      <button class="btn colorBoton" id="eliminar${juego.id}">Eliminar</button>
      </div>
      
      
      `
      cuerpoCarrito.appendChild(div)
      const boton = document.getElementById(`eliminar${juego.id}`)
      boton.addEventListener("click", ()=>{
        eliminarDelCarrito(juego.id)
      })
      contadorCarrito.innerText = carrito.length
    })
    calcularTotal()
  }

  //MOSTRAMOS MENSAJE CON EL TOTAL DE LA COMPRA



function calcularTotal(){
  let totalCompra = 0;
  carrito.forEach((juego)=>{
    totalCompra += juego.precio * juego.cantidad
  })
  total.innerHTML = `
  Total: $${totalCompra} `
}


  

//FUNCIÓN QUE ELIMINA EL PRODUCTO DEL CARRITO
function eliminarDelCarrito(id){
  const juego = carrito.find((juego) => juego.id === id)
  const indice = carrito.indexOf(juego)
  carrito.splice(indice, 1)
  juego.cantidad = 1
  mostrarCarrito()
  localStorage.setItem("carrito", JSON.stringify(carrito))
  contadorCarrito.innerText = carrito.length
  Swal.fire(
    '',
    `${juego.nombre} eliminado`,
    'success'
    )
  }
  
  //VACIAMOS TODO EL CARRITO
  
  
  
  function limpiarCarrito (){
    Swal.fire({
      title: 'Seguro que queres vaciar el carrito?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, vaciar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Carrito vaciado!',
          '',
          'success'
          )
          carrito.forEach((juego) =>{
            juego.cantidad = 1
          })
          carrito = []
          mostrarCarrito()
          localStorage.clear()
          contadorCarrito.innerText = carrito.length
        }
      })}
      
    
//Finalizar compra

      function finalizarCompraa (){
        Swal.fire({
          title: 'Seguro que queres finalizar la compra?',
          icon: 'info',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sí, comprar!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Pedido realizado! Que lo disfrutes!',
              '',
              'success'
              )
              carrito.forEach((juego) =>{
                juego.cantidad = 1
              })
              carrito = []
              mostrarCarrito()
              localStorage.clear()
              contadorCarrito.innerText = carrito.length
            }
          })
      }
    



      
     
      
      /*
      
      const buscador = document.getElementById("buscador")
      buscador.addEventListener("keyup", ()=>{
        console.log(buscador.value)
        filtrar()
      })    

      buscador.addEventListener("keyup",filtrar)
      
      function filtrar(){
        contenedorProductos.innerHTML = ``;
        const texto = buscador.value
        console.log(texto)
        
        
      }
      
      
      
      contenedorProductos.innerHTML = ``;
      const texto = buscador.value.toLowerCase()
      listaDeJuegos.forEach((juego) =>{
        
        let nombre = juego.nombre.toLowerCase()
        let plataforma = juego.plataforma.toLowerCase()
        let genero = juego.genero.toLowerCase()
        if(nombre.indexOf(texto) !== -1  || plataforma.indexOf(texto) !== -1 || genero.indexOf(texto) !== -1){
          const div = document.createElement("div")
          div.classList.add("col-xl-3", "col-md-6", "col-xs-12")
          div.innerHTML = `
          
          <div class="card" style="width: 20rem;">
          <img src="${juego.img}" class="card-img-top" alt="${juego.nombre}">
          <div class="card-body">
          <h5 class="card-title">${juego.nombre}</h5>
          <p class="card-text">Precio: $${juego.precio}</p>
          <p class="card-text">Genero: ${juego.genero}</p>
          <p class="card-text">Plataforma: ${juego.plataforma}</p>
          <button class="btn colorBoton" id="boton${juego.id}">Agregar al carrito</button>
          </div>
          </div>
          `
          contenedorProductos.appendChild(div)
          
          const boton = document.getElementById(`boton${juego.id}`)
          boton.addEventListener("click", ()=>{
            agregarAlCarrito(juego.id)
          })
        }
      })
      if (contenedorProductos.innerHTML === ``){
        contenedorProductos.innerHTML = `<li>Juego no encontrado</li>`
        mostrarProductos()
      }
    


    */
   
   
   
   
   
