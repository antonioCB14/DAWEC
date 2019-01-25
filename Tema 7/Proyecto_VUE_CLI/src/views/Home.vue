<template>
  <div class="home">
    <h2>Proyecto VUE.js - Antonio Rodríguez Montilla</h2>
    <hr>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
