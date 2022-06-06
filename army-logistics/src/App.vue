<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <slot-playground></slot-playground>
    <filez-entry/>
  </div>
</template>

<script>
import SlotPlayground from './components/slot-playground'
import FilezEntry from './components/filez-design-playground'

export default {
  name: 'App',
  components: {
    SlotPlayground,
    FilezEntry,
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
