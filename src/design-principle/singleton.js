
// function Week(index, daysOfWeek) {
//     this.index = index
//     this.daysOfWeek = daysOfWeek
// }

// function singletonWrapper(Constructor) {
//     var singletonInstance = Object.create(Constructor.prototype)
//     return function () {
//         if (!(singletonInstance instanceof Constructor)) {
//             Constructor.apply(singletonInstance, Array.prototype.slice.call(arguments))
//         }
//         return singletonInstance
//     }
// }

// let WrappedWeek = singletonWrapper(Week)
// let sunday = new WrappedWeek(0, 'SUNDAY')
// let saturday = new WrappedWeek(6, 'SATURDAY')
// console.log(sunday === saturday, Object.getPrototypeOf(sunday))
// sunday.index = 10


class Week {
    static #singletonInstance
    constructor(index, daysOfWeek) {
        if (!Week.#singletonInstance) {
            this.index = index
            this.daysOfWeek = daysOfWeek
            Week.#singletonInstance = this
        } else {
            Week.#singletonInstance.index = index
            Week.#singletonInstance.daysOfWeek = daysOfWeek
        }
        return Week.#singletonInstance
    }
}

let saturday = new Week(6, 'Saturday')
let sunday = new Week(0, 'Sunday')

console.log({saturday, sunday}, saturday === sunday)


// class Week {
//     constructor(index, daysOfWeek) {
//         this.index = index
//         this.daysOfWeek = daysOfWeek
//         // if (new.target !== undefined) {
//         //     throw new Error('单例模式，使用静态函数 getInstance 获取单例构造函数')
//         // }
//     }

//     static getInstance() {
//         let instance = new Object()
//         function constructorClosure() {
//             instance = Reflect.construct(Week.prototype.constructor, Array.prototype.slice.call(arguments))
//             return instance
//         }
//         return constructorClosure
//     }
// }

// let WrappedWeek = Week.getInstance()


  