function dynamicLoad(params) {
    var script = document.createElement('script'),
        fn = params.callback || function() {}

    script.type = params.type || 'text/javascript';
    script.onload = function() {
        fn()
    }

    script.src = params.url
    document.getElementsByTagName('head')[0].appendChild(script)
}

/**
 * 引入 src 文件夹下内容，public 与 src 文件夹属于同级静态资源文件夹，可省略 src/
 * 例如：存在 src/test.js，引入 test.js 即可
 */
var DIRECTORY = {
    userAgent: {
        localStorage: 'user-agent/local-storage.js',
    },
}

window.tip = function(message) {
    console.log('%c' + message, 'color: green')
}

dynamicLoad({ url: DIRECTORY.userAgent.localStorage })