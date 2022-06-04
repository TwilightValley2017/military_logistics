<template>
    <div>
        <strong v-if="genre === 'weekday'" class="weekday">{{ genre }}</strong>
        <i v-else class="weekend">{{ genre }}</i>
        {{ content }}
    </div>
</template>

<script>
export default {
    props: [
        'genre', 'content'
    ],
    data() {
        
    },
}
</script>

<style>
.weekday {
    color: green;
}
.weekend {
    color: red;
}
</style>