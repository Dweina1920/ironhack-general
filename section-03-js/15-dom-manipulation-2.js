console.log("DOM Manipulation Class Continued");
console.log(document);

// Cómo manipular elementos en el DOM
// En esta sección vamos a ver:

//  -  Cómo crear elementos
//  -  Cómo establecer el contenido innerHTML/texto de un elemento
//  -  Cómo añadir un elemento
//  -  Cómo insertar un elemento antes de otro
//  -  Cómo reemplazar un elemento hijo
//  -  Cómo eliminar un elemento hijo

// Cómo crear elementos
// El código en HTML con el ID de #parent muestra un elemento padre con 5 elementos hijos. Supongamos que queremos añadir otra etiqueta div con JavaScript. Definitivamente tendríamos que crear un nuevo elemento con el método createElement(), así:
let createElement = document.createElement("div");
console.log(createElement);

console.log(document.querySelector("#firstchild"));

// Establecer algun texto mediante unos keys de innerHTML o innerTEXT
// usando innerHTML
// createElement.innerHTML =
//   "JS aunque es dificil al principio es dem cool a la larga :)";

// usando innerText
createElement.innerText =
  "JS aunque es dificil al principio es dem cool a la larga :)";
console.log(createElement);

// Como anexar elemento creado en js al doc de HTML
// apuntamos a algun elemento del dom que este en el body y vamos a usar un metodo appendCHILD!

// Version - 1 Solo Selector
let parentElement = document
  .querySelector("#parent")
  .appendChild(createElement);

// Version 2 - Añadir Clases
createElement.className = "ejemplo1";
console.log(createElement);

//* EJERCICIOS

// 1º - Crea un <p></p> dentro de un tag de tipo <div id="c"></div>
 let createP = document.createElement("P")
 createP.innerText = "He insertado la P con Dom";
 let exerciseOne = document.getElementById("insert-p").appendChild(createP);
// 2º - Crea un <div iPd="nested"></div> desde código

let createDiv = document.createElement("div")
createDiv.id = "NESTED";
createDiv.innerHTML= "Soy un Div creado con Dom";
console.log(createDiv)
insertarDiv = document.querySelector("#insert-p").firstElementChild.appendChild(createDiv)

// 3º - Crea contenido de texto del elemento <p></p> creado para introducir el siguiente texto: "Programming is my great"
//4º - Crea una función que cambie el contenido del texto de un <p></p> en función a una variable string.

const changeP = (text) => {
    createP.innerText = text
}
changeP("Dina no ha hecho las actividades")
console.log(createP)
//
//
//
//
//
//
// Block 002

// 1º - Crea un elemento de color verde y un botón para cambiar el color de verde a rojo.
const createCSSElement = document.createElement("div");
createCSSElement.innerHTML = "CSS is ready!";
let cssElement = document.getElementsByClassName("itOne").appendChild(createCSSElement);
console.log(createCSSElement)

// 2º - Crea un elemento <div></div> y asignale una clase "green-box" que haga que sea una caja de 100px de alto y ancho de color verde.
createCSSElement.classList+= "green-box";
// 3º - Crea una <div class="remove-class"></div> y elimínale la clase mediante js. La clase remove-class debe hacer que el elemento mida 100vw de ancho y 100px de alto y tener un background azul.
const sheet = document.styleSheets[0]
console.log(sheet)
// 4º 1 - Crea un botón que, al ser pulsado, introduzca en el dom un <p>Texto insertado</p>

// 5º - Crea un botón que, al ser pulsado, introduzca una tabla de tres columnas y tres filas.


