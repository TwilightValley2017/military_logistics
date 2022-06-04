<template>
    <div class="card">
        <header>
            <h2>{{ dataSource.title }}</h2>
        </header>
        <main>
            <slot name="events" :events="dataSource.events"></slot>
        </main>
        <footer>
            <slot
            name="summary"
            :genre="dataSource.summary.genre" 
            :content="dataSource.summary.content">
                what day is today?
            </slot>
        </footer>
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

<style>
.card {
    display: inline-block;
    height: 250px;
    width: 200px;
    vertical-align: top;
}

header {
    height: 30px;
}

footer {
    height: 20px;
}
</style>