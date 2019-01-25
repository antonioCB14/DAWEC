<template>
  <div class="tiempo">
    <h2>Proyecto VUE.js - Antonio Rodríguez Montilla</h2>
    <hr>
    <Tiempo></Tiempo>
  </div>
</template>

<script>

import Tiempo from '@/components/Tiempo.vue'

export default {
  name: 'tiempo',
  components: {
    Tiempo
  }
}
</script>