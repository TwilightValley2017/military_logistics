const validateRole = () => new Promise((resolve) => {
    setTimeout(() => {
        if (localStorage.getItem('ADMIN') === null || !localStorage.getItem('ADMIN').includes('TRUE')) {
            resolve(false)
        } else {
            resolve(true)
        }
    }, 2000)
})

const validateLicense = () => new Promise((resolve) => {
    setTimeout(() => {
        if (localStorage.getItem('EXCHANGE') === null || !localStorage.getItem('EXCHANGE').includes('TRUE')) {
            resolve(false)
        } else {
            resolve(true)
        }
    }, 2000)
})

const routes = [
    {
        path: 'manager',
        component: () => import('./manager/layout'), /* nav + content 的布局模板组件 */
        redirect: 'manager/exchange-channel',
        children: [],
        beforeEnter: async (to, from, next) => {
            let hasLicense = await validateLicense()
            if (!hasLicense) {
                alert('未购买')
                location.href = '/'
                return
            }
        
            let isAdmin = await validateRole()
            if (!isAdmin) {
                alert('无权限')
                location.href = '/'
                return
            }
        
            next()
        },
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

const nonAdminRoutes = require.context('./non-admin/', true, /\/routes-xchg\.js$/)
nonAdminRoutes.keys().forEach(key => {
    // console.log({
    //     key,
    //     content: managerRoutes(key)?.default,
    // })
    if (Array.isArray(nonAdminRoutes(key).default)) {
        nonAdminRoutes(key).default.map(route => {
            route.beforeEnter = async (to, from, next) => {
                let hasLicense = await validateLicense()
                if (!hasLicense) {
                    alert('未购买')
                    /**
                     * 不能使用 next(from) 作为统一处理的目标页面
                     * from 只能为站内路由地址，无法处理站外地址
                     */
                    location.href = '/'
                    return
                }
                next()
            }
        })
        routes.push(...nonAdminRoutes(key).default)
    }
})

export default routes