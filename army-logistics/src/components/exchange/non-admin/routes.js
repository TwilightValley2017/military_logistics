const beforeEnterHandler = (to, from, next) => {
    if (localStorage.getItem('EXCHANGE') === null || !localStorage.getItem('EXCHANGE').includes('TRUE')) {
        alert('未购买')
        next(from)
        return
    }
    next()
}

export default [
    {
        path: 'exchange-send',
        component: () => import('./exchange-send'),
        beforeEnter: beforeEnterHandler,
    },
    {
        path: 'exchange-receive',
        component: () => import('./exchange-receive'),
        beforeEnter: beforeEnterHandler,
    },
]