//#region 

let monday = {a: 1, b: 2}
let tuesday = [1, 2, 9, , 9]

console.log('a' in monday)
console.log(tuesday.length, 'length' in tuesday, 3 in tuesday)

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