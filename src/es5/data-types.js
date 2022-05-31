let monday = 0
let tuesday = '0'
let wednesday = true
let thursday = undefined
let friday = null
let saturday = Symbol('satruday')

console.group('Primitive')
console.log({
    monday: monday.toString(),
    tuesday: tuesday.toString(),
    wednesday: wednesday.toString(),
    /**
     * TypeError: undefined is not an object (evaluating 'thursday.toString')
     */
    // thursday: thursday.toString(),
    /**
     * TypeError: null is not an object (evaluating 'friday.toString')
     */
    // friday: friday.toString(),
    saturday: saturday.toString(),
})

/**
 * 太扯了
 * friday = null
 * typeof friday 输出 Object
 * friday.toString() 抛出 null is not an object (evaluating 'friday.toString')
 */

console.log({
    monday: typeof monday,
    tuesday: typeof tuesday,
    wednesday: typeof wednesday,
    thursday: typeof thursday,
    friday: typeof friday,
    saturday: typeof saturday,
})
console.groupEnd()

let jan = new Object()
let feb = new Number()
let mar = new Boolean()
let apr = new String()
let may = new Date()
let jun = new Function()
let jul = new RegExp()
let aug = new Array()

console.group('Object')
console.log({
    jan: jan.toString(),
    feb: feb.toString(),
    mar: mar.toString(),
    apr: apr.toString(),
    may: may.toString(),
    jun: jun.toString(),
    jul: jul.toString(),
    aug: aug.toString(),
})

/**
 * 只有 new Function 实例的 typeof 是 function
 */
console.log({
    jan: typeof jan,
    feb: typeof feb,
    mar: typeof mar,
    apr: typeof apr,
    may: typeof may,
    jun: typeof jun,
    jul: typeof jul,
    aug: typeof aug,
})

console.log({
    jan: jan.valueOf(),
    feb: feb.valueOf(),
    mar: mar.valueOf(),
    apr: apr.valueOf(),
    may: may.valueOf(),
    jun: jun.valueOf(),
    jul: jul.valueOf(),
    aug: aug.valueOf(),
})

console.log({
    jan: jan instanceof Object,
    feb: feb instanceof Number,
    mar: mar instanceof Boolean,
    apr: apr instanceof String,
    may: may instanceof Date,
    jun: jun instanceof Function,
    jul: jul instanceof RegExp,
    aug: aug instanceof Array,
})

console.log({
    jan: Object.prototype.toString.call(jan),
    feb: Object.prototype.toString.call(feb),
    mar: Object.prototype.toString.call(mar),
    apr: Object.prototype.toString.call(apr),
    may: Object.prototype.toString.call(may),
    jun: Object.prototype.toString.call(jun),
    jul: Object.prototype.toString.call(jul),
    aug: Object.prototype.toString.call(aug),
})

console.groupEnd()

console.group('Function')
let homeland = function() {}
function earth() {}
console.log(homeland.name, typeof homeland.name, earth.name, typeof earth.name, (function moon() {}).name)
console.groupEnd()