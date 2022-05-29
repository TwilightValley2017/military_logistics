
var browserEnum = {
    ie: 'IE',
    chrome: 'Chrome',
    firefox: 'Firefox',
    safari: 'Safari',
}

// var elementNodeTypeEnum = {
//     [Node.ELEMENT_NODE]: 'Node.ELEMENT_NODE',
//     [Node.TEXT_NODE]: 'Node.TEXT_NODE',
//     [Node.COMMENT_NODE]: 'Node.COMMENT_NODE',
// }

var browser = (function browserDetector() {
    var userAgent = window.navigator.userAgent

    var browser = {}

    // console.log({
    //     '/msie/i.test(userAgent)': /(msie [(\d).]+)/i.test(userAgent),
    //     '/(?=.*compatible)(?=.*MSIE)^.*$/i.test(userAgent)': /(?=.*compatible)((?=.*MSIE) [(\d).]+)/i.test(userAgent),
    // })
    // /(?<!\S)\b(\d+|\d+\.\d+)\b(?!\S)/.test(' 10.009 ')

    if (/(?=.*compatible)(?=.*MSIE) ([\d.]+)/i.test(userAgent)) {
        browser.type = browserEnum.ie
    } else if (/(?=.*gecko)(?=.*firefox)^.*$/i.test(userAgent)) {
        browser.type = browserEnum.firefox
    } else if (/(?=.*applewebkit)(?=.*safari)(?=.*chrome)^.*$/i.test(userAgent)) {
        browser.type = browserEnum.chrome
    } else if (/(?=.*applewebkit)(?=.*safari)(?!.*chrome)^.*$/i.test(userAgent)) {
        browser.type = browserEnum.safari
    }

    console.log(RegExp.$1, RegExp.$2, RegExp.$3)

    return browser
})()

if (browser.type === browserEnum.ie) {
    document.attachEvent('onreadystatechange', startup)
} else {
    document.addEventListener('DOMContentLoaded', startup)
}

console.log({
    '当前浏览器为': browser.type,
    'UA': window.navigator.userAgent,
})

function startup(event) {
    console.log({
        event: event,
        readystate: document.readyState,
    })

    // parseDOM(document.documentElement)
    viewportSize()
    // getAttributeDOM()
    // documentNode()
    // parentDOM()
    // nodeValue()

    setTimeout(function(){
        // createElementDOM()
        // addDIV()
        // loadScript('./static/js/basic/snail.js')
        // elementStyle()
    }, 1000)
}
