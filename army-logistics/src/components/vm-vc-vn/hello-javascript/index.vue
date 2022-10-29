<template>
  <div class="hello-js">
    <h3>{{message}}</h3>
    <fz-button type="primary" @click="greeting()" @click.native="showSomething">Hello JS</fz-button>
    <div>
        <span @click="showRealName()">Real name</span>
    </div>
  </div>
</template>

<script>
export default {
    name: 'hello-javascript',
    data() {
        return {
            message: 'JavaScript',
        }
    },
    methods: {
        greeting() {
            this.message = 'Hello JS'
        },
        showRealName(param) {
            console.log({param})
            this.message = param
        },
        showSomething(){
            console.log('show something')
        }
    }
}
</script>

<style>
.hello-js {
  background-color: orange;
  padding: 16px;
}
</style>