function dynamicScriptLoader(params) {
    var script = document.createElement('script'),
        fn = params.callback || function() {}

    script.type = params.type || 'text/javascript';
    script.onload = function() {
        fn()
    }

    script.src = params.url
    params.id && (script.id = params.id)
    document.body.appendChild(script)
}

function dynamicStyleLoader(params) {
    var link = document.createElement('link')
    link.type = 'text/css'
    link.rel = 'stylesheet'
    link.href = params.href
    document.head.appendChild(link)
}

/**
 * 引入 src 文件夹下内容，public 与 src 文件夹属于同级静态资源文件夹，可省略 src/
 * 例如：存在 src/test.js，引入 test.js 即可
 */
var DIRECTORY = {
    userAgent: {
        localStorage: 'user-agent/local-storage.js',
    },
    css: {
        loader: 'css/loader.js',
        tank: {
            template: 'css/tank/DRY.js',
            style: 'css/tank/DRY.css',
        }
    }
}

var SCRIPT_TYPE = {
    module: 'module',
}

window.tip = function(message) {
    console.log('%c' + message, 'color: green')
}

// dynamicScriptLoader({ url: DIRECTORY.userAgent.localStorage })
dynamicScriptLoader({ url: DIRECTORY.css.tank.template })
dynamicScriptLoader({ url: DIRECTORY.css.loader })
dynamicStyleLoader({ href: DIRECTORY.css.tank.style })