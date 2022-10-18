// #region class

class Parent {
    constructor(vnode) {
        // if (!vnode || Object.getPrototypeOf(vnode).constructor.name !== 'VNode') {
        //     throw new Error('Cannot resolve parameter of constructor, instance of VNode expected')
        // }

        this.myName = 'parent'
        this.creed = 'p creed'
    }

    get myBadge() {
        console.log('p myBadge')
        return this.myName
    }

    myCreed() {
        console.log('p myCreed')
        return this.creed
    }
}

const Child = class Child extends Parent {
    constructor() {
        super()
        this.myName = 'child'
        this.creed = 'c creed'
        // super.myCreed()
        console.log(super.myCreed)
    }
    get myBadge() {
        console.log('c myBadge')
        return super.myBadge
    }

    myCreed() {
        console.log('c myCreed')
        return super.myCreed()
    }
}

// let child = new Child()
// console.log(child.myBadge, child.myCreed(), Object.getPrototypeOf(child))

console.log(Child.prototype, Parent.prototype, Object.getPrototypeOf(Child.prototype) === Parent.prototype)
// let parent = new Parent()
// console.log(parent.myBadge, parent.myCreed())

// class VNode {
//     constructor() {
//         console.log('实例化 VNode')
//     }
// }

// let vnode = new VNode()
// console.log(Object.getPrototypeOf(vnode).constructor.name === 'VNode')
// #endregion


//#region Promise

/** 第一种写法 */
// promise
// .then((response) => console.log('first callback') || Promise.resolve(response))
// .then((response) => console.log(response))
// .catch((error) => console.log({ error }))

/** 第二种写法 */
// promise.then((response) => console.log('first callback') || Promise.resolve(response))
// promise.then((response) => console.log(response))
// promise.catch((error) => console.log({ error }))

// promise.then((response) => console.log(1) || new Promise((resolve) => setTimeout((val) => console.log(2) || resolve(val), 0, response)))
// promise.then((response) => console.log(response))
// .catch((error) => console.log({ error }))

// promise.then((response) => Promise.reject(response))
// promise.catch((error) => console.log({ error }))

//#endregion

//#region Object.freeze

// const monday = Object.freeze([{a:1}])

// const tuesday = Object.freeze({a: {b: 1}})

//#endregion

//#region Promise


//#endregion

//#region Class

// class Week { }

// class Monday extends Week { }

// console.log({
//     'Object.getPrototypeOf(Monday) === Week': Object.getPrototypeOf(Monday) === Week,
//     'Object.getPrototypeOf(Monday)': Object.getPrototypeOf(Monday),
//     'Monday': Monday
// })

//#endregion

//#region let/const

// for (let i = 0; i < 2; i++) {
//     setTimeout(function () {
//         console.log(i)
//     })
// }

// (function () {
//     if (true) {
//         let mon = 1
//     }
//     console.log({ mon: mon })
// })()

// let { mon, tue } = { mon: 1, tue: 2 }
// console.log({ mon: mon, tue: tue })

// console.log(`template string`)

// {
//     function wed() {
//         return 'wed'
//     }
// }

// console.log(wed())

// !(function () {
//     // 'use strict';
//     function f() { return 1 }
//     {
//         function f() { return 2 }
//     }
//     console.log(f() === 1)
// })()

//#endregion