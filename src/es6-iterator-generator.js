// console.info('es6-iterator-generator')

// /**
//  * Iterator
//  */

// /**
//  * 尝试实现一个迭代器，实现对集合遍历的效果
//  * 迭代器的本质就是一个指针对象
//  * 指针的起始位置指向集合的第一个成员
//  * 指针对象的 next 方法，能够返回指针当前指向的元素，并将指针指向下一个成员
//  * 通过不断调用指针对象的 next 方法，直到指向最后一个成员
//  * 当集合的所有成员都被遍历后，next 方法不会再返回任何内容
//  */
// var seasons = ['Spring', 'Summer', 'Fall', 'Winter']

// function iteratorMaker(collection) {
//     var currIndex = 0

//     return  {
//         next: function() {
//             if (currIndex >= collection.length) {
//                 return null
//             }
//             return collection[currIndex++]
//         }
//     }
// }

// var iter = iteratorMaker(seasons)
// console.log({
//     '第1次调用 next': iter.next(),
//     '第2次调用 next': iter.next(),
//     '第3次调用 next': iter.next(),
//     '第4次调用 next': iter.next(),
//     '第5次调用 next': iter.next(),
// })

// /**
//  * 以上实现是一个简易的迭代器的生成方法
//  * 
//  * ES6 规定，默认的 Iterator 接口部署在数据结构的Symbol.iterator属性，或者说，一个数据结构只要具有Symbol.iterator属性，就可以认为是“可遍历的”（iterable）。Symbol.iterator属性本身是一个函数，就是当前数据结构默认的遍历器生成函数。执行这个函数，就会返回一个遍历器。
//  * 比如，ES6 的 for...of 循环，就是在使用数据结构的 Iterator 接口。
//  */

// // 数组是一个“可遍历的”数据结构，它的 Iterator 接口是部署在数组的原型对象上的，我们测试一下
// console.log(seasons[Symbol.iterator] === Array.prototype[Symbol.iterator])

// var arrayIter = seasons[Symbol.iterator]()
// console.log({
//     '第1次调用 next': arrayIter.next(),
//     '第2次调用 next': arrayIter.next(),
//     '第3次调用 next': arrayIter.next(),
//     '第4次调用 next': arrayIter.next(),
//     '第5次调用 next': arrayIter.next(),
// })

// // 一个普通对象是“不可遍历的”
// var seasonsObj = {
//     Spring: 1,
//     Summer: 2,
//     Fall: 3,
//     Winter: 4,
// }

// // 一个类数组对象也是“不可遍历的”
// var seasonsObj2 = {
//     0: 'Spring',
//     1: 'Summer',
//     2: 'Fall',
//     3: 'Winter',
//     length: 4,
//     splice: Array.prototype.splice
// }

// // for (var item of seasonsObj2) {
// //     console.log(item)
// // }

// // 改造这个对象，并部署 Iterator 接口
// var seasonsObj3 = {
//     0: 'Spring',
//     1: 'Summer',
//     2: 'Fall',
//     3: 'Winter',
//     length: 4,
//     splice: Array.prototype.splice,
//     [Symbol.iterator]: Array.prototype[Symbol.iterator],
// }

// // 这样就能够使用 for...of 进行遍历了
// console.group('部署了 Iterator 接口的对象')
// for (var item of seasonsObj3) {
//     console.log(item)
// }
// console.groupEnd()

// // Array.from 能够把类数组对象转换为真正的数据（浅拷贝）
// var seasonsObj4 = Array.from(seasonsObj2)

// console.group('对类数组对象转换后')
// for (var item of seasonsObj4) {
//     console.log(item)
// }
// console.log(seasonsObj4 instanceof Array)
// console.groupEnd()

// // Generator 函数

// /**
//  * Generator 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同
//  * Generator 函数有多种理解角度。语法上，首先可以把它理解成，Generator 函数是一个状态机，封装了多个内部状态。
//  * 其次，执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。
//  */

// /**
//  * 单从文字上理解比较晦涩，用示例来说明一下。
//  * 还记得最开始实现的那个迭代器生成函数么，它返回了一个迭代器对象（指针对象）
//  */

// // function iteratorMaker(collection) {
// //     var currIndex = 0

// //     return  {
// //         next: function() {
// //             if (currIndex >= collection.length) {
// //                 return null
// //             }
// //             return collection[currIndex++]
// //         }
// //     }
// // }

// // 使用 Generator 函数的语法改造一下迭代器生成函数
// function* iteratorMaker2(collection) {
//     var currIndex = 0

//     while(currIndex < collection.length) {
//         yield collection[currIndex++]
//     }
//     return null
// }

// var iter2 = iteratorMaker2(seasons)
// console.log({
//     '第1次调用 next': iter2.next(),
//     '第2次调用 next': iter2.next(),
//     '第3次调用 next': iter2.next(),
//     '第4次调用 next': iter2.next(),
//     '第5次调用 next': iter2.next(),
// })

/**
 * 可以看到，在使用上，最初的迭代器生成函数与改造后的 Generator 函数没有区别
 * 这样，就不难理解，Generator 函数是一个遍历器对象生成函数。返回的遍历器对象
 * 同时，如果把 yield 返回的结果看做一个一个状态，那么 Generator 函数封装了多个内部状态，这些状态，能够通过迭代器对象来访问
 * 这也是把 Generator 函数看做一个状态机的原因
 */

// console.group('同步和异步')
// console.log('开始')
// function invokedInFunc() {
//     console.log('invokedInFunc 运行中')
// }
// function func() {
//     console.log('调用 invokedInFunc 前')
//     invokedInFunc()
//     console.log('调用 invokedInFunc 后')
// }
// func()
// console.log('结束')
// console.groupEnd()

// console.group('同步和异步')
// console.log('开始')
// function invokedInFunc() {
//     console.log('invokedInFunc 运行中')
// }
// function func() {
//     console.log('调用 invokedInFunc 前')
//     setTimeout(invokedInFunc, 1000)
//     console.log('调用 invokedInFunc 后')
// }
// func()
// console.log('结束')
// console.groupEnd()

let p1 = function() {
    return new Promise((resolve, reject) => {
        console.log('开始执行p1……')
        setTimeout(() => {
            console.log('获取了省份数据')
            resolve('pID-001')
        }, 1000)
    })
}
let p2 = function(pID) {
    return new Promise((resolve, reject) => {
        console.log('开始执行p2……')
        setTimeout(() => {
            console.log(`通过省份id ${pID} 获取了城市数据`)
            resolve('cID-001')
        }, 1000)
    })
}

let p3 = function(cID) {
    return new Promise((resolve, reject) => {
        console.log('开始执行p3……')
        setTimeout(() => {
            console.log(`通过城市id ${cID} 获取了行政区数据`)
            resolve('数据初始化完成')
        }, 1000)
    })
}

// p1().then((result) => {
//     return p2(result)
// }).then((result) => {
//     return p3(result)
// }).then((result) => {
//     console.log(result)
// })

// function* func() {
//     let pID = yield p1()
//     let cID = yield p2(pID)
//     let result = yield p3(cID)
//     yield result
// }

// let iter = func()
// let pID, cID
// console.log(pID = iter.next().value)
// console.log(cID = iter.next(pID))
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())

function p1() {
    console.log('开始执行p1……')
    setTimeout(() => {
        var result = 'pID-001'
        console.log(`获取了省份数据：${result}`)
        iter.next(result)
    }, 1000)
}

function p2(pID) {
    console.log('开始执行p2……')
    setTimeout(() => {
        var result = 'cID-001'
        console.log(`通过省份id ${pID} 获取了城市数据：${result}`)
        iter.next(result)
    }, 1000)
}

function p3(cID) {
    console.log('开始执行p3……')
    setTimeout(() => {
        console.log(`通过城市id ${cID} 获取了行政区数据`)
        iter.next('数据初始化完成')
    }, 1000)
}

function* main() {
    console.log('开始执行main……')
    let pID = yield p1()
    let cID = yield p2(pID)
    let result = yield p3(cID)
    console.log(result)
    console.log('结束执行main……')
}

let iter = main()
iter.next()



let p1 = function() {
    console.log('开始执行p1……')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('获取了省份数据')
            resolve('pID-001')
        }, 1000)
    })
}
let p2 = function(pID) {
    console.log('开始执行p2……')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`通过省份id ${pID} 获取了城市数据`)
            resolve('cID-001')
        }, 1000)
    })
}

let p3 = function(cID) {
    console.log('开始执行p3……')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`通过城市id ${cID} 获取了行政区数据`)
            resolve('数据初始化完成')
        }, 1000)
    })
}

async function main() {
    console.log('开始执行main……')
    let pID = await p1()
    let cID = await p2(pID)
    let result = await p3(cID)
    console.log(result)
    console.log('结束执行main……')
}

main()

// function* main() {
//     console.log('开始执行main……')
//     var pID = yield p1()
//     pID.then(result => {
//         return yield p2(result)
//     }).then(result => {
//         return yield p3(result)
//     }).then(result => {
//         console.log(result)
//     })
//     // var cID = yield p2(pID)
//     // var result = yield p3(cID)
//     console.log('结束执行main……')
// }

// let iter = main()
// iter.next()



/**
 * 这里现回顾一下之前的 Generator 函数
 * Generator 函数能够返回一个迭代器对象，通过调用迭代器对象的 next 方法来达到遍历的目的
 * 而 next 方法返回的对象，是通过 Generator 函数中的 yield 关键字来返回的
 * 为了保证后续理解的连贯，这简单铺垫一下 Generator 函数执行的机制
 */

// function* func() {
//     console.log('开始执行……')
//     let value1 = yield 1
//     let value2 = yield ++value1
//     return ++value2
// }

// function* func() {
//     console.log('开始执行……')
//     yield 1
//     yield 2
//     return 3
// }

// function* func() {
//     console.log('开始执行……')
//     console.log('求值并打印 yield 1：', yield 1)
//     console.log('求值并打印 yield 2：', yield 2)
//     return 3
// }

// let iter = func()
// let counter = 1
// let previouValue
// let job = setInterval(() => {
//     let temp = previouValue ? iter.next(previouValue) : iter.next()
//     previouValue = temp.value
//     console.log(`第${counter}次执行 next`, temp)
//     counter+= 1
//     if (temp.done) {
//         clearInterval(job)
//     }    
// }, 1000)



// function setTimeoutWrapper() {
//     setTimeout(() => {
//         console.log('异步处理完成')
//         iter.next()
//     }, 1000)
// }

// function* main() {
//     console.log('开始执行main……')
//     yield setTimeoutWrapper()
//     console.log('结束执行main……')
// }

// let iter = main()
// iter.next()