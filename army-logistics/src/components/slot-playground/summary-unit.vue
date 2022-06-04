<template>
    <div>
        <span v-if="genre === 'weekday'" class="weekday">{{ content }}</span>
        <i v-else class="weekend">{{ content }}</i>
    </div>
</template>

<script>
export default {
    props: [
        'genre', 'content'
    ],
    data() {
        return {}
    },
}
</script>

<style>
.weekday {
    color: DodgerBlue;
}
.weekend {
    color: green;
}
</style>