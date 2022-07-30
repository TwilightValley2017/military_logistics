const beforeEnterHandler = (to, from, next) => {
    // console.log({ to, from })

    if (localStorage.getItem('EXCHANGE') === null || !localStorage.getItem('EXCHANGE').includes('TRUE')) {
        alert('未购买')
        next(from)
        return
    }

    if (localStorage.getItem('ADMIN') === null || !localStorage.getItem('ADMIN').includes('TRUE')) {
        alert('无权限')
        next(from)
        return
    }

    next()
}

const routes = [
    {
        path: 'manager',
        component: () => import('./manager/layout'), /* nav + content 的布局模板组件 */
        redirect: 'manager/exchange-channel',
        beforeEnter: beforeEnterHandler,
        children: []
    }
]

const managerRoutes = require.context('./manager/', true, /\/routes-xchg\.js$/)
managerRoutes.keys().forEach(key => {
    // console.log({
    //     key,
    //     content: managerRoutes(key)?.default,
    // })
    if (Array.isArray(managerRoutes(key).default)) {
        routes[0].children && routes[0].children.push(...managerRoutes(key).default)
    }
})

export default routes