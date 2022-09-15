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