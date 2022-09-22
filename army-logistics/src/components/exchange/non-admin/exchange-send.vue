<template>
    <div>
        <h3>exchange send</h3>
        <fz-button type="primary" @click="login">Login</fz-button>
    </div>
</template>

<script>
export default {
    name: 'exchange-send',
    created() {
        /**
         * 调试生命周期钩子
        console.log('created of child comp', { 
            isPrivate: this.$store.state.isPrivate
        })
         */

        // console.log('created', { vm: this })
    },
    mounted() {
        // console.log('mounted', { vm: this })
    },
    methods: {
        login() {
            window.location = 'https://cn.bing.com'
            // this.$router.push({ path: '/filez-entry' })
        }
    }
}
</script>