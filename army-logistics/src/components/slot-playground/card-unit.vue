<template>
    <div>
        <h2>{{ dataSource.title }}</h2>
        <slot :genre="dataSource.summary.genre" :content="dataSource.summary.content">Here is slot</slot>
    </div>
</template>

<script>
export default {
    props: {
        dataSource: Object,
    },
    data() {
        return {}
    },
}
</script>