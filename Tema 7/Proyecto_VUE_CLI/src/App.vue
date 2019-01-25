<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Notas</router-link> |
      <router-link to="/tiempo">El Tiempo</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
}
</style>
