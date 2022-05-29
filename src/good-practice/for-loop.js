// let loop = 0
// const max = 10000
// let hitPoints = [
//     Math.round(max / 10).toString(), 
//     Math.round(max / 5).toString(), 
//     Math.round(max / 4).toString(), 
//     Math.round(max / 3).toString(), 
//     Math.round(max / 2).toString(), 
//     Math.round(max / 3 * 2).toString(), 
//     Math.round(max / 4 * 3).toString(), 
//     Math.round(max / 5 * 4).toString(), 
//     Math.round(max / 10 * 9).toString(), 
//     (max - 1).toString()]
    
// let arr = []
// start = performance.now()
// // while(loop < max) {
// //     arr.push(loop.toString())
// //     loop += 1
// // }
// while(loop < max) {
//     arr.push({
//         studentName: 'studentName' + loop.toString(),
//         studentSN: loop.toString(),
//         class: 1,
//         grade: 'Three'
//     })
//     loop += 1
// }
// end = performance.now()
// console.log({loop: end - start})

// let forCount = 0, findCount = 0
// console.time('find-for')
// for (hitPoint of hitPoints) {
//     start = performance.now()
//     for(let i=0, len = arr.length; i< len; i+=1) {
//         // if (arr[i] === hitPoint) {
//         //     break
//         // }
//         if (arr[i].studentSN === hitPoint) {
//             break
//         }
//     }
//     end = performance.now()
//     const forBreak = end - start

//     start = performance.now()
//     // arr.find(item => item === hitPoint)
//     arr.find(item => item.studentSN === hitPoint)
//     end = performance.now()
//     const findMethod = end - start

//     console.log({
//         hitPoint,
//         forBreak,
//         findMethod, 
//         faster: forBreak < findMethod ? (++forCount && 'forBreak') : (++findCount && 'findMethod')
//     })
// }
// console.timeEnd('find-for')
// console.log({forCount, findCount})
    
/**
 * 结论
 * 执行效率
 * 数组为简单类型时，forBreak 略优
 * 数组为对象类型时，forMethod 略优，数据量大于1万，优势开始明显
 * 语义
 * find Method 更易读
 * https://stackoverflow.com/questions/50843682/for-loop-with-break-vs-find-in-javascript
 */

function forReturn(params) {
    const length = 10
    const mark = 'mon'
    for(let i = 0; i < length; i++) {
        if (mark === params) {
            return 'matched'
        }
    }
    return 'noMatch'
}

forReturn('tues')