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
    documentFragment: {
        loader: 'document-fragment/loader.js',
        tank: {
            template: 'document-fragment/tank/template.js',
            style: 'document-fragment/tank/DRY.css',
        },
        mvvm: {
            template: 'document-fragment/mvvm/template.js',
            handler: 'document-fragment/mvvm/mvvm.js'
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
// dynamicScriptLoader({ url: DIRECTORY.documentFragment.tank.template })
// dynamicStyleLoader({ href: DIRECTORY.documentFragment.tank.style })
dynamicScriptLoader({ url: DIRECTORY.documentFragment.mvvm.template })
dynamicScriptLoader({ url: DIRECTORY.documentFragment.mvvm.handler })

dynamicScriptLoader({ url: DIRECTORY.documentFragment.loader })