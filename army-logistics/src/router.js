import Vue from 'vue'
import VueRouter from 'vue-router'
import SlotPlayground from './components/slot-playground'
import FilezEntry from './components/filez-design-playground'
import Layout from './components/HelloWorld.vue'

import ExchangeSend from './components/exchange/non-admin/exchange-send'
import ExchangeReceive from './components/exchange/non-admin/exchange-receive'
import ManagerExchangeLayout from './components/exchange/manager/layout'
import ExchangeChannel from './components/exchange/manager/exchange-channel'
import ExchangeLog from './components/exchange/manager/exchange-log'

import MixShareCreate from './components/mixshare/mixshare-create'
import MixShareDetails from './components/mixshare/mixshare-details'

Vue.use(VueRouter)

const beforeEnterHandler = (to, from, next) => {
    if (!localStorage.getItem('EXCHANGE').includes('on')) {
        alert('未购买')
        next(from)
        return
    }
    next()
}

const routes = [
    { 
        name: 'entry',
        path: '/',
        component: Layout, /* 上下结构布局的模板组件 */
        children: [
            // mixshare
            {
                path: 'mixshare-create',
                component: MixShareCreate,
            },
            {
                path: 'mixshare-details',
                component: MixShareDetails,
            },
            // exchange 非管理员角色
            {
                path: 'exchange-send',
                component: ExchangeSend,
                beforeEnter: beforeEnterHandler,
            },
            {
                path: 'exchange-receive',
                component: ExchangeReceive,
                beforeEnter: beforeEnterHandler,
            },
            // exchange 管理员角色
            {
                path: 'manager/exchange',
                component: ManagerExchangeLayout, /* nav + content 的布局模板组件 */
                redirect: 'manager/exchange/channel',
                children: [
                    {
                        path: 'channel',
                        component: ExchangeChannel,
                    },
                    {
                        path: 'log',
                        component: ExchangeLog,
                    },
                ],
                beforeEnter: (to, from, next) => {
                    console.log({
                        to: to.path,
                        from: from.path,
                    })
                    if (!localStorage.getItem('EXCHANGE').includes('on')) {
                        alert('未购买')
                        next(from)
                        return
                    }
                    if (!localStorage.getItem('ROLE').includes('admin')) {
                        alert('无权限')
                        next(from)
                        return
                    }
                    next()
                }
            },
        ],
    },
    {
        path: '/filez-entry',
        component: FilezEntry,
        beforeEnter: (to, from, next) => {
            console.log({
                to: to.path,
                from: from.path,
            })
            if (localStorage.getItem('ADMIN') === 'false') {
                return false
            }
            next()
        }
    },
    {
        path: '/slot-playground',
        component: SlotPlayground,
        beforeEnter: (to, from, next) => {
            console.log({
                to: to.path
            })
            next()
        },
    },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
    next()
    if (to.path.includes('filez')) {
        console.log({
            to,
            from,
        })
    }
})

router.beforeEach((to, from, next) => {
    next()
    if (to.path.includes('slot')) {
        console.log({
            to,
            from,
        })
    }
})

export default router