// //Objetos
// class Juego {
//   constructor(nombre, genero, precio, plataforma, id, img, cantidad) {
//       this.nombre = nombre;
//       this.genero = genero;
//       this.precio = precio;
//       this.plataforma = plataforma;
//       this.img = img;
//       this.id = id;
//     this.cantidad = 1;
//   }
// }

// const carmagedon = new Juego(  "Carmagedon",  "Carreras",  4500,  "PC",  1,  "./assets/img/carmageddon.jpg");
// const mortalKombat3 = new Juego(  "Mortal Kombat 3",  "Lucha",  3000, "Sega",  2,  "./assets/img/mortalKombat3.jpg");
// const crash = new Juego("Crash", "Plataformas", 2500, "Playstation", 3, "./assets/img/crash.jpg");
// const superMario64 = new Juego(  "Super Mario 64",  "Plataformas",  6000, "Nintendo",  4,  "./assets/img/superMario64.jpg");
// const zelda = new Juego(  "Zelda: Ocarina Of Time",  "RPG",  10000,  "Nintendo",  5,  "./assets/img/zelda.jpg");
// const finalFantasy7 = new Juego(  "Final Fantasy 7",  "RPG",  12000,  "Playstation",  6,  "./assets/img/finalFantasy7.jpg");
// const batman = new Juego(  "Batman For Ever",  "Plataformas",  30000,"Sega",  7,  "./assets/img/batmanForEver.jpg");
// const maxPayne = new Juego(  "Max Payne",  "Accion",  22000,"PC",  8,  "./assets/img/maxPayne.jpg");


const productosJson = async () => {
  const respuesta = await fetch ("../json/productos.json")
  const data = await respuesta.json()
  console.log(data)
}

productosJson()

//Array de juegos

// const listaDeJuegos = [  carmagedon,  mortalKombat3,  crash,  superMario64,  zelda,  finalFantasy7, batman, maxPayne];

//Carrito

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

//Contenedor de productos 

const contenedorProductos = document.getElementById("contenedorProductos")

mostrarProductos()

//MOSTRAR EL CARRITO

const verCarrito = document.getElementById("verCarrito")

verCarrito.addEventListener("click", ()=>{
  mostrarCarrito()
})


const contadorCarrito = document.getElementById("contadorCarrito")

//FUNCIONES


//Mostrar juegos en el dom
function mostrarProductos (){
  listaDeJuegos.forEach((juego) =>{
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
  
  })
  }

//Agregar juegos al carrito

function agregarAlCarrito(id){
  const juego = listaDeJuegos.find((juego) => juego.id === id)
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

const vaciarCarrito = document.getElementById("vaciarCarrito")
vaciarCarrito.addEventListener("click", ()=>{
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
  })
  
})


//MOSTRAMOS MENSAJE CON EL TOTAL DE LA COMPRA

const total = document.getElementById("total")

function calcularTotal(){
  let totalCompra = 0;
  carrito.forEach((juego)=>{
    totalCompra += juego.precio * juego.cantidad
  })
  total.innerHTML = `
  Total: $${totalCompra} `
}

const buscador = document.getElementById("buscador")
buscador.addEventListener("keyup", ()=>{
  console.log(buscador.value)
})


function filtrar(){
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
}

buscador.addEventListener("keyup",filtrar)


const cuerpoCarrito = document.getElementById("cuerpoCarrito")

function mostrarCarrito(){
  cuerpoCarrito.innerHTML = ``
  carrito.forEach((juego) => {
    const div = document.createElement("div")
    div.className = ("productoEnCarrito ")
    div.innerHTML = `


    <p class="text-light">${juego.nombre}</p>
    <p class="text-light">Precio: $${juego.precio}</p>
    <p class="text-light text-center"> ${juego.cantidad}</p>
    <div>
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
