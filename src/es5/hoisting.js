/**
 * Function hoisting
 */
func1()
function func1() {
    console.log({func1})
}

/**
 * Hoisting, func2 is undefined, it cannot be used as function
 * Uncaught TypeError: func2 is not a function
 */
// func2()
// var func2 = function() {
//     console.log({func2})
// }

/**
 * No hoisting
 * Uncaught ReferenceError: Cannot access 'func3' before initialization
 */
// func3()
// let func3 = function() {
//     console.log({func3})
// }

/**
 * Hoisting
 * func4: undefined
 */
console.log({func4})
var func4 = 20

