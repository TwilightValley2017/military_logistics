/**
 * 动态加载 JavaScript
 * 使用 Promise 保证执行顺序与加载顺序一致
 * @param {script 标签的属性} params 
 * @returns Promise 实例
 */
function loadScript(params) {
    return new Promise(function(resolve) {
        var script = document.createElement('script'),
        fn = params.callback || function() {
            window.tip(`${script.src} loaded`)
        }

        script.type = params.type || 'text/javascript'
        script.src = params.url
        params.id && (script.id = params.id)

        script.addEventListener('load', fn)
        script.addEventListener('load', resolve)

        document.body.appendChild(script)
    })
}

function loadStyle(params) {
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
    es5: {
        dataTypes: 'es5/data-types.js',
    },
    documentFragment: {
        templateLoader: 'document-fragment/template-loader.js',
        tank: {
            template: 'document-fragment/tank/template.js',
            style: 'document-fragment/tank/DRY.css',
        },
        mvvm: {
            template: 'document-fragment/mvvm/template.js',
            handler: 'document-fragment/mvvm/mvvm.js'
        },
        anchorTag: {
            template: 'document-fragment/anchor-tag/template.js'
        },
        svgTag: {
            template: 'document-fragment/svg-tag/template.js',
            style: 'document-fragment/svg-tag/style.css'
        }
    },
}

var SCRIPT_TYPE = {
    module: 'module',
}

window.tip = function(message) {
    console.log('%c' + message, 'color: green')
}

loadScript({ url: DIRECTORY.documentFragment.svgTag.template })
.then(function() {
    return loadScript({ url: DIRECTORY.documentFragment.templateLoader })
})
.then(function() {
    // load other resources if needed
    return loadStyle({ href: DIRECTORY.documentFragment.svgTag.style })
})