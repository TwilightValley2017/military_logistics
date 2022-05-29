var tuesday = [{a:1}, {b:1}, {c: 1}]
var wednesday = [{a:10}, {b:10}, {c: 10}]
var obj = {mon: 1}

// 浅拷贝
// var january = tuesday.map(function(curr, index, currArr) {
//     console.log({index, currArr, this: this})
//     return curr
// }, obj)
// monday[0].a = 2
// console.log({monday, tuesday})

var february = tuesday.find(curr => curr.a === 1)
console.log(february)
// february?.a = 2