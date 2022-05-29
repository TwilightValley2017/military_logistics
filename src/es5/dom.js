
function viewportSize() {
    console.log({
        'document.documentElement.scrollHeight': document.documentElement.scrollHeight,
        'document.documentElement.scrollWidth': document.documentElement.scrollWidth,
        'document.documentElement.clientHeight': document.documentElement.clientHeight,
        'document.documentElement.clientWidth': document.documentElement.clientWidth,
        'window.devicePixelRatio': window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI,
    })
}

function parseDOM(element) {
    if (!element) {
        return
    }

    elementOffset(element)
    if (element.childNodes.length > 0) {
        if (Array.prototype.forEach) {
            Array.prototype.forEach.call(element.childNodes, function (childNode) {
                parseDOM(childNode)
                // if (childNode.childNodes.length > 0) {
                //     parseDOM(childNode)
                // } else {
                //     elementOffset(childNode)
                // }
            })
        } else {
            for (var i = 0; i < element.childNodes.length; i++) {
                var childNode = element.childNodes[i]
                parseDOM(childNode)
                // if (childNode.childNodes.length > 0) {
                //     parseDOM(childNode)
                // } else {
                //     elementOffset(childNode)
                // }
            }
        }
    }
}

function parentDOM() {
    console.log({
        parentDOM: document.getElementById('firstOuterElement').parentNode
    })
}

function nodeValue() {
    var div = document.getElementById('firstInnerElement')

}

function documentNode() {
    setTimeout(function () {
        document.title = 'A new title'
    }, 1000)

    console.log({ document: document })
}

function getAttributeDOM() {
    var div = document.getElementById('firstOuterElement')

    if (div.childNodes > 1) {
        var dataWeek = div.childNodes[1].getAttribute('data-week')

        console.log({ dataWeek: dataWeek })
    }
}

function createElementDOM() {
    var div = document.createElement('div')

    var text = document.createTextNode('Hello World')

    text.appendData('!!!')

    div.appendChild(text)

    document.getElementById('firstOuterElement').appendChild(div)
}

function loadScript(url) {
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = url
    document.body.appendChild(script)
}

function addDIV() {
    var divs = document.getElementsByTagName('div')
    var i, div

    // var p = Object.getPrototypeOf(divs)
    var divsTemp = Object.create(Object.getPrototypeOf(divs), Object.getOwnPropertyDescriptors(divs))
    Object.getPrototypeOf(divsTemp).length = divs.length
    divsTemp.hasOwnProperty('length')
    // for (var prop in divs) {
    //     divsTemp[prop] = divs[prop]
    // }

    for (i = 0; i < divsTemp.length; i++) {
        div = document.createElement('div')
        var text = document.createTextNode('Hello World')
        text.appendData('!!!')
        div.appendChild(text)
        document.body.appendChild(div)
    }
}

function elementStyle() {
    var div = document.querySelector ? document.querySelector('#firstInnerElement') : document.getElementById('firstInnerElement')
    var container = document.querySelector ? document.querySelector('#firstOuterElement') : document.getElementById('firstOuterElement')
    div.style.minHeight = '200px'
    container.style.height = '150px'
    container.style.overflowY = 'scroll'

    console.log({
        'div.scrollHeight': div.scrollHeight,
        'div.scrollTop': div.scrollTop,
        
        'container.scrollHeight': container.scrollHeight,
        'container.scrollTop': container.scrollTop,
    })
}

function elementOffset(element) {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
        return
    }

    console.log({
        element: element,
        offsetHeight: element.offsetHeight,
        offsetWidth: element.offsetWidth,
        offsetTop: element.offsetTop,
        offsetLeft: element.offsetLeft,
        type: elementNodeTypeEnum[element.nodeType],

    })

}