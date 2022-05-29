/**
 * strict mode
 * IE 9 not support
 */
// "use strict"
// x = 3.14
// console.log({ x: x })

//#region Array

var week = [1, 2, 3]

// Array.prototyp.isArray
// !(function () {
//     console.log({
//         'Array.isArray([])': Array.isArray([]),
//         'Array.isArray({})': Array.isArray({}),
//         'Array.isArray(NaN)': Array.isArray(NaN),
//         'Array.isArray(\'\')': Array.isArray(''),
//         'Array.isArray(true)': Array.isArray(true),
//         // 类数组对象
//         arguments: Array.isArray(arguments)
//     })
// })()

// Array.prototype.every
var condtionCallback = function (ele, index, currArr) {
    console.log({
        ele: ele,
        index: index,
        currArr: currArr,
        this: this
    })
    return ele < 3
}
// var saturday = Array.prototype.every.call(week, condtionCallback)

// Array.prototype.some
// var sunday = Array.prototype.some.call(week, condtionCallback)

/**
 * creates a new array
 */

// Array.prototype.map
var mapCallback = function (ele) {
    return Math.pow(ele, 2)
}
// var monday = Array.prototype.map.call(week, mapCallback)

// Array.prototype.filter
var filterCallback = function (ele, index, currArr) {
    // console.log({
    //     ele: ele,
    //     index: index,
    //     currArr: currArr,
    //     this: this
    // })
    return ele > 1
}
// var tueday = Array.prototype.filter.call(week, filterCallback, { oops: 'O_o' })

// Array.prototype.reduce
var reduceCallback = function (acc, ele, index, currArr) {
    // console.log({
    //     acc: acc,
    //     ele: ele,
    //     index: index,
    //     currArr: currArr,
    //     this: this,
    // })
    return acc + ele
}
// var wednesday = Array.prototype.reduce.call(week, reduceCallback)

// thisArgs 会影响循环次数
var thisArgs = '10a'
// var thursday = Array.prototype.reduce.call(week, reduceCallback, thisArgs)

// Array.prototype.reduceRight
// var friday = Array.prototype.reduceRight.call(week, reduceCallback, thisArgs)

// console.log({
//     week: week,
//     monday: monday,
//     tueday: tueday,
//     wednesday: wednesday,
//     thursday: thursday,
//     friday: friday,
//     saturday: saturday,
//     sunday: sunday,
// })

//#endregion
