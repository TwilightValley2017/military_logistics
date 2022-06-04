<template>
    <div>
        <h1>{{ title }}</h1>
        <template v-for="item in cards">
            <card-unit :key="item.id" :dataSource="item">
                <template v-slot:events="{ events }">
                    <i>today's todo lists</i>
                    <ul>
                        <li v-for="(todo, index) in events" :key="`${todo}${index}`">{{ todo }}</li>
                    </ul>
                </template>
                <template v-slot:summary="{ genre, content }">
                    <summary-unit :genre="genre" :content="content"/>
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
                { id: 1, title: 'card01', summary: { genre: 'weekday', content: 'Monday' }, events: ['breakfast', 'go to work'] },
                { id: 2, title: 'card02', summary: { genre: 'weekday', content: 'Tuesday' }, events: ['on annual leave'] },
                { id: 3, title: 'card03', summary: { genre: 'weekend', content: 'Saturday' }, events: ['breakfast', 'shopping'] },
            ],
        }
    },
}
</script>

