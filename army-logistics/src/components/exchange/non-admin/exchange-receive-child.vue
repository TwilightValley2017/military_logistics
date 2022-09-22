<template>
    <div>
        <fz-button type="primary" @click.prevent="compEventHandlerChild" @focus="printSelfChild">Login</fz-button>
        <svg width="100" height="100" @click="nativeEventHandlerChild" @focus="printSelfChild">
            <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
        </svg>
    </div>
</template>

<script>
export default {
    name: 'exchange-receive-child',
    methods: {
        nativeEventHandlerChild(e) {
            console.log(e.target)
        },
        compEventHandlerChild(e) {
            console.log(e.target)
        },
        printSelfChild(e) {
            console.log(e.target)
        }
    }
}
</script>

<style>

</style>