import SlotPlayground from './components/slot-playground'
import FilezEntry from './components/filez-design-playground'
import HelloWorld from './components/HelloWorld.vue'

const routes = [
    { path: '/', component: HelloWorld },
    { path: '/filez-entry', component: FilezEntry },
    { path: '/slot-playground', component: SlotPlayground },
]

export default routes