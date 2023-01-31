<!-- html -->
<template>
  <h1 :id="bindedId">Excercise One</h1>
  <h2 :class="bindedClassTrue && 'binded-class-true'">Excercise Two</h2>
  <h3 v-bind:style="[colorStyle, fontSizeStyle, textDecorationStyle]">Exercise 3</h3>
  <h4 :class="[changeRed && 'change-color-red', !borderOn && 'border-on']">Exercise 4</h4>
</template>

<!-- Logica -->
<script setup>
// Ejercicios Attribute Binding
 import {ref, reactive} from "vue"
// Creamos la estructura básica de un componente de vue en la que vamos a mostrar el resultado de los ejercicios. Recordad importar el componente donde sea necesario para poder ver el avance de vuestros ejercicios.

// Ej.1: Creamos un <h1> que tendrá un id bindeado. Dicho id tiene que tomar como referencia una variable que habréis creado en vuestro <script setup>. Apuntando al id en cuestión desde el <style> tag le daréis un poco de estilo (color, underline... lo que queráis).
    const bindedId =ref("binded-id")
// Ej.2: Creamos un <h2> con un binding de clase. Este binding debe asignar una clase u otra según una variable booleánica. Si la variable es verdadera el h2 debería verse de color verde. En caso contrario, NO deberíamos ver el h2 en el render.
const bindedClassTrue = ref(true)
// Ej.3: Cramos un <h3> con un binding de estilo. Este binding debe leer un array de variables que tendréis en vuestro <script setup>. Cada variable debería ser una variable reactiva con un valor de objeto que contenga diferentes estilos de CSS (los que queráis).
 
  const colorStyle=ref("color : pink")
  const fontSizeStyle = ref("fontSize : 30px")
  const textDecorationStyle =ref("textDecoration : underline")

// Ej.4: Creamos un <h4> con un binding de clase que contendrá un array. El primer elemento del array leerá una variable booleánica y solo si esta es true aplicará una clase 'red' que cambie el color a rojo. El segundo elemento del array leerá otra variable booleánica y, según si es verdadera o falsa, aisgnará un border al h4 o no.
const changeRed = ref(true);
const borderOn = ref(false)
</script>
<!-- Estilos CSS -->

<style scoped>
#binded-id{
    color: blue;
   text-decoration:underline;
}

.binded-class-true{
    color: greenyellow;
}

.change-color-red{
    color: red;
}

.border-on{
    
    text-decoration:line-through;
}
</style>
