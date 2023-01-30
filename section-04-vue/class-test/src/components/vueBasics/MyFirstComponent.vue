<!-- html -->
<template>
  <div>
    <p>
      Mi nombre es {{ myName }}, he nacido en {{ countryOfBirth }} y tengo
      {{ age }} años
    </p>
    <p>
      Mi nombre es {{ myInfo.myName }}, he nacido en
      {{ myInfo.countryOfBirth }} y tengo {{ myInfo.age }} años
    </p>
  </div>

  <section>
    <div class="counter">
      <button @click="decreaseCounter">-</button>
      <p>{{ counter.count }}</p>
      <button @click="increaseCounter">+</button>
      <p></p>
    </div>
  </section>

  <section>
    <p>
      Me llamo {{ infoDina.name }} y tengo {{ infoDina.age }} años, por lo que
      he nacido el {{ infoDina.dob }}. Mi película favorita es
      {{ favoriteFilm }} ya que la he visto {{ times }} veces, y mi comida
      favorita es la {{ favoriteFood }}. Mis hobbies son :
      {{ infoDina.hobbies[0] }}, {{ infoDina.hobbies[1] }},
      {{ infoDina.hobbies[2] }}, y el {{ infoDina.hobbies[3] }}. En cuanto a los
      estudios, la primaria la estudié el el colegio
      {{ infoDina.education.primaria }}, la secundaria en
      {{ infoDina.education.secundaria }} y bachillerato en
      {{ infoDina.education.bachillerato }}. Finalmente mi grupo de música
      preferido es {{ infoDina.favouriteMusic }}.
    </p>
  </section>
</template>

<!-- Logica -->
<script setup>
//los dos métodos conocidos
//ref() para datos primitivos
//reactive() no primitivos (arrays, obbjetos)

//primer paso
import { ref, reactive } from "vue";

// segundo paso

//Datos primitivos
const myName = ref("Dina Yamani");

const myNameTwo = "Idriouich";

const countryOfBirth = ref("Barcelona");

const age = ref(28);

//Datos no primitivos

const myInfo = reactive({
  myName: "Dina",
  countryOfBirth: "Barcelona",
  age: 28,
});

const counter = reactive({
  count: 0,
  title: "My counter",
});

const increaseCounter = () => {
  counter.count++;
};

const decreaseCounter = () => {
  counter.count--;
};

// EJERCICIO 001
// Van a crear 4 variables
// 3 de ellas seran ref()
// 1 de ellas sera reactive()
// reactive === quiero que se creen un objeto con las siguientes keys/claves, ["name", ageNUMERO, "dob", hobbies[ARRAY], educacion{objeto, 3 claves[primaria, secundaria, unviserdiad]}, "Su grupo favorito de musica"]
// ref ==== pelicula preferida
// ref === # cantidad de veces que se han visto esta pelicula
// ref === comida preferida

const favoriteFilm = ref("Los Vengadores");
const times = ref(5);
const favoriteFood = ref("Tarta muerte por chocolate");
const infoDina = reactive({
  name: "dina",
  age: 28,
  dob: "6 de Marzo del 1994",
  hobbies: ["karate", "musica", "comer", "cine"],
  education: {
    primaria: "CEIP Rosa Sensat",
    secundaria: "INS Can Peixauet",
    bachillerato: "INS Terra Roja",
  },
  favouriteMusic: "Los Aldeanos",
});
</script>
<!-- Estilos CSS -->
<style scoped>
section .counter,
counter {
  display: flex;
  margin: 2rem 0;
}
section .counter button {
  padding: 1rem;
  font-size: 1em;
}
section .counter p {
  font-size: 2em;
  padding: 0 2rem;
}
</style>
