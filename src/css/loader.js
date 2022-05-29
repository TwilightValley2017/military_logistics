(function (template) {
    // 渲染 template 节点
    var node = document.createElement('template')
    node.innerHTML = template
    document.body.insertBefore(node, document.body.querySelector('script'))

    // 渲染真实节点
    var temp = document.body.querySelector('template')
    var clone = temp.content.cloneNode(true)
    document.body.insertBefore(clone, document.body.querySelector('script'))
    
})(template)

tip('loader loaded')