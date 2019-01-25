<template>
  <div class="notas">
    <h2>Proyecto VUE.js - Antonio Rodríguez Montilla</h2>
    <hr>
    <Lista></Lista>
    <footer><Pie></Pie></footer>
  </div>
</template>

<script>

import Lista from '@/components/Lista.vue'
import Pie from '@/components/Footer.vue'

export default {
  name: 'notas',
  components: {
    Lista,
    Pie
  }
}
</script>
