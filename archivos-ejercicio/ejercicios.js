
//VARIOS
/*
//1 - Logueo con user y pass, bucle
const PASS = 1234;
let nombreUsuario = prompt("Ingrese su nombre de usuario:");
let contrasenia = prompt("Ingrese su contraseña:");

for (let i = 0; i <= 2; i++) {
  if (contrasenia == PASS) {
    console.log("Contraseña correcta, usted esta logueado");
    console.log(
      "El usuario ingresado es: " +
        nombreUsuario +
        " Y la contraseña ingreada es: " +
        contrasenia
    );
    break;
  } else {
    alert(
      "Contraseña ingresada es erronea, intente nuevamente. Intentos erroneos: " +
        (i + 1)
    );
       contrasenia = prompt("Ingrese su contraseña");
  }
}

//EJEMPLO SAMU

let passwordUsuario = prompt("Ingrese su contraseña: ");
const passwordAutorizado = 1234;

for(let i = 0; i < 2 ; i++){
    if (passwordUsuario == passwordAutorizado){
        console.log("Contrasela correcta, podes pasar amigo")
    } else {
        passwordUsuario = prompt("Constraseña incorrecta, volve a intentarlo")
    }
}

//2
// let usuario = prompt("Ingrese el usuario");
// while (valorJuego != "ESC") {
//   let valorJuego = Number(
//     prompt(`Bienvenido, ${usuario}!
// Por favor, ingrese el valor del juego que desea comprar:
// `)
//   );
//   let valorfinal = sumarImpuestos(valorJuego);
//   alert("Excelente! El valor del juego con impuestos es de: $" + valorfinal);
//   valorJuego = prompt("En caso de querer seguir comprando, ingrese el valor del siguiente juego. De lo contrario ingrese ESC")
// }

// function sumarImpuestos(precioJuego) {
//   return precioJuego * 1.95;
// }

//Mostrando numeros pares con el ciclo for

//A)

for(let i = 0; i <= 10; i = i + 2){
  console.log("Número par encontrado: " + i)
}


//B)

for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log("Número par: " + i);
  } else if (i % 2 != 0) {
    console.log("Número impar: " + i);
  }
}

//C)

console.log("Ejemplo: C")

let nombreUsuario = prompt("Ingrese su nombre de usuario (Para finalizar ingrese /Salir/)").toUpperCase()

while(nombreUsuario != "SALIR"){
  console.log(nombreUsuario)
  nombreUsuario = prompt("Ingrese su nombre de usuario (Para finalizar ingrese /Salir/)").toUpperCase()
}


function saludar (nombre){
  alert("hola " + nombre + " cómo te va?")
}


let nombreAlumno = prompt("Ingrese su nombre")
saludar(nombreAlumno)


function sumar (numero1, numero2){
  let resultado = numero1 + numero2;
  console.log(resultado)
}

sumar(5,12)*/

//FUNCIONES
/*
function holaMundo (){
  console.log("hola mundo")
}

console.log("A)Función sin parametros")
holaMundo()

function sumar (numero1, numero2){
  return numero1 + numero2
}

console.log("B) Función con parametros")
console.log("El resultado de la suma es: " + sumar(10,15))

function saludar (nombre){
  console.log("Hola " + nombre + "! Bienvenido a la clase!")
}

console.log("C) Otro ejemplo")
saludar("Maxi")


console.log("D) Tomando el dato desde una variable")

let nombre = "Giuseppe"
saludar(nombre)

console.log("E) Tomando el dato desde un prompt anidando la función saludar dentro")

function inputNombre (){
  let nombre = prompt("Por favor, escriba su nombre")
  saludar(nombre)
}

inputNombre()

console.log("F) Tomando el dato desde una variable con prompt")
let personaje = prompt("Escriba su nonmbre amigoo")

saludar(personaje)

function sumar (numero1, numero2){
  return numero1 + numero2
}

let resultadoDeSuma = sumar(1,2)
console.log("El resultado de la suma es " + resultadoDeSuma)

//Funciona anonima
console.log("Funciones anonimas")

let suma = function (a, b) {
  return a + b;
};


console.log(suma(10,47))

let resta = function(a,b){return a - b}

console.log(resta(10,suma(1,1)))


let multiplicar = function(a, b){return a * b}

console.log(suma(10, multiplicar(10,3)))


let dividir = function(a, b){return a / b}

console.log(resta(40, dividir(20,2)))


//Funciones flecha

// let suma = function(a, b){return a + b}
let suma = (a, b) => {return a + b}
console.log(suma(10,40))*/

//OBJETOS
/*
//METODO BASICO:

let carlos = {
  nombre: "Carlos",
  apellido: "Paparulo",
  edad: 30,
  direccion: {
    calle: "Ombu",
    altura: 4175,
    localidad: "San justo"
  }
}

console.log(carlos)
//Cómo asignar un nuevo valor?

carlos.nombre = "jose";

console.log(carlos.nombre)


//FUNCIONES CONSTRUCTORAS

function Persona (nombre, apellido, edad){
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;

  this.saludar = () => {console.log("Hola, me llamo: " + this.nombre)}//SINTAXIS METODO
}

const persona1 = new Persona("Jose", "Pepelupu", 30)
console.log(persona1)


// let nombre = prompt("Ingrese su nombre")
// let apellido = prompt("Ingrese su apellido")
// let edad = Number(prompt("Ingrese su edad"))

// const personita = new Persona (nombre, apellido, edad)

//METODOS

//Agregamos una función a las propiedades del objeto
persona1.saludar()

function Auto (marca, modelo, anio){
  this.marca = marca;
  this.modelo = modelo;
  this.anio = anio;

  this.presentacion = () => {console.log("El auto marca: " + this.marca + " " + this.modelo + " es de los más vendidos del año 2022 a pesar de ser del anio " + this.anio)}
}

const auto1 = new Auto ("Mazda", "Rx7", 2007)

console.log(auto1)
auto1.presentacion()

//Con clases:

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.vendido = false;
  }

  sumarIva() {
    return this.precio * 1.21;
  }

  vender() {
    this.vendido = true;
  }
}

const fideos = new Producto ("Fideo", 90)
console.log("El precio de los fideos es de: " + fideos.precio + "$ y con el IVA incluido es de: " + fideos.sumarIva())


// Metodo tradicional
console.log("-Metodo tradicional")
let persona = {
  nombre: "Maxi",
  apellido: "Canda",
  edad: 30
}

console.log(persona.nombre)

// metodo con funciones
console.log("-Metodo con funciones")
function PersonaFuncion (nombre, apellido, edad){
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
}
let josesito = new PersonaFuncion("josesito", "Pepelupu", 30)
console.log(josesito.nombre)

// Objeto con metodos
console.log("-Ejemplo con metodos")

function PersonaFuncion2 (nombre, apellido, edad){
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;

  this.saludar = () => {console.log("Hola, me llamo " + this.nombre)}

  // this.hacerSuma = () =>
  // {console.log("Hola, sé sumar")
  // let a = Number(prompt("Decime un número"))
  // let b = Number(prompt("Decime otro número"))
  // return console.log("El resultado de la suma es: ", a + b)
  // }
}

let andresito = new PersonaFuncion2("Andresito", "Cacaruense", 50)
andresito.saludar()

// console.log(andresito.hacerSuma())

// Objetos con clases
console.log("Objeto con clases")

class Persona3 {
  constructor(nombre, apellido, edad){//El constructor toma los parametros
    this.nombre = nombre;//Luego la estructura es igual, se usa el this.
    this.apellido = apellido;
    this.edad = edad;
  }

  saludar(){
    console.log("Hola, me llamo: " + this.nombre)//Cuando se hace con clases, se puede definir la función de esta manera
  }
} 

let kakaroto = new Persona3("Kakaroto", "Namek", 27)

console.log(kakaroto.nombre)
kakaroto.nombre = "Goku"
console.log(kakaroto.nombre)
kakaroto.saludar()
*/

// ARRAYS
/*
let array = [1,2,3];
console.log(array)

let arrayVacio = [];
console.log(arrayVacio)

let arrayDeLetras = ["A", "B", "C", "D"]

for (let i = 0; i < arrayDeLetras.length; i++){
  console.log(arrayDeLetras[i])//En cada vuelta muestra el objeto del array que corresponda a esa posición. [i] es igual a indicarle la posición del elemento
}

//A) Metodo lenght:
// console.log("Lenght")
let array2 = [1,2,3,4,5]
console.log("Propiedad lenght: " + array2.length)
//Tambien lo puedo usar con un string:
let string = "Hola, me llamo pepelepuy"
console.log(string.length)

//B) Metodo push:
// console.log("Push")
//Agrega un elemento al FINAL del array
let arrayFamilia = ["Maxi", "Roxi", "Alan", "Joe"]
console.log(arrayFamilia)
arrayFamilia.push("Evee")
console.log(arrayFamilia)

//C) Metodo unshift
// console.log("Unshift")
//Agrega un elemento al FINAL del array
arrayFamilia.unshift("Batman")
console.log(arrayFamilia)

//D Metodo POP
// console.log("pop")
//Me permite eliminar el último elemento de array, tambien puedo almacenarlo en una variable si así lo deseo. No se le pasa parametro

arrayFamilia.pop()
console.log(arrayFamilia)
// let eliminado = arrayFamilia.pop()
// console.log(eliminado)

//E) Metodo shift
// console.log("shift")
//Elimina el primer elemento del array

// let eliminadoShift = arrayFamilia.shift()
// console.log("El elemento eliminado es: " + eliminadoShift)

//F) Metodo splice
// console.log("splica")
// Me permite eliminar uno o varios elementos del array
//Funciona con dos parametros, el primero es el indice, el segundo la cantidad de veces que lo debe eliminar
// console.log(arrayFamilia)
// arrayFamilia.splice(3,2)
// console.log(arrayFamilia)
// Si los quiero guardar en una variable: 
let eliminados = arrayFamilia.splice(3,2)
console.log(arrayFamilia)

//G) Metodo join
// console.log("join")
//Me permite crear un string con los elementos del array
//Admite un valor por parametro, el mismo será el que divida a los elementos. Ej (-,/). El separador por defecto es la ","
// let stringFamilia = arrayFamilia.join("-")
// console.log(stringFamilia)

// H) Metodo concat
// Me permite unir dos arrays retornando uno nuevo
console.log("concat")
let familiaUnidaOtraVez = arrayFamilia.concat(eliminados)
console.log(familiaUnidaOtraVez)

//I) Metodo slice
// console.log("Slice")
//Me retorna una copia del array. Puedo especificar que indice quiero que copie.
//Le paso por parametro un valor de inicio y uno de fin(este último no se incluye)

let familiaAdicional = familiaUnidaOtraVez.slice(3,6)//Siempre sumarle uno más
console.log(familiaAdicional)

//J) Metodo indexOf
// console.log("indexOf")
//Me retorna el indice de un elemento
let indiceMaxi = familiaUnidaOtraVez.indexOf("Maxi")
console.log(indiceMaxi)
//Si no encuentra nada, retorna -1
//Si hay varios elementos con el mismo nombre, retorna el primero

//K) Metodo includes
// console.log("includes")
//Similar a indexOf, solo que returna un booleano
// let booleanoFamiliar = familiaUnidaOtraVez.includes("Maxi")
// console.log(booleanoFamiliar)

//L) Metodo reverse
// console.log("Reverse")
//Invierte el orden de los elementos del array
// console.log(familiaUnidaOtraVez)
// console.log(familiaUnidaOtraVez.reverse())
*/
// FUNCIONES DE ORDEN SUPERIOR
/*
//  Ejemplo con arrays
let arrayPersonas = ["jose", "pepe", "Robert", "Francisco"]

function muestroNombresEnMayuscula (array, funcion){
  for (let nombre of array){
    funcion(nombre)
  }
}

function pasarMayuscula (nombre){
  return console.log(nombre.toUpperCase())
}

muestroNombresEnMayuscula(arrayPersonas, pasarMayuscula)

// Metodos de busqueda para Arrays
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

const fideos = new Producto("Fideos", 100);
const harina = new Producto("Harina", 250);
const gaseosa = new Producto("Coca Cola", 180);
const pan = new Producto("pan", 120);

let arrayProductos = [fideos, harina, gaseosa, pan];
console.log(arrayProductos);

//a) For each: Recorre el array y ejecuta una función por cada elemento
console.log("ForEach: ");
// Por cada Elemento de el array, bloque de codigo{}:
arrayProductos.forEach((producto) => {
  console.log(producto);
});
arrayProductos.forEach((producto) => console.log(producto.precio));

//b) Find: Busca un elemento en el array y retorna el primero que coincida. Si no lo encuentra, returna "undefined"
console.log("Find");
const buscado = arrayProductos.find(
  (producto) => producto.nombre === "Coca Cola"
);
console.log(buscado);

//c) Filter: Recibe una funcion comparadora por parametro y retorna un nuevo array con los elementos que cumplan la condición. Retorna todos los que coincidan con la busqueda. Si no hay coincidencias me retorna un array vacio

console.log("Filter");
const arrayProductosMenos200 = arrayProductos.filter(
  (producto) => producto.precio < 200
);
console.log(arrayProductosMenos200);

//d) Some: Funciona igual que el filter, con la diferencia que returna true o false si encuentra o no el elemento:
console.log("Some");
const hayFideos = arrayProductos.some(
  (producto) => producto.nombre === "Fideos"
);
console.log("Hay fideos? " + hayFideos);

//e) Map: Me permite crear un nuevo array con todos los elementos del original pero tranformados
console.log("Map");
// Ej: Si quiero crear un array de productos pero que ahora tenga el IVA incluido.

const arrayProductosConIva = arrayProductos.map((producto) => {
  return {
    nombre: producto.nombre,
    precio: producto.precio * 1.21,
  };
});
// El return va solo si queremos retornar más de 1 propiedad, de lo contrario, sintaxis abreviada sin () ni {}
console.log(arrayProductosConIva);
console.log("Array solo con nombres de producto");
const arrayNombresProductos = arrayProductos.map((producto) => producto.nombre);
console.log(arrayNombresProductos);

//f) Reduce: Nos permite obtener un único valor despues de iterar sobre un array
console.log("Reduce");
//Ejemplo: El precio total de un carrito.
//Podemos tomar dos parametros: Un acumulador y el elemento a operar. Tambien debemos colocar el valor inicial del acumulador.

let precioTotal = arrayProductos.reduce(
  (acumulador, producto) => acumulador + producto.precio,
  0
);
console.log("Precio Total: ");
console.log(precioTotal);

//g) Sort: Me permite reordenar un array según que criterio definamos.
//Metodo destructivo
console.log("Sort");

const numeros = [99, 58, 74, 8, 23];

numeros.sort((a, b) => a - b);
console.log(numeros)

//Ahora con un array de objetos: 
console.log("Ahora con un array de objetos")
arrayProductos.sort((a, b) => a.precio - b.precio)
console.log(arrayProductos)
*/

//DOM
 /*
//En el DOM  cada etiqueta representa un objeto nodo.
//Todos los nodos son accesibles para js a través del objeto global "Document"
console.log(document)

//El html collection lo puedo trabajar como un array
//Podemos hacerlo de 5 formas diferentes:

//1)getElementById: Se suele crear una variable con el mismo nombre que el ID:
const tituloPrincipal = document.getElementById("tituloPrincipal")
console.log(tituloPrincipal)

//2)//GetelementByClassName - toma el mismo nombre que las clases de los elementos que la contengan. Devuelve todos los objetos que contengan esa clase en forma de html collection 

const nombres = document.getElementsByClassName("nombres")
console.log(nombres)

//3)getElementsByTagName: Me devuelve los que contengan esa etiqueta

const meses = document.getElementsByTagName("li")
console.log(meses)

//4)QuerySelector: Este metodo nos permite seleccionar nodos con la misma sintaxis que usamos en css

//querySelectorAll si son varios objetos, de lo contrario sin el "All"
const queryNombres = document.querySelectorAll(".nombres")
console.log(queryNombres)

// --------------------------------------

//MODIFICAR NODOS
//innerText - innerHtml - ClassName

//innerText: Me permite acceder al contenido textual de algún elemento del DOM y así poder inyectarle un contenido.

tituloPrincipal.innerText = "Modificamos el texto desde JS";

//innerHtml: Me permite agregar contenido HTML en el interior del NODO.

tituloPrincipal.innerHTML = `<p> Esto es un párrafo <p>`;
//Si quiero agregar y no remplazar uso "+="
// tituloPrincipal.innerHTML += `<p> Esto es un párrafo <p>`;

//en este caso, agrega un <p> dentro de la etiqueta <h1> Podría usarse por ejemplo para incorporar etiquetas dentro de un div
//Genera un nuevo nodo en el interior del nodo padre

//ClassName

// tituloPrincipal.className = "titulo";
//Me permite insertar una clase en el elemento

// ----------------------------------------

//AGREGARO NODOS - ETIQUETAS DE 0

//PADRE
const contenedor = document.getElementById("contenedor"); // seleccionamos el ID

//ELEMETO SUELTO
const parrafo = document.createElement("p"); //Creo un elemento nuevo
parrafo.innerText = "Este párrafo esta generado desde JS"; //Con innerText le agrego contenido textual
parrafo.className = "titulo"; //Le agregamos una clase

//Ahora necesitamos que el elemento suelto se vinculo con el padre, y pase a ser el hijo. Sin este paso, el archivo no se visualizara en el navegador

contenedor.appendChild(parrafo);

//appendChild agrega un nodo al final del contenedor

// ------------------------------------------

//ELIMINAR NODO:
// parrafo.remove()

// ---------------------------------------------

//MODIFICAR EL DOM PARA MOSTRAR LOS ELEMENTOS DE UN ARRAY:

const arrayPersonas = ["Jose", "Miguel", "Roberto", "Ivan"];

const listaPersonas = document.getElementById("listaPersonas");

for (let persona of arrayPersonas) {
  let itemLista = document.createElement("li"); //Por cada vueta del bucle crea un "Li"
  itemLista.innerText = persona; //A ese li le introduce el texto de cada elemento "persona"
  listaPersonas.appendChild(itemLista); //vincular todos los "li" generados a el nodo "listaPersonas"
}

// --------------------------------------------
//Y si trabajamos con objetos:

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

const aceite = new Producto("aceite", 150);
const harina = new Producto("harina", 200);
const pan = new Producto("pan", 50);
const leche = new Producto("leche", 100);

const arrayProductos = [aceite, harina, pan, leche];

const contenedorProdutos = document.getElementById("contenedorProductos"); //Acá, estamos elegiendo el div que tiene ese ID

arrayProductos.forEach((producto) => { //por cada producto del array:
  let div = document.createElement("contenedorProductos"); //Creamos un elemento div
  div.innerHTML = `<p> ${producto.nombre} </p>
    <p> Precio: ${producto.precio}</p>
    <button> Agregar al carrito </button>
    `; //con backticks agregamos las etiquetas
  contenedorProdutos.appendChild(div);//enlazamos el hijo al padre
});
*/

//EVENTOS
/*
//Los eventos son la manera que tenemos en JS de controlar las acciones de los usuarios, y definir un comportamiento cuando se produzcan.

//Como se utiliza? Utilizamos una herramienta que se denomina manejador de eventos.

//Hay varias formas de realizar esto

//1) METODO addEventListener

//const.addEventListener(//primer parametro: "acción del usuario", segundo parametro: "función con ejecución de codigo")

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  console.log("Me hiciste click");
});

//El evento click se despara cuando cliqueammos el mouse sobre un elemento determindo.
//Usamos una función flecha para asociar un comportamiento a ese evento
//2) Utilizando las propiedas del NODO

const btnDos = document.getElementById("btnDos");

btnDos.onclick = () => {
  console.log("Segunda formaaaaa");
};

//3) Escribiendo la función en el HTML

function jsEnHTML() {
  console.log("Soy una función desde el HTML");
}

// en este metodo, definimos la función en js, y la declaramos en el html :

// {
//   <button onclick="jsEnHTML()">Soy una función desde el HTML</button> 
// }

//EVENTOS MÁS COMUNES

// Eventos con el mouse
//Se producen con la interacción del usuario con el mouse

const caja = document.getElementById("caja");

//mouseover / mouseout: El puntero del mouse se mueve sobre / sale del elemento

caja.onmouseout = () => {
  console.log("Salió el puntero del elemento!");
};
caja.onmouseover = () => {
  console.log("Ingresa el mouse");
};

//mousemove: El movimiento del mouse sobre el elemento
caja.onmousemove = () => {
  console.log("Moviendo mouse");
};

//mousedown/mouseup: Se oprimie/suelta el botón del ratón sobre un elemento

caja.onmousedown = () => {
  console.log("mousedown");
};

//EVENTOS CON TECLADO
//Se producen con la intereacción del usuario con el teclado

const campoTexto = document.getElementById("campoTexto");

//Keydown: cuando se presiona una tecla
campoTexto.onkeydown = () => {
  console.log("Presionaste una tecla");
};

//Keyup: cuando se suelta una tecla
campoTexto.onkeyup = () => {
  console.log("Soltaste una tecla");
};

//EVENTO CHANGE

//Se activa cuando cambia el valor de un elemento

const texto = document.getElementById("texto");

texto.addEventListener("change", () => {
  console.log("Ingresaste texto (evento change)");
}); // Se activa cuando le doy enter

//Evento input: Me permite ejecutar una función cada vez que se ingrese  texto a un campo.

texto.addEventListener("input", () => {
  console.log(texto.value);
});

//La propiedad value me permite acceder al texto ingresado por el usuario

//A trabajar con formularios

//Evento submit: Se activa cuando nuestro formulario es enviado

class Cliente {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}

const arrayClientes = []

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  //Evito el comportamiento por default del form
  e.preventDefault(); //poniendo la e como parametro y utilizando este metodo prevenimos el default y que se refresque la página con el submit
  const nombre = document.getElementById("nombre");
  const apellido = document.getElementById("apellido");
  console.log(`El nombre ingresado es: ${nombre.value}`);
  console.log(`El apellido ingresado es: ${apellido.value}`);
  console.log("Formualario enviado");
  
  //Creamos un objeto cliente:
  
  const cliente = new Cliente(nombre.value, apellido.value)
  arrayClientes.push(cliente)
  
  //Verificamos por consola:
  
  console.log(arrayClientes)
  
  //Reseteamos el formulario para que al darle enviar se reinicien los campos y esten vacios
  formulario.reset();
});
*/

//JSON y Storage
/*
//STORAGE
//Nos permite guardar datos de manera local en el navegador
//El navegador nos ofrece dos formas de guardar los datos:

//LocalStorage: Almacena los datos de forma indefinida, gasta que el usuario los borre de forma manual.

//SessionStorage:Almacena los datos hasta que el usuario cierra el navegador.

//1) Trabajamos con el local storage:
//Para guardar datos en el localStorare vamos a utilizar un metodo que se llama setItem():

//este metodo recibe dos parametros: El nombre de la clave y el nombre del valor a almacenar.

//Ejemplo a: Almacenar un saludo:

localStorage.setItem("saludo", "Hola Mundo");

//Ejemplo b: almacenar un number:

localStorage.setItem("numero", 1234);

//Ejemplo c: Almacenar un booleano:

localStorage.setItem("booleano", true);

//Para recuperar esos valores utilizamos el metodo getItem():

let saludo = localStorage.getItem("saludo"); //el unico parametro es el key/clave
console.log(saludo);

//Ejemplo: recuperamos un número

let numero = localStorage.getItem("numero");
console.log(numero);

//Ejemplo: recuperamos un booleano

let booleano = localStorage.getItem("booleano");
console.log(booleano);

//TRABAJAMOS CON EL SESSION STORAGE:

//Se define igual que el localStorage
sessionStorage.setItem("saludo", "Hola mundo2");
sessionStorage.setItem("numero", "1234");
sessionStorage.setItem("booleano", "true");

//Se recupera igual que el localStorage
let nombre2 = sessionStorage.getItem("saludo");
console.log(nombre2);

//Recorrer con un bucle
//No podemos utilizar un for of ya que no es un objeto iterable
//Se puede recorrer con el metodo key() que nos devuelve un array con las key/clave del storage.
console.log("recorremos storage");

for (let i = 0; i < localStorage.length; i++) {
  let clave = localStorage.key(i)
  let valor = localStorage.getItem(clave)
  console.log(clave, valor)
}

//Eliminar datos del storage:
//Para eliminar datos del storage utilizamos el metodo removeItem()

localStorage.removeItem("saludo")

//Para eliminar toda la info del storage:

localStorage.clear()

//ALMACENAR OBJETOS EN EL STORAGE
//Tenemos que tener en cuenta que todo lo que se almacena en en el storage esta en formato string.
//Por lo tanto, si queremos almacenar un objeto, debemos convertirlo en un string.

//JSON: JavaScript Object Notation
//Es un string con un formato especial

//Cómo convertimos un objeto a json?

//Utilizamos el metodo JSON.stringify()

const samuel = {
  nombre: "samuel",
  apellido: "Toca",
  edad: 25,
  casado: false
}

//Ahora pasamos el objeto a formato JSON

const samuelJSON = JSON.stringify(samuel)
console.log(samuelJSON, typeof samuelJSON)

//Ahora, en este formato sí puedo almacenar el objeto en el localStorage:

localStorage.setItem("samuel", samuelJSON)

//Como recuperar el JSON del localStorage y voler a transformarlo en formato objeto: debo utilizar el metodo JSON.parse()

const personaJSON = localStorage.getItem("samuel")
const persona = JSON.parse(personaJSON)

console.log(persona, typeof persona)

//Ejemplo de reserva

class Reserva{
  constructor(nombreCliente, apellidoCliente, numeroReserva, habitacion){
    this.nombreCliente = nombreCliente;
    this.apellidoCliente = apellidoCliente;
    this.numeroReserva = numeroReserva;
    this.habitacion = habitacion
  }
}

const reservas = []

const formulario = document.getElementById("formulario")
formulario.addEventListener("submit", (e)=>{
  e.preventDefault()
  agregarReserva()
})

function agregarReserva(){
  const nombre = document.getElementById("nombre").value
  const apellido = document.getElementById("apellido").value
  const reserva = document.getElementById("reserva").value
  const habitacion = document.getElementById("habitacion").value
  const nuevaReserva = new Reserva (nombre, apellido, reserva, habitacion)
  reservas.push(nuevaReserva)
  console.log(reservas)
  
  formulario.reset()
}

const contenedorReservas = document.getElementById("contenedorReservas")
const verReservas = document.getElementById("verReservas")

verReservas.addEventListener("click", ()=>{
  contenedorReservas.innerHTML = ""; //Siempre es recomendable limpiar el dom mediante un string vacio
  reservas.forEach(reserva => {
    const div = document.createElement("div")
    div.innerHTML = `<div>
    <p>Nombre: ${reserva.nombreCliente}</p>
    <p>Apellido: ${reserva.apellidoCliente}</p>
    <p>Numero de reserva: ${reserva.numeroReserva}</p>
    <p>Habitación: ${reserva.habitacion}</p>
    </div>
    
    `
    contenedorReservas.appendChild(div)
  })
})
*/

//WORKSHOP
/*
//TU ALMACEN ONLINE.COM - CARRITO DE COMPRAS

//Qué funcionalidad debería tener un carrito de compras?

//1) Mostrar productos en el HTML de forma dinamica.
//2) Agregar productos al carrito.
//3) Evitar la carga de productos repetidos en el carrito.
//4) Mostrar el carrito en el HTML de forma dinamica.
//5) Eliminar productos del carrito.
//6) Calcular el total de la compra.
//7) Vaciar el carrito.
//8) Guardar carrito en el local storage.

class Producto {
  constructor(id, nombre, precio, img){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
    this.cantidad = 1;
  }
}

const arroz = new Producto (1, "Arroz", 100, "../img/arroz.jpg")
const azucar = new Producto (2, "Azucar", 50, "../img/azucar.jpg")
const fideos = new Producto (3, "Fideos", 80, "../img/fideos.jpg")
const mermelada = new Producto (4, "Mermelada", 150, "../img/mermelada.jpg")
const queso = new Producto (5, "Queso", 200, "../img/queso.jpg")
const sal = new Producto (6, "Sal", 30, "../img/sal.jpg")
const tomate = new Producto (7, "Tomate", 70, "../img/tomate.jpg")
const yerba = new Producto (8, "Yerba", 120, "../img/yerba.jpg")

//Creamos un array con todo nuestro catalogo de productos:

const productos = [arroz, azucar, fideos, mermelada, queso, sal, tomate, yerba]

//Creamos el array carrito

let carrito = []

//CARGAR CARRITOS DESDE EL LOCAL STORAGE
//Si hay algo en el local storage, lo cargamos en el carrito, sino, que inicialice vacío

if(localStorage.getItem("carrito")){
  carrito = JSON.parse(localStorage.getItem("carrito"))
}


const contenedorProductos = document.getElementById("contenedorProductos")

function mostrarProductos(){
  productos.forEach(producto => {
    const card = document.createElement("div")
    card.classList.add("col-xl-3", "col-md-6", "col-xs-12")
    card.innerHTML = `
    <div class="card">
           <img class= "card-img-top imgProductos" src="${producto.img}" alt="${producto.nombre}">
        <div class="card-body">
            <h5 class="card-title text-center">${producto.nombre}</h5>
            <p class="card-text text-center fw-bold ">Precio: $${producto.precio}</p>
            <button class="btn colorBoton" id="boton${producto.id}">Agregar al carrito</button>
        </div>
   </div>   
    `
    contenedorProductos.appendChild(card)
    //Agregar productos al carrito
    const boton = document.getElementById(`boton${producto.id}`)
    boton.addEventListener("click", ()=>{
      agregarAlCarrito(producto.id)
    })

  })
}


mostrarProductos()

//MOSTRAR EL CARRITO

const contenedorCarrito = document.getElementById("contenedorCarrito")
const verCarrito = document.getElementById("verCarrito")

verCarrito.addEventListener("click", ()=>{
  mostrarCarrito()
})


//FUNCIÓN PARA MOSTRAR EL CARRITO

function mostrarCarrito (){
  contenedorCarrito.innerHTML = ""
  carrito.forEach((producto) =>{
    const card = document.createElement("div")
    card.classList.add("col-xl-3", "col-md-6", "col-xs-12")
    card.innerHTML = `
    <div class="card">
           <img class= "card-img-top imgProductos" src="${producto.img}" alt="${producto.nombre}">
        <div class="card-body">
            <h5 class="card-title text-center">${producto.nombre}</h5>
            <p class="card-text text-center fw-bold ">Precio: $${producto.precio}</p>
            <p class="card-text text-center fw-bold ">Cantidad: ${producto.cantidad}</p>
            <button class="btn colorBoton" id="eliminar${producto.id}">Eliminar producto</button>
        </div>
   </div>   
    `
    contenedorCarrito.appendChild(card)
    //Elminar producto del carrito
    const boton = document.getElementById(`eliminar${producto.id}`)
    boton.addEventListener("click", ()=>{
      eliminarDelCarrito(producto.id)
    })
  })
  calcularTotal() 
  
}

//FUNCIÓN AGREGAR AL CARRITO
function agregarAlCarrito (id){
  const producto = productos.find((producto) => producto.id === id)
  const productoEnCarrito = carrito.find((producto) => producto.id === id)
  if (productoEnCarrito){
    productoEnCarrito.cantidad++
  } else {
    carrito.push(producto)
    localStorage.setItem("carrito", JSON.stringify(carrito))
  }
  mostrarCarrito()
  calcularTotal()
  }
  

//FUNCIÓN QUE ELIMINA EL PRODUCTO DEL CARRITO
function eliminarDelCarrito(id){
  const producto = carrito.find((producto) => producto.id === id)
  const indice = carrito.indexOf(producto)
  carrito.splice(indice, 1)
  producto.cantidad = 1
  mostrarCarrito()
  localStorage.setItem("carrito", JSON.stringify(carrito))
}

//VACIAMOS TODO EL CARRITO

const vaciarCarrito = document.getElementById("vaciarCarrito")
vaciarCarrito.addEventListener("click", ()=>{
  eliminarTodoElCarrito()
})

//FUNCION PARA ELIMINAR TODO EL CARRITO

function eliminarTodoElCarrito (){
  carrito.forEach((producto) =>{
    producto.cantidad = 1
  })
  carrito = []
  mostrarCarrito()
  localStorage.clear()
}

//MOSTRAMOS MENSAJE CON EL TOTAL DE LA COMPRA

const total = document.getElementById("total")

function calcularTotal(){
  let totalCompra = 0;
  carrito.forEach((producto)=>{
    totalCompra += producto.precio * producto.cantidad
  })
  total.innerHTML = `
  Total: ${totalCompra} `
}
*/

//OPERADORES AVANZADOS
/*
//Sugar sintax
//La utilización de operadores avanzados para simplificar el código

//1) Operador ++

let i = 1
i = i + 1 //o con operador avanzado sería:
i++
console.log(i)

//Aplicando en un cliclo
let aux = 0
while(aux < 5){
  console.log(aux)
  aux++
}

//2) Operador ternario
//Es una simplificación del condicional IF.....ELSE.

//Sintaxis: 3 partes si o si.
// La condición
// Código que se ejecuta cuando la condición es verdadera
// Código que se ejecuta cuando la condición es falsa

let temperatura = 30

 //Metodo tradicional con if
if(temperatura > 30){
  console.log("Hace calor")
} else {
  console.log("No hace calor")
}

 //Metodo con op ternario

temperatura > 30 ? console.log("Hace calor") : console.log("No hace calor")

//El op ternario ya tiene el return implicito, es decir que me resulta muy util para retornar datos de forma condicional

let haceCalor = temperatura > 30 ? true : false

// Caso muy usado: Levantar un array de carrito del local storage

let carrito = []
localStorage.setItem("Carrito", JSON.stringify(carrito))

//Si el carrito esta vacio lo inicializamos:
//Declaro la variable, luego la condición es si hay un array de carrito en el ls, si es true me trae los datos, si  false el carrito se inicializa vacio
carrito = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : []

//Verificamos con console log
console.log(carrito)

//3) Operador logico and &&
//Es una simplificación del condicional if en una sola linea de código:

let nombreCliente = "Samuel"
//Se declara la condición, si es true se ejecuta lo que viene despues del &&
nombreCliente === "Samuel" && console.log("Bienvendido Samuel")
//Otro ejemplo:
const carrito = []
carrito.length === 0 && console.log("El carrito esta vacio")

let vacio = carrito.length === 0 && "El carrito esta re vacio"
console.log(vacio)

//En caso que la condición no se cumpla devuelve un false

//3) Operador lógico  || OR
//Primero tenemos que saber lo que en JS se denomina "Falsy"
//Valores falsy: false, 0, "", null, unfedined, NaN.
console.log("Operador logico OR: ")
//Verifica si la primera linea es un falsy, no la ejecuta
console.log(0 || "Miau")
console.log(1 || "Miau")

//Ejemplo: Pedimos datos al usuario:

let nombre = prompt("Ingrese su nombre")
console.log(nombre || "El usuario no ingresó su nombre")

// 5) Operadores nullish coalescing
// Es una simplificación del operador or
//Trabaja igual que el or, pero solo admite como valores nullish a null y undefined

console.log("Operador nullish coalescing")
console.log(0 ?? "Nullish")

let nombre = prompt("Ingrese su nombre") ?? "Cliente anonimo"
console.log(nombre)

//Acceso condicional a un objeto

console.log("Acceso condicional a un objeto: ")

const cliente = null

console.log(cliente?.nombre || "El cliente no existe")

//DESESTRUCTURACIÓN DE OBJETOS

const alumno = {
  nombre: "Maxi",
  apellido: "Perez",
  edad: 25,
  curso: "Java",
} 

//Como haciamos hasta ahora para poder traer un dato en particular del objeto:

const nombreAlumno = alumno.nombre
console.log(nombreAlumno)

//Pero, con la desestructuración se hace así:

//Sintaxis
//Uso la palabra reservada let o const, luego entre {} pongo los atributos y luego del = el nombre del objeto
let {nombre, apellido, edad, curso:carrera} = alumno
//De esta manera me crea variables con los datos almacenados entre los {} que luego puedo usar para trabajar sobre ellas

console.log(apellido)
//Tener cuidado que no haya otra variable ya existente con el mismo nombre de la resultante de este metodo

//Si intento con una propiedad que no existe me retorna "Undefined"

// Alias:
//Luego de la propiedad a llamar, ponemos : y el alias para llamarlo de esa manera, por ej, en vez de curso, carrrera

console.log(carrera)
//Qué pasa si una de las propiedades del objeto es otro objeto:

const gato = {
  duenio: "Juan",
  raza: "Felino",
  edad: 5,
  direccion: {
    calle: "Av. siempre viva",
    numero: 123,
    ciudad: "Sprinfield"
  }
}


//Desestructuramos, como direccion es un objeto dentro de otro, pongo los : para acceder a sus propiedades

let {duenio, raza, edad:edadGato, direccion:{calle, numero, ciudad}} = gato
console.log(calle)

const auto = {
  marca: "Ford",
  modelo: "Fiesta",
  anio: 2019,
  color: "Azul"
}

let {marca, modelo, anio, color} = auto;
console.log(marca)
auto.marca = "Chevrolet"
console.log(marca)

//Con la variable auxiliar no corremos riesgo de modificar la propiedad de el objeto original
marca = "Nissan"
console.log(marca)

const alumno = {
  nombre: "Juan",
  edad: 23,
  curso: "JavaScript",
  direccion: {
    calle: "Av. Siempreviva",
    numero: 742,
    ciudad: "Sprinfield"
  }
}
//                        Acá desestructuramos un objeto y los objetos que tiene dentro. Sintaxis: Obj:{propiedades de obi}
let {nombre, edad, curso, direccion:{calle, numero, ciudad}} = alumno

//Desestructuración en parametros:

//                     Como parametro, toma variables auxiliares generadas con la desestructuración de X objeto
function mostrarDatos ({nombre, edad}){
  console.log(`Hola, mi nombre es ${nombre} y mi edad es de ${edad}`)
}
//Luego, solo le paso como parametro el objeto del cual vienen esas propiedades desestructuradas
mostrarDatos(alumno)

//DESESTRUCTURACIÓN DE ARRAYS

const numeros = [10,20,30,40,50]
//Es similar al de objetos, solo que uso [] en vez de {}
//Puedo poner el nombre que desee ya que respetará el orden del array según indice. Por eso "primero" es igual a 10 y "segundo" igual a 20
let [, , tercero, cuarto, quinto] = numeros

console.log(tercero)

//Si me quiero saltear alguna propiedad tengo que dejar el espacio vacio

//OPERADOR SPREAD

//Spread de Arrays:

const nombres = ["Juan", "Pedro", "Maria", "Jose"]
console.log(nombres)

//Si yo utilizo el operador spread "..."

console.log(...nombres)

//Esto es equivalente a:

console.log(nombres[0], nombres[1], nombres[2], nombres[3])

//Lo que hace el operador spread es enviar cada uno de sus elementos como parametros individuales a la función.

//Ejemplo de donde lo podemos aplicar:

const numeritos = [1,2,3,4,5]
console.log(Math.max(...numeritos))

//SPREAD DE OBJETOS

const yerba = {
  nombre: "Yerba",
  precio: 250
}

//Hasta ahora, si yo queria copiar el objeto se lo asignaba a una nueva variable
const nuevaYerba = yerba
//Al hacer un console log vemos la misma info
console.log(yerba)
console.log(nuevaYerba)
//El problema es que si yo modifico nuevaYerba tambien se modifica yerba ya que es una referencia de dicho objeto

nuevaYerba.nombre = "Yerba Mate"
console.log(yerba)
console.log(nuevaYerba)

//Si quiero copiar un objeto, la manera correcta es la siguiente:

const nuevaYerba2 = {...yerba}
console.log("Yerba: ")
console.log(yerba)
//Efectivamente el precio del obeto yerba no se vio modificado ya que ahora nuevaYerba2 no comparte la misma referencia

//Si quiero copiar un objeto y agregarle una nueva propiedad, puedo hacerlo de la siguiente manera: 

const nuevaYerba3 = {...yerba, marca:"Marolio"}
console.log(nuevaYerba3)

//Copiando arrays

const a = ["a","b","c"]
const b = [1,2,3]

const nuevoArrayCombinado = [...a, ...b]
console.log(nuevoArrayCombinado)

//REST PARAMETERS
//Tambien podemos utilizar el op spread para recibir un número indefinido de parametros en una función.

function mostrarNumeros (...numeros){
  console.log(numeros)
}

mostrarNumeros(1,2,3,4,5,6,7,8,9,10)
mostrarNumeros(1,2,3)
*/ 

//LIBRERIAS Y FRAMEWORK
/*
//SWEET ALERT

//Podemos modificar el title, icon, comportamiento, poner imagen de fondo. Ver documentación

const boton = document.getElementById("boton")
boton.addEventListener("click", ()=>{
  Swal.fire("Hola mundo")//Swal es el objeto, fire el metodo. En este caso le pasamos un string, al apretar el boton saldra una alerta con ese estilo
})

//Personalizamos el sweet alert
//Debemos seguir el formato de objeto, separando por coma las propiedades

const botonDos = document.getElementById("botonDos")

botonDos.addEventListener("click", ()=>{
  Swal.fire({
    title: "Hola comisión",//Titulo
    text:  "Esto es un gatito",//Texto del cuerpo
    icon:  "warning",//Icono, se puede encontrar en la documentación
    imageUrl: "https://placekitten.com/200/286",//Imagen de fondo
    confirmButtonText: "Aceptar",//Texto del boton
    background: "gray",//Fondo del alert
    backdrop: "purple",//Cambiar el color del fondo de la pantalla al activar el alert
  })
})

//Con sweet alert tambien podemos hacer loguins y demás, esta todo en recipe gallery

//Ejemplo eliminando un producto de un carrito ficticio

const botonTres = document.getElementById("botonTres")

let carrito = ["arroz", "fideos", "pan"]

botonTres.addEventListener("click", ()=>{
Swal.fire({//Se desestructuran los parametros del objeto, visto en clase operadores avanzados
  title: "¿Estas seguro de eliminar los fideos?",
  icon: "warning",
  background: "white",
  backdrop: "gray",
  confirmButtonText: "Aceptar",//Boton de confirmar y el texto que contiene
  showCancelButton: true,//Mostrar un boton de cancelar
  cancelButtonText: "Cancelar",//Texto del boton de cancelar
  cancelButtonColor: "red",//Color del booton de cancelar
  confirmButtonColor: "green",//Color del boton de confirmar

}).then((result) =>{
  if(result.isConfirmed){//Si el usuario hizo click en aceptar, hacer lo siguiente:
    carrito = carrito.filter((producto) => producto !== "fideos")//Con esto filtramos el array con todos los productos menos "fideos"
    console.log(carrito)
    Swal.fire({//Alerta que indica que el producto fue eliminado
      title: "Producto eliminado",
      icon: "success",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "green",
      background: "white"
    })
  }
})
})

//Para saber si el usuario aceptó o canceló, tenemos que concatenar con un metodo que se llama then, explicado en linea 1334 y en clase promesas

//Ahora simulamos un inicio se sesión

const botonCuatro = document.getElementById("botonCuatro")

botonCuatro.addEventListener("click", ()=>{
  Swal.fire({
    title: "Login",
    html: `
    <input type="text" id="email" class="swal2-input" placeholder="Email">
    <input type="password" id="password" class="swal2-input" placeholder="Password">`,//Inyectamos html de la manera habitual
    confirmButtonText: "Enviar",
    showCancelButton: true,
    cancelButtonText: "Cancelar"
  }).then((result)=>{
    if(result.isConfirmed){//si hizo click en el boton aceptar vamos a hacer lo siguiente: 
        const mail = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        console.log("Email: " + mail + " Password: " +  password)
        Swal.fire({
          title: "Datos enviados",
          icon: "success",
          confirmButtonText: "Aceptar"
        })
    }
  })
})

//TOASTIFY

//Lo utilizamos para mostrar mensajes de notificaciones personalizados

//1) Llamar a toastify y pasamos por paramtro un objeto con las propiedades que queremos modificar
//2) Concatenamos con el metodo showToast(). para mostrar el mensaje

const botonCinco = document.getElementById("botonCinco")
botonCinco.addEventListener("click", ()=>{
  Toastify({
    text: "Producto agregado al carrito",//Texto de la notificación
    duration: 3000,//Duración de la notificación
    gravity: "top",//Posición vertical de la notificación
    position: "right",//Posición horizontal de la notificación
    destination: "https://google.com",//Si quiero que al darle click a la notificación me lleve a otro sitio
    // style:{background: "green"},//si queremos darle un estilo personalizado a la notificación
    className: "btn"//Tambien le podemos dar estilo con el nombre de la clase
  }).showToast()//Para que se muestra la notificación, cerramos con un showToast()
})

//LUXON
//Libreria para trabajar con fechas y horas
//La clase principal de Luxon es DateTime. Para ser más ordenados podemos referneciarla en una varaiable global para facilitar su acceso.
const DateTime = luxon.DateTime;

//Metodo .local() Recibe parametros que van desde el año hasta los milisegundos

const fechaAnioNuevo = DateTime.local(2024,1,1,00,00)
console.log(fechaAnioNuevo)

//Me devuelve un formato poco claro, si lo quiero tranformar en algo más legible puedo usar "toString()"
console.log(fechaAnioNuevo.toString())

//Metodo now() Me permite obener la fecha y hora de este momento.

const fechaActual = DateTime.now()
console.log(fechaActual.toString())

//Puedo crear una fecha pasando parametros:

const navidad2023 = DateTime.fromObject(
  {day:25, hour:00, month:12}
)
console.log("Fecha de navidad: ")
console.log(navidad2023.toString())

//ToLocaleString() me lo muestra más amigable
//Year, month, day, second, weekday
console.log(fechaActual.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY))

//Tranformación
//Me permite hacer calculos sobre fechas y horas

//Sumamos días
const fechaMasTresDias = fechaActual.plus(
  {days:3}
)
console.log("Fecha más 3 días")
console.log(fechaMasTresDias.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY))

//Para restar es igual solo que usamos minus

//La clase Duration:

const Duration = luxon.Duration

//Podemos crear una duración pasando un objeto con los valores que queremos modificar:

const duracion = Duration.fromObject(
  {days:3, hours:5, minutes:30}
)

//A la fecha actual le sumo la duración

const fechaMasDuracion = fechaActual.plus(duracion)
console.log("Fecha más duración")
console.log(fechaMasDuracion.toLocaleString(DateTime.DATETIME_SHORT))
*/

//ASINCRONIA Y PROMESAS
/*
//Programación sincronica

console.group("Programación Sincrónica")
console.log("Primera tarea")
console.log("Segunda tarea")
console.groupEnd("--")

//Programación asincrónica

console.group("Programación asincrónica")

setTimeout(()=>{
console.log("Tarea A")
}, 3000)
//Sintaxis: setTimeOut(Entre parentesis pongo una función flecha, luego de la misma una "," y el tiempo en milisegundos en que quiero que se ejecute)
setTimeout(()=>{
  console.log("Tarea B")
}, 2000)
//Si ambas funciones tienen el mismo tiempo, se ejecutaran como sincronicas, es decir en orden de cascada

//Ejemlo utilizando setTimeOut para modificar el color del body despues de 3 segundos

setTimeout(()=>{
document.body.style.backgroundColor = "bisque"
}, 3000)

//Incluso lo puedo utilizar con un array:

for(let letra of "Hola Mundo"){
  setTimeout(()=>{
    console.log(letra)
  }, 4000)
}

//Call stack

//Es una lista  en donde se apilan las distintas tareas a ejecutar por nuestro programa. JS es un lenguaje de un solo hilo, por lo que se ejecuta una tarea a la vez.

//Event loop
//Es un bucle que se ejecuta constantemente y que se encarga de revisar si el call stack esta vacio. Si lo esta, entonces revisa la cola de tareas y la envia al call stack para que se ejecute.

//SET INTERVAL

//Tiene la misma sintaxis que el setTimeOut pero la unidad de tiempo es un intervalo para la repetición de la función asociada.

setInterval(()=>{
  console.log("Tic")
}, 1000)

//Me permite ejecutar funciones de manera reiterativa tras los milisegundos indicados, hasta que indiquemos su detención o cierre de la aplicación.

//Para poder cortar esta repetición, utilizo clearInterval()

let contador = 0;

const interval = setInterval(()=>{//Para usar clearInterval(), debo almacenar el intervalo en una variable
  console.log("Tuki")
  contador++

  if(contador == 5){
    clearInterval(interval)//En esta linea le indico que cuando el contador llegue a 5, limpie el intervalo de la función interval
  }

}, 2000)


//Ejemplo de uso de setInterval para cambiar de color el fondo del body cada 3 segundos utilizando un array de colores.

const colores = ["red", "green", "yellow", "blue", "orange", "purple"]

let i = 0
const intervalDos = setInterval(()=>{
document.body.style.backgroundColor = colores[i]
i++;

if(i== colores.length){
  clearInterval(intervalDos)
}


},500)


//Ejemplo cambiandole a un boton con el ID


const botonIntervalo = document.getElementById("botonIntervalo")

let j = 0

const intervaloTres = setInterval(()=>{
  botonIntervalo.style.backgroundColor = colores[j]  
  j++

  if(j == colores.length){
    clearInterval(intervaloTres)
  }

}, 1000)


//PROMESAS

//Qué es una promesa?
//Una promesa en JS es un objeto que representa un evento a futuro
//Una promesa puede ser resuelta o rechazada
//Es nuestra forma de trabajar con servidores

//Sintaxis

const falsasPromesas = () =>{
  return new Promise ((resolve, reject) =>{
    //Resolve = Se ejecuta cuando la promesa se cumple
    //reject = Se ejecuta cuando la promesa no se cumple




  })
}
console.log(falsasPromesas())
//promise <pending> Esta pendiente porque todavía no hay conexión.

//Puede tener 3 estados, pending, fullfilled(cuando lo logramos) y rejected(Cuando fue rechazado)

class Usuario {
  constructor(user, password){
    this.user = user;
    this.password = password
  }
}

const usuario1 = new Usuario("usuarioUno", 1234)
const usuario2 = new Usuario("usuarioDos", 1234)
const admin = new Usuario("admin", 4321)

const usuarios = [usuario1, usuario2, admin]


const solicitarUsuarios = (estado) =>{
  return new Promise ((resuelto, rechazado) =>{
    if(estado == true){
      resuelto(usuarios)
    } else {
      rechazado("Segui intentando, ratón!")
    }
  })
}
console.log(solicitarUsuarios(true))

//THEN & CATCH

//Then = Se ejecuta cuando la promesa se cumple
//Catch = Se ejecuta cuando la promesa no se cumple

//Ejemplo con then & catch tomando el loguin de usuarios

solicitarUsuarios(true)
.then((usuarios) =>{
  console.table(usuarios)
})
.catch((error) =>{
  console.error(error)
})
.finally(() =>{
  console.log("Se termina el proceso, se ejecuta el finally")
})
*/





