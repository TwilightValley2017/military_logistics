<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>集成应用</h3>
    <ul>
      <li><router-view></router-view></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  created() {
    this.init()
    console.log('created of HelloWorld comp')
  },
  methods: {
    init() {
      Promise.all([
        this.$store.dispatch('getDeployMode'),
        this.$store.dispatch('anotherRequest'),
      ]).then((resp) => {
        console.log({resp})
      }).catch((err) => {
        console.log('init', {err})
      })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
