<template>
  <h1>Usando "v-bind" para unificar ciertas elementos con nuestro js :)</h1>

  <h2 v-bind:id="headingId">
    Heading con un Id bindeado dinamicamente desde el script tag - LONG
  </h2>

  <h2 :id="headingIdtWO">
    Heading con un Id bindeado dinamicamente desde el script tag - SHORT
  </h2>
  <button></button>
</template>
<script>
import { ref, reactive } from "vue";
const headingId = ref("my-super-dynamic-id");
const headingIdtWO = ref("my-super-dynamic-id-2");
</script>
<style></style>
