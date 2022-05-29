/**
 * 整体加载
 * 无论模块内以何种方式输出接口
 */
// import * as week from './week.js'
// console.log({ week })

/**
 * 部分加载
 * 模块内，输出默认接口与非默认接口
 */
// import week, { monday, tuesday } from './week.js'
// console.log({ week, monday, tuesday })

// default本质：以default命名接口
// import week, { default as week2, monday, tuesday } from './week.js'
// console.log({ week: week(), week2: week2(), monday, tuesday })

/**
 * 复合写法加载
 */
import week, { weekInMonth, monInMonth } from './month.js'
console.log({ week, weekInMonth, monInMonth: monInMonth() })