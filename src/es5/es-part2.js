
/**
 * var 关键字重复声明
 */

// 同级作用域下，变量重复声明时如果没有初始值，则已存在变量值不会收到影响
var foo = 1
var foo
console.log(foo)

// 同级作用域下，变量重复声明时赋初始值，则已存在变量被遮蔽，原变量无法访问
// 对于基本数据类型，原变量无法访问
var foo = 1
var foo = 2
console.log(foo)

// 对于引用数据类型，原变量值仍然能够访问
var foo = { bar: 1 }
var foo1 = foo
var foo = { bar: 2 }
console.log(foo, foo1)

// 非同级作用域下，变量重复声明会遮蔽上层已存在变量，上层变量不受影响
var foo = 1
void function() {
    var foo
    console.log(foo)
    foo = 2
    console.log(foo)
}()
console.log(foo)

// 同级作用域下，变量重复声明时如果没有初始值，则已存在变量值不会收到影响
// 同级作用域下，变量重复声明时赋初始值，则已存在变量被遮蔽，原变量无法访问
// 对于基本数据类型，原变量无法访问
// 对于引用数据类型，原变量值仍然能够访问
// 以上几条规则，同样适用于函数参数与局部变量同名的情况
// 我们来改造最初那段代码，去掉函数参数默认值的逻辑，让情况变简单一些
var foo = 1
void function(foo) {
  console.log(foo)
  var foo = 2
  console.log(foo)
}(foo)
console.log(foo)

// 下面解释规则是如何产生作用的
// 函数的形参相当于在函数作用域范围进行了变量声明
// var 关键字产生变量提升效果
// 那么以上代码执行时实际为
var foo = 1
void function(foo) {
    var foo          // 重复声明，仅声明局部变量，未赋值，不影响已有形参 foo
    console.log(foo) // 这里的值来自函数的实参，即传入的全局声明的 foo 
    foo = 2
    console.log(foo) // 这里的值来自局部变量 foo，已被赋值为 2
}(foo)
console.log(foo) // 全局作用域下，未受影响

// 继续改造，使用引用类型的效果
var foo = { n: 1 }
void function(foo) {
    var bar = foo
    console.log(foo)
    var foo = { n: 2 }
    console.log(foo, bar)
}(foo)
console.log(foo)

// 总结：函数参数（形参）与局部变量共用一个作用域，即函数作用域
// 截止到此，共出现两个作用域，全局作用域和函数作用域
// 这里引入一个概念，javascript 预编译，不了解的自行扩展

// 接下来，回顾最初那段代码，其中引入了函数参数默认值的语法，同时引入了新的概念：参数作用域

// 在了解什么是参数作用域之前，先看看一下代码，对原始代码做了些改动，把参数默认值挪到了函数体内
var foo = 1;
void function (foo, bar) {
    bar = function () {
        console.log('第 2 次打印', foo) 
        foo = 3
        console.log('第 3 次打印', foo)
    }
    console.log('第 1 次打印', foo)
    var foo = 2
    bar()
    console.log('第 4 次打印', foo)
}()
console.log(foo)

// 分析以上代码，第1次打印结果不变
// 第2次打印2，为执行 foo = 2 的效果
// 第3次打印和第4次打印3，为执行 foo = 3 的效果
// 总结：bar 执行时变量 foo 会依次查到当前作用域和上层作用域，最终使用了上层作用域的 foo 变量，并拿到了 bar 执行时 foo 的值 2
// 这就是词法作用域的效果了，无论函数在执行时的上下文如果，变量查找时会按照函数声明时的绑定的作用域链进行查找

// 验证一下
var foo = 1
var barInGlobal = function (foo, bar) {
    bar = function () {
        console.log('bar 第 1 次打印', foo) 
        foo += 1
        console.log('bar 第 2 次打印', foo)
    }
    console.log(foo)
    var foo = 2
    bar()
    console.log(foo)
    return bar
}()
barInGlobal()
console.log(foo)



// 即使 bar 函数被返回到了全局作用域，对函数内 foo 变量的查找依然使用的是声明时的作用域链，而此时闭包也出现了，
// 总结：闭包的本质是词法作用域与作用域链的共同结果，而不是什么函数套函数

// 到这里全部基础概念都引入了，是时候切入正题了，我们来看函数参数默认值到底产生了什么不同
var foo = 1
void function (foo, bar = function () {
    foo = 3
    console.log(foo)
}) {
    console.log(foo)
    var foo = 2
    bar()
    console.log(foo)
}()
console.log(foo)

// 从打印结果上看，函数参数 bar 在执行的时候，foo = 3 并没有对 foo = 2 的赋值结果产生影响，似乎在 bar 内的变量 foo 和自动执行函数内的变量 foo 并不是同一个
// 那么 bar 内的变量 foo 究竟是谁呢？答案是，函数参数中的 foo
// 这里是不是有些困惑了，回顾一下之前的这段代码，就清楚了
var foo = { n: 1 }
void function(foo) {
    var bar = foo
    console.log(foo)
    var foo = { n: 2 }
    console.log(foo, bar)
}(foo)

// 当自执行函数内的 foo 被重复声明并赋值后，参数中的 foo 变量就被“遮蔽”了，在函数作用域内无法访问，而根据词法作用域的特性，bar 函数在声明时，其外层作用域为参数作用域，参数 foo 正处于这个参数作用域中，那么 bar 在执行时，依然能够访问到。

console.log("...")
var foo = { n: 1 }
void function (foo, bar = function () {
    foo.n = 3
    console.log(foo)
}) {
    var foo1 = foo
    console.log(foo)
    var foo = { n: 2 }
    bar()
    console.log(foo, foo1)
}(foo)
console.log(foo)



// 而这个参数作用域，并不是包含在函数作用域内的，似乎是同级的
// 来验证一下
console.log("...")
var foo1 = 1;
void function (foo, bar = function () {
    foo1 = 3
    console.log(foo1)
}) {
    console.log(foo)
    var foo = 2
    bar()
    console.log(foo)
}()
console.log(foo1)

// bar 函数中的 foo1 变量，在函数参数作用域中并不存在，而是直接查找到了全局作用域的 foo1 变量
// 推断，对于 bar 函数来说，存在 bar 函数作用域->参数作用域->全局作用域

var x = 1;
function f(x, y = function () { x = 3; console.log(x); }) { // 此处 x 变量处于参数作用域中，不会对参数所在的函数作用中 x 产生影响
  console.log(x) // 参数x没有默认值，也无对应实参，输出 undefined
  var x = 2 // 此处的变量提升对参数的默认值没有产生影响
  y()
  console.log(x) // 此处 x 处于函数作用域中，由于 x 被重复声明，不再使用参数作用域中的 x
}
f()
console.log(x)  // 从未受影响

/**
 * 总结，以上代码存在如下语法现象及执行原理
 * 变量重复声明
 * var 关键字变量提升
 * 变量遮蔽
 * 词法作用域和动态作用域
 * 作用域链
 * 参数默认值，参数作用域
 */




/**
 * 扩展运算符和 * rest 参数
 */

// ...
// 扩展和收敛

/**
 * 变量声明（表达式）
 * 
 * 解构赋值：
 * 变量声明匹配模式
 * 函数实参
 * 
 * 函数参数：
 * 形参
 * 实参
 * 
 */
// let foo = { mon: 1, tue: 2 }, bar = { ...foo, wed: 3 }
// console.log({ ...foo, wed: 3 })


// let { mon, ...others} = { mon: 1, tue: 3, wed: 3 }
// console.log(mon, others)
// function name(params) {
    
// let foo = { mon: 1, tue: 3, wed: 3 };
// // let { mon, ...{ tue, wed } } = foo;
// console.log(mon, tue, wed);
// }


// // let obj = {0: 'zero', 1: 'one', length: 2, [Symbol.iterator]: Array.prototype[Symbol.iterator]}
// void function(mon, ...others) {
//     console.log(mon, others)
// }(1, 2, 3, 4)


// let foo = {mon: 1, tue: 2}
// void function(mon, tue, wed) {
//     console.log({ mon, tue, wed })
// }(...foo)

// let {a, b, ...c} = {a: 1, b:1, y:1}
// console.log(a, b, c)

// let mon = Object.create({a:1, b:1})
// mon.c = 2
// let tue = { ...mon }
// void ()
// // console.log(...mon)

// let { ...wed } = mon
// console.log(wed)

// var date = new Date()
// console.log({
//     date,
//     timeZone: date.getTimezoneOffset() /60,
//     stringify: JSON.stringify(date)
// })

// var date1 = new Date('2021-12-17')
// var date2 = new Date('2021-12-17 00:00:00')
// console.log({
//     date1: date1.toString(),
//     date2: date2.toString()
// })

// var date1 = new Date('Fri Dec 17 2021 00:00:00 GMT+0900')
// var date2 = new Date('2021-12-17 00:00:00')
// console.log({
//     date1: date1.toString(),
//     date2: date2.toString()
// })

// var date3 = new Date('Fri Dec 17 2021 00:00:00 GMT+0000')
// var date4 = new Date('2021-12-17')
// console.log({
//     date3: date3.toString(),
//     date4: date4.toString()
// })

/**
 * Output:
 * data1: "Fri Dec 17 2021 08:00:00 GMT+0800 (China Standard Time)"
 * data2: "Fri Dec 17 2021 00:00:00 GMT+0800 (China Standard Time)"
 */


// var dayOfWeek = 0
// let obj = {
//     dayOfWeek: 2,
//     week: (function () {
//         var dayOfWeek
//         console.log({dayOfWeek})
//         dayOfWeek = dayOfWeek *2
//         console.log({dayOfWeek})

//         dayOfWeek = 3
//         console.log({dayOfWeek})
        
//     })()
// }

// Function.prototype.myBind = function(oThis) {
//     if(typeof this !== 'function') {
//         return;
//     }
//     var self = this,
//         args = Array.prototype.slice.call(arguments, 1);
//         console.log({args})
//     return function() {
//         console.log(args.concat(Array.prototype.slice.call(arguments)), {arguments})
//         return self.apply(oThis, args.concat(Array.prototype.slice.call(arguments)));
//     }
// }

// function foo() {
//     console.log(this.a);
// }

// var bar = foo.myBind({a: 100}, 'a', 'b', 'c', 'd')
// bar('e')

// var monday = 9
// let obj = {
//     monday: 1,
//     week: (function () {
//         console.log(this.monday)
//         var monday = this.monday * 2
//         return function () {
//             console.log(this.monday)
//         }
//     })()
// }

// // var func = obj.week.bind({monday: 2})
// // func()
// obj.week.apply(undefined)

// void (function(){
//     console.log(this.monday)
// }).apply({monday:3})

// let greetings=['hi','bye'];
// let mon = {am:1, pm:2}
// console.log(greetings, mon);
// setTimeout(function(){
//     greetings.push('goodbye');
//     mon.am = 100
// },1000);

// var A = [2, 1];
// var C = A;
// console.log(C); 
// A.sort();
// console.log(C); 

// var tueday = {mon: 1}
// console.log(tueday.am?.hour)