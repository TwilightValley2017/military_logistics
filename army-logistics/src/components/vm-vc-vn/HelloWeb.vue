<template>
  <div class='hello-web'>
    <h1>Hello Web !!!</h1>
    <hello-java-script :class="{ 'child-bg': bg }"></hello-java-script>
  </div>
</template>

<script>
import HelloJavaScript from './hello-javascript'
export default {
  name: 'hello-web',
  components: {
    HelloJavaScript,
  },
  data() {
    return {
      bg: true
    }
  }
}
</script>

<style>
.hello-web {
  background-color:darkseagreen;
  padding: 16px;
}

.child-bg {
  background-color:darkseagreen;
}
</style>