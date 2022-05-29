//#region 继承

function Week() { }

function Monday() {
    Week.call(this)
}

// 实例行为的继承，体现为实例的原型链，构造函数的prototype
// Monday.prototype = new Week()
// Monday.prototype.constructor = Monday
/**
 * Object.create 核心逻辑为，返回了一个其构造函数的prototype为传入对象的实例
 * 因此，配合 Object.create 的第二个参数，可代替以上两句
 */
Monday.prototype = Object.create(Week.prototype, {
    constructor: {
        value: Monday,
        writable: true,
        enumerable: true,
    }
})
// 构造函数的继承，体现为构造函数的原型链，构造函数的__proto__
Object.setPrototypeOf(Monday, Week)

// console.log({
//     'Object.getPrototypeOf(Monday)': Object.getPrototypeOf(Monday),
//     'Object.getPrototypeOf(Monday) === Week': Object.getPrototypeOf(Monday) === Week,
//     'Object.getPrototypeOf(Object.getPrototypeOf(new Monday())) === Week.prototype': Object.getPrototypeOf(Object.getPrototypeOf(new Monday())) === Week.prototype
// })

//#endregion

//#region functional programming

// class Functor {
//     constructor(val) {
//         this.val = val;
//     }

//     map(f) {
//         return new Functor(f(this.val));
//     }
// }

//#endregion

//#region 事件循环与任务队列

// function jan() {
//     console.log('January')
// }

// setTimeout(function(){
//     console.log('It`s my turn, hahaha')
//     this.jan()
// })

// setTimeout(function(){
//     console.log('It`s my turn, hohoho')
//     this.jan()
// })

//#endregion

//#region null and undefined

/**
 * #SCENE undefined
 * 变量未经初始化
 */
// (function () {
//     // 作为局部变量可被重写
//     var undefined = 'not is undefined';
//     console.log({ undefined: undefined }); //"not is undefined"
//     console.log(typeof undefined) // "string"
// })()

// 作为全局变量不可重写
// var undefined = 'not is undefined';
// console.log(undefined); // undefined
// console.log(typeof undefined) // undefined
// console.log({ 'window.undefined': window.undefined })

// Uncaught ReferenceError: monday is not defined
// console.log(monday)
// console.log(monday === undefined)

// 唯一可操作符
// console.log(typeof monday)

// The void operator evaluates the given expression and then returns undefined.
// console.log({ 'void 0': void 0 });
// (function () {
//     var tue
//     if (tue === void 0) {
//         console.log({ tue: tue })
//     }
// })()

/**
 * #SCENE null
 * 初始赋值，解除引用
 */
// var $container = document.getElementById("container")
// console.log({ $container: $container })

// var wed = null
// if (wed === null) {
//     console.log({ wed: wed })
// }

// var thur = {
//     am: 10,
//     pm: null,
// }

// console.log({
//     'thur.pm': thur.pm,
//     'thur.next': thur.next
// })

//#endregion

//#region 类型转换

//#region 强制类型转换

//#region Boolean() 函数

/**
 * #SCENE 当被转换值为原始类型
 */

// Boolean 类型，仅为简单的传入与输出
console.log({
    'Boolean(true)': Boolean(true),
    'Boolean(false)': Boolean(false),
})

// Number类型，仅 ±0 和 NaN 转换为 false
console.log({
    'Boolean(0)': Boolean(0),
    'Boolean(-0)': Boolean(-0),
    'Boolean(NaN)': Boolean(NaN),
})

// String 类型，仅空字符时为 false
console.log({
    'Boolean("")': Boolean(""),
    'Boolean("false")': Boolean("false"),
    'Boolean("0")': Boolean("0"),
})
// Boolean("0"): true
// Boolean(""): false
// Boolean("false"): true

// Undefined 类型
console.log('Undefined', Boolean(undefined))

// Null 类型
console.log('Null', Boolean(null))

/**
 * #SCENE 当被转换值为引用类型
 */
console.log({
    'Boolean({ })': Boolean({}),
    'Boolean([])': Boolean([]),
    'Boolean(function () { })': Boolean(function () { }),
})

//#endregion

//#region Number() 函数

/**
 * #SCENE 当被转换值为原始类型
 */

/**
 * 简单的传入和返回
 * - 非十进制形式以十进制形式返回
 * - 忽略前导零，忽略小数点末尾零
 */
console.log({
    'Number(0)': Number(0),
    'Number(-0)': Number(-0),
    'Number(01)': Number(01),
    'Number(1.0)': Number(1.0),
    'Number(1e1)': Number(1e1),
    'Number(0b11)': Number(0b11),
    'Number(0o11)': Number(0o11),
    'Number(0x11)': Number(0x11),
    'Number(Infinity)': Number(Infinity),
    'Number(-Infinity)': Number(-Infinity),
    'Number(NaN)': Number(NaN),
})
// Number(0): 0
// Number(0b11): 3
// Number(0o11): 9
// Number(0x11): 17
// Number(01): 1
// Number(1.0): 1
// Number(1e1): 10
// Number(-0): -0
// Number(-Infinity): -Infinity
// Number(Infinity): Infinity
// Number(NaN): NaN

// Boolean 类型
console.log({
    'Number(true)': Number(true),
    'Number(false)': Number(false)
})
// Number(false): 0
// Number(true): 1

// String 类型
// 如字符串中仅包含数值，则转换效果同传入 Number 类型
console.log({
    'Number("0")': Number("0"),
    'Number("-0")': Number("-0"),
    'Number("01")': Number("01"),
    'Number("1.0")': Number("1.0"),
    'Number("1e1")': Number("1e1"),
    'Number("0b11")': Number("0b11"),
    'Number("0o11")': Number("0o11"),
    'Number("0x11")': Number("0x11"),
    'Number("Infinity")': Number("Infinity"),
    'Number("-Infinity")': Number("-Infinity"),
    'Number("NaN")': Number("NaN"),
})
// Number("0"): 0
// Number("0b11"): 3
// Number("0o11"): 9
// Number("0x11"): 17
// Number("01"): 1
// Number("1.0"): 1
// Number("1e1"): 10
// Number("-0"): -0
// Number("-Infinity"): -Infinity
// Number("Infinity"): Infinity
// Number("NaN"): NaN

// 空字符串转换为 0
console.log('Number("")', Number(""))
// Number("") 0

// 非数值字符串，非空字符串，转换为 0
console.log({
    'Number("String")': Number("String"),
    'Number("0.1.1")': Number("0.1.1"),
    'Number("true")': Number("true"),
})
// Number("0.1.1"): NaN
// Number("String"): NaN
// Number("true"): NaN

// null
console.log('Number(null)', Number(null))
// Number(null) 0

// undefined
console.log('Number(undefined)', Number(undefined))
// Number(undefined) NaN

/**
 * #SCENE 被转换类型为引用类型
 * 先调用被传入值的 valueOf() 方法，如返回值为原始类型，依据传入原始类型的规则进行转换。
 * 如果转换结果为NaN，再调用 toString() 方法，返回一个字符串，依据传入 String 类型的规则进行转换
 */

// valueOf() 返回值为原始类型
let now = new Date()
let nowValueOf = now.valueOf()
console.log({
    'Number(now)': Number(now),
    'Number(now) === Number(nowValueOf)': Number(now) === Number(nowValueOf),
})
// Number(now): 1609054086649
// Number(now) === Number(nowValueOf): true

// valueOf() 返回值为对象自身
// 对象
let obj = {}
let objValueOf = obj.valueOf()
let objToString = objValueOf.toString()
console.log({
    'Number(obj)': Number(obj),
    'obj === objValueOf': obj === objValueOf,
    'objToString': objToString,
    'Object.is(Number(obj), Number(objToString))': Object.is(Number(obj), Number(objToString)),
})
// Number(obj): NaN
// obj === objValueOf: true
// objToString: "[object Object]"
// Object.is(Number(obj), Number(objToString)): true

// 数组
let arr = []
let arrValueOf = arr.valueOf()
let arrToString = arrValueOf.toString()
console.log({
    'Number(arr)': Number(arr),
    'arr === arrValueOf': arr === arrValueOf,
    'arrToString': arrToString,
    'Object.is(Number(arr), Number(arrToString))': Object.is(Number(arr), Number(arrToString)),
})
// Number(arr): 0
// arr === arrValueOf: true
// arrToString: ""
// Object.is(Number(arr), Number(arrToString)): true

arr.push('0b11')
let arrValueOf0 = arr.valueOf()
let arrToString0 = arrValueOf.toString()
console.log({
    'Number(arr)': Number(arr),
    'arr === arrValueOf0': arr === arrValueOf0,
    'arrToString0': arrToString0,
    'Object.is(Number(arr), Number(arrToString0))': Object.is(Number(arr), Number(arrToString0)),
})
// Number(arr): 3
// arr === arrValueOf0: true
// arrToString0: "0b11"
// Object.is(Number(arr), Number(arrToString0)): true

//#endregion

//#region String() 函数

// 调用 toString 方法
console.log({
    'String(0b11)': String(0b11),
    'String(0o11)': String(0o11),
    'String(0x11)': String(0x11),
    'String(true)': String(true),
    'String(false)': String(false),
    'String({ })': String({}),
    'String({ toString: function () { return "overriden toString()" } })': String({ toString: function () { return "overriden toString()" } }),
    'String([])': String([]),
    'String([null])': String([null]),
    'String([undefined])': String([undefined]),
    'String(["0", "1", "2"])': String(["0", "1", "2"]),
    'String(function () { return void 0 })': String(function () { return void 0 }),
})
// String(0b11): "3"
// String(0o11): "9"
// String(0x11): "17"
// String(true): "true"
// String(false): "false"
// String({ }): "[object Object]"
// String({ toString: function () { return "overriden toString()" } }): "overriden toString()"
// String(["0", "1", "2"]): "0,1,2"
// String([]): ""
// String([null]): ""
// String([undefined]): ""
// String(function () { return void 0 }): "function () { return void 0 }"

console.log({
    'String(null)': String(null),
    'String(undefined)': String(undefined),
})
// String(null): "null"
// String(undefined): "undefined"

//#endregion

//#endregion

//#region 自动类型转换（隐式转换）

//#region 一元操作符 unary

/**
 * #SCENE 递增递减操作符
 * 不可操作字面量
 */
// 类型转换规则同 Number() 函数
// let val = "0b11"
// let convertedVal = Number(val)
// console.log(++val, ++convertedVal, ++val === ++convertedVal)
// 4 4 true

/**
 * #SCENE 加减操作符
 * 可操作字面量
 */
// 类型转换规则同 Number() 函数
// let val = [1e1]
// let convertedVal = Number(val)
// console.log(+val, +convertedVal, +val === +convertedVal)
// 10 10 true

/**
 * #SCENE 布尔操作符 - 逻辑非
 */
// 类型转换规则同 Boolean() 函数
// let val = null
// let convertedVal = Boolean(val)
// console.log(!val, !convertedVal, !val === !convertedVal)
// true true true

//#endregion

//#region 二元操作符 binary

/**
 * #SCENE 布尔操作符 - 逻辑与/逻辑或
 * - 逻辑与 && ：短路操作符，效果相当于对第一个表达式进行 Boolean()，falsy为短路值时，返回第一个表达式，否则返回第二个
 * - 逻辑或 || ：短路操作符，效果相当于对第一个表达式进行 Boolean()，truthy短路值时，返回第一个表达式，否则返回第二个
 */
console.log({
    '"" || "return me"': "" || "return me",
    '[] || "return me"': [] || "return me",
    '[] && "return me"': [] && "return me",
    '"" && "return me"': "" && "return me",
})
// "" && "return me": ""
// "" || "return me": "return me"
// [] && "return me": "return me"
// [] || "return me": []

/**
 * #SCENE 乘性操作符
 */
// 类型转换规则同 Number() 函数
console.log({
    '"2" * "2"': "2" * "2",
    '[2] / "2"': [2] / "2",
    'null % "2"': null % "2",
})
// "2" * "2": 4
// [2] / "2": 1
// null % "2": 0

/**
 * #SCENE 加性操作符 - 加法
 */
// 如果操作数为数值类型、布尔类型、null或undefined，则将非数值类型进行数据类型转换，转换规则同 Number() 函数
console.log({
    'true + 0b11': true + 0b11,
    'true + false': true + false,
    'null + 1': null + 1,
    'null + undefined': null + undefined,
})
// null + 1: 1
// null + undefined: NaN
// true + 0b11: 4
// true + false: 1

// 如果其中一个操作数为字符串，则将另一个操作数进行类型转换，转换规则同调用 toString() 或 String() 方法
console.log({
    '"0b11" + 0o11': "0b11" + 0o11,
    '"1" + undefined': "1" + undefined,
    '': [0, 1, 2] + ''
})
// "": "0,1,2"
// "0b11" + 0o11: "0b119"
// "1" + undefined: "1undefined"

// 如果其中一个操作数为对象，另一个操作数不为字符串，则对每个操作进行类型转换，转换规则同 String() 函数
console.log({
    '[] + null': [] + null,
    '{ } + undefined': {} + undefined,
    '{ } + true': {} + true,
    '{ toString: function () { return "undefined+" } } + undefined': { toString: function () { return "undefined+" } } + undefined,
    'function() { return } + 0x11': function () { return } + 0x11,
})
// [] + null: "null"
// function() { return } + 0x11: "function () { return }17"
// { toString: function () { return "undefined+" } } + undefined: "undefined+undefined"
// { } + true: "[object Object]true"
// { } + undefined: "[object Object]undefined"

/**
 * #SCENE 加性操作符 - 加法
 */
console.log({
    '"23" - 3': "23" - 3,
    '"23" - "3"': "23" - "3",
    'false - true': false - true,
    'false - 1': false - 1,
    '[] - 1': [] - 1,
    '[3] - 3': [3] - 3,
    'null - 1': null - 1,
    'null - undefined': null - undefined,
})
// "23" - 3: 20
// "23" - "3": 20
// [3] - 3: 0
// [] - 1: -1
// false - 1: -1
// false - true: -1
// null - 1: -1
// null - undefined: NaN


/**
 * #SCENE 关系操作符
 */
// 两个操作数均为字符串时，比较两个字符串对应的字符Unicode编码值，并不进行类型转换
console.log({
    '"A" > "B"': "A" > "B",
    '"A".charCodeAt(0) > "B".charCodeAt(0)': "A".charCodeAt(0) > "B".charCodeAt(0),
    '"A".charCodeAt(0)': "A".charCodeAt(0),
    '"B".charCodeAt(0)': "B".charCodeAt(0),
})
// "A" > "B": false
// "A".charCodeAt(0): 65
// "B".charCodeAt(0): 66
// "A".charCodeAt(0) > "B".charCodeAt(0): false

// 所以既不要进行数值字符串的比较，也不要进行首字母的排序，那样不会得到预期的结果
console.log({
    '"a" > "B"': "a" > "B",
    '"a".charCodeAt(0) > "B".charCodeAt(0)': "a".charCodeAt(0) > "B".charCodeAt(0),
    '"a".charCodeAt(0)': "a".charCodeAt(0),
    '"B".charCodeAt(0)': "B".charCodeAt(0),
})
// "a" > "B": true
// "a".charCodeAt(0): 97
// "B".charCodeAt(0): 66
// "a".charCodeAt(0) > "B".charCodeAt(0): true

console.log({
    '"23" > "3"': "23" > "3",
    '"23".charCodeAt(0) > "3".charCodeAt(0)': "23".charCodeAt(0) > "3".charCodeAt(0),
    '"23".charCodeAt(0)': "23".charCodeAt(0),
    '"3".charCodeAt(0)': "3".charCodeAt(0),
})
// "23" > "3": false
// "23".charCodeAt(0): 50
// "3".charCodeAt(0): 51
// "23".charCodeAt(0) > "3".charCodeAt(0): false

// 两个操作数不全为字符串时，则将不为数值类型的操作数进行类型转换，转换规则同 Number() 函数
console.log({
    '"23" > 3': "23" > 3,
    '[] >= 0': [] >= 0,
    'true > false': true > false,
    'null < 1': null < 1,
})
// "23" > 3: true
// [] >= 0: true
// null < 1: true
// true > false: true

// 如果类型转换结果为 NaN，则关系操作符结果永为 false
console.log({
    'NaN > 1': NaN > 1,
    'NaN <= 1': NaN <= 1,
    '{} > 1': {} > 1,
    '{} <= 1': {} <= 1,
    'undefined > 1': undefined > 1,
    'undefined <= 1': undefined <= 1,
    '[1, 2] > 1': [1, 2] > 1,
    '[1, 2] <= 1': [1, 2] <= 1,
})
// NaN <= 1: false
// NaN > 1: false
// [1, 2] <= 1: false
// [1, 2] > 1: false
// undefined <= 1: false
// undefined > 1: false
// {} <= 1: false
// {} > 1: false

/**
 * 相等操作符 - 相等与不相等
 */
// 当两个操作数为不同类型时，将操作数转换为相同类型后，进行比较

/**
 * #SCENE 操作数均为原始类型
 */

// 将字符串类型与布尔类型进行类型转换，转换规则同 Number() 函数
console.log({
    '"1" == 1': "1" == 1,
    'true == 1': true == 1,
    'true == "1"': true == "1",
})
// "1" == 1: true
// true == 1: true
// true == "1": true

// null 和 undefined 参与比较时，不进行类型转换
console.log({
    'null == undefined': null == undefined,
    'null == 0': null == 0,
})
// null == 0: false
// null == undefined: true

/**
 * #SCENE 操作数之一为引用类型
 */

// 将引用类型操作数进行类型转换，转换规则同 Number() 函数
console.log({
    '["1"] == 1': ["1"] == 1,
    'false == [0]': false == [0],
    '{ valueOf: function () { return 1 } } == 1': { valueOf: function () { return 1 } } == 1,
})
// ["1"] == 1: true
// false == [0]: true
// { valueOf: function () { return 1 } } == 1: true

// 将日期类型操作数进行类型转换，转换规则同 String() 函数
let current = new Date()
let curStringify = current.toString()
console.log({
    'curStringify == current': curStringify == current,
})
// curStringify == current: true

//#endregion

//#region 三元操作符 ternary

console.log({
    '"" ? 1 : 0': "" ? 1 : 0,
    '[] ? 1 : 0': [] ? 1 : 0,
})
// "" ? 1 : 0: 0
// [] ? 1 : 0: 1

console.log([])


//#endregion


//#endregion

//#endregion

//#region call/apply/bind 原生js实现

// var monday = {
//     am: '11:00',
//     pm: function () {
//         console.log({
//             am: this.am,
//             arguments: arguments
//         })
//     }
// }

// #SCENE call

// Function.prototype.es3call = function (context) {
//     // 如果未指定执行上下文，为全局
//     var content = context || window
//     // this为调用call方法的目标函数（指针）
//     // 赋值后，即实现指定的上下文来调用目标函数的效果
//     content.fn = this
//     var args = []
//     for (var i = 1, len = arguments.length; i < len; i++) {
//         // 过滤第一个参数，即指定的上下文
//         args.push('arguments[' + i + ']')
//     }

//     var result = eval('content.fn(' + args + ')');
//     delete content.fn
//     return result
// }

// monday.pm.es3call({
//     am: '12:00'
// }, 1, 2, 3)

// #SCENE apply
// Function.prototype.es3apply = function (context, arrayArgs) {
//     var content = context || window
//     content.fn = this
//     var result
//     if (arrayArgs == void 0) { // NULL UNDEFINED
//         result = content.fn()
//     }
//     else if (!(arrayArgs instanceof Object)) { // Number Boolean String
//         throw TypeError('CreateListFromArrayLike called on non-object')
//     }
//     else {
//         var args = []
//         for (var i = 0; i < arrayArgs.length; i++) {
//             args.push('arrayArgs[' + i + ']')
//         }
//         result = eval('content.fn(' + args + ')')
//     }

//     delete content.fn
//     return result
// }

// monday.pm.apply({ am: '13:00' }, [1, 2, 3])

// #SCENE bind
// Function.prototype.es3Bind = function (context) {
//     //确保调用bind方法的一定要是一个函数
//     if (typeof this !== "function") {
//         throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
//     }

//     var args = Array.prototype.slice.call(arguments, 1)
//     var self = this
//     var F = function () { }
//     F.prototype = this.prototype

//     var bound = function () {
//         // 合并参数
//         var innerArgs = Array.prototype.slice.call(arguments)
//         var finalArgs = args.concat(innerArgs)
//         // 作为构造函数执行时，this 指向其自身
//         return self.apply(this instanceof F ? this : context || this, finalArgs)
//     }

//     bound.prototype = new F()
//     return bound
// }

// var func = foo.es3Bind({ a: 1 }, '1st');
// func('2nd');  // 1 100 1st 2nd
// func.call({ a: 2 }, '3rd'); // 1 100 1st 3rd
// new func('4th');  //undefined 100 1st 4th

//#endregion

//#region 基本类型，引用类型，基本包装对象

var year = {
    // mar: false,
    // apr: 0 ? 1 : NaN,
    // may: 'may',
    // jun: function () { },

    // // 不包含任何值
    // jan: undefined,
    // feb: null,

    // // es6
    // aug: 10n,
    // sep: Symbol('sep'),

    // // 对象类型
    // jul: [],
    // oct: {},
    // nov: new Date(),

    // /**
    //  * 除了 null 和 undefined之外，所有基本类型都有其对应的包装对象：
    //  * String 为字符串基本类型。
    //  * Number 为数值基本类型。
    //  * BigInt 为大整数基本类型。
    //  * Boolean 为布尔基本类型。
    //  * Symbol 为字面量基本类型。
    //  * 这个包裹对象的valueOf()方法返回基本类型值。
    //  */
    // monday: new String(1),
    // mondayMorning: String(1),

}

// objectIterator(year)

/**
 * 
 * @param {*} obj 
 */
function objectIterator(obj) {
    var bucket = Object.getOwnPropertyNames(obj)
    for (var index in bucket) {
        var prop = bucket[index]
        console.log({
            [prop]: obj[prop],
            typeof: typeof obj[prop],
            constructor: obj[prop] == null ? '--' : obj[prop].constructor.toString(),
        })
    }
}

//#endregion

