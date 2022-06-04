<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <slot-playground></slot-playground>
  </div>
</template>

<script>
import SlotPlayground from './components/slot-playground'

export default {
  name: 'App',
  components: {
    SlotPlayground,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
