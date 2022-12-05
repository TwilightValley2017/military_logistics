import VueRouter from 'vue-router'
import SlotPlayground from './components/slot-playground'
import FilezEntry from './components/filez-design-playground'
import HelloWorld from './components/HelloWorld'
// import Layout from ''

const routes = [
    {
        name: 'army',
        path: '/army',
        component: HelloWorld,
    },
    {
        name: 'entry',
        path: '/',
        component: () => import('./components/vm-vc-vn/HelloWeb.vue'), /* 上下结构布局的模板组件 */
        children: [],
    },
    {
        path: '/filez-entry',
        component: FilezEntry,
        beforeEnter: (to, from, next) => {
            next()
        }
    },
    {
        path: '/slot-playground',
        component: SlotPlayground,
        beforeEnter: (to, from, next) => {
            next()
        },
    },
]

const componentRoutes = require.context('./components/', true, /routes\.js$/)
componentRoutes.keys().forEach(key => {
    // console.log({
    //     key,
    //     content: componentRoutes(key)?.default,
    // })
    if (Array.isArray(componentRoutes(key).default)) {
        routes[0].children && routes[0].children.push(...componentRoutes(key).default)
    }
})

console.log({ routes })

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.length === 0) {
        next(false)
        return
    }
    next()
})

router.beforeEach((to, from, next) => {
    next()
    // console.log({ to, from })
})

export default router