<template>
  <div>
    <h3>exchange manager</h3>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'exchange-manager',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
