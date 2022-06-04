<template>
    <div>
        <h1>{{ title }}</h1>
        <template v-for="item in cards">
            <card-unit :key="item.id" :dataSource="item">
                <template v-slot:default="summary">
                    <summary-unit :genre="summary.genre" :content="summary.content"/>
                </template>
            </card-unit>
        </template>
    </div>
</template>

<script>
import CardUnit from './card-unit.vue'
import SummaryUnit from './summary-unit.vue'

export default {
    name: 'slot-playground',
    components: { CardUnit, SummaryUnit },
    data() {
        return {
            title: "slot playground",
            cards: [
                { id: 1, title: 'card01', summary: { genre: 'weekday', content: 'Monday' } },
                { id: 2, title: 'card02', summary: { genre: 'weekday', content: 'Tuesday' } },
                { id: 3, title: 'card03', summary: { genre: 'weekend', content: 'Saturday' } },
            ],
        }
    },
}
</script>

