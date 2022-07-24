<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <component :is="current">
    </component>
  </div>
</template>

<script>
import SlotPlayground from './components/slot-playground'
import FilezEntry from './components/filez-design-playground'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    SlotPlayground,
    FilezEntry,
  },
  data() {
    return {
      current: HelloWorld,
    }
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
