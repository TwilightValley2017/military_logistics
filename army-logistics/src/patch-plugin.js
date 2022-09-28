function patchPlugin(preVNode, vnode, container) {
    console.group(`-----patch invoked-----`)
    console.info({ preVNode, container })
    traversalVNode(vnode)
    console.info(vnode.parent.child === vnode.context)
    console.groupEnd()

}

function traversalVNode(vnode, level = 0) {
    if (!vnode || Object.getPrototypeOf(vnode).constructor.name !== 'VNode') {
      return
    }
  
    // 过滤非元素节点
    if (vnode.tag === undefined) {
      return
    }
  
    // 过滤 vue-component-xxx 节点
    // if (vnode.tag.includes('vue-component')) {
    //   return
    // }
  
    process.env.NODE_ENV === 'development' && printVNode({ vnode, level })
  
    setAttributes()
  
    // if (vnode.children) {
    //   vnode.children.forEach(vnode => traversalVNode(vnode, level + 1))
    // }
}

/**
 * 添加自定义属性到 DOM 元素
 * @param {当前节点} vnode 
 * @returns 
 */
function setAttributes(vnode) {
if (!vnode || Object.getPrototypeOf(vnode).constructor.name !== 'VNode') {
    return
}

if (!vnode.data) {
    return
}

let eventHandlers = getEventHandlers(vnode, ['focus'])
console.log({eventHandlers})

if (eventHandlers.length === 0) {
    setNoopAttributes(vnode)
    return
}

// 与 HMTL tag 不是一一对应的，按需添加
const NODE_TYPE = {
    BUTTON: 'button',
    INPUT: 'input',
    SWITCH: 'switch',
    CHECKBOX: 'checkbox',
}

let dataAttr = eventHandlers.join('-')

if (!vnode.data.attrs) {
    vnode.data.attrs = {
    'data-auto': dataAttr,
    }
    return
}

// 处理 fz-checkbox data-auto 属性
if (vnode.tag === NODE_TYPE.INPUT && vnode.data.attrs['type'] === NODE_TYPE.CHECKBOX) {
    /**
     * fz-checkbox-group: 通过 vnode.data.domProps['value'] 获取 item 的文案
     * fz-checkbox：通过组件真实 DOM 结构，查找 input 元素编译域组件的 span 元素文本节点
     */
    dataAttr = vnode.data.domProps['value'] || vnode.context.$parent._vnode.children[1].children[0].text
}

// 处理 fz-switch 状态属性
if (vnode.tag === NODE_TYPE.BUTTON && vnode.data.attrs['role'] === NODE_TYPE.SWITCH) {
    vnode.data.attrs['data-auto-disabled'] = vnode.data.attrs['disabled'].toString()
    vnode.data.attrs['data-auto-checked'] = vnode.data.attrs['aria-checked'].toString()
} 

// 处理 fz-checkbox 状态属性
if (vnode.tag === NODE_TYPE.INPUT && vnode.data.attrs['type'] === NODE_TYPE.CHECKBOX) {
    vnode.data.attrs['data-auto-checked'] = vnode.data.domProps['checked'].toString()
}

vnode.data.attrs['data-auto'] = dataAttr

console.info('data-auto', dataAttr)
}

/**
 * 添加自定义属性到 DOM 元素，无事件绑定
 * @param {*} vnode 
 * @returns 
 */
function setNoopAttributes(vnode) {
if (!vnode || Object.getPrototypeOf(vnode).constructor.name !== 'VNode') {
    return
}

if (!vnode.data) {
    return
}

let dataAttr = ''
switch(vnode.data.class) {
    case 'ant-list-item': 
    /**
     * fz-list
     * 查找层级：li > div > div > h4 > a > text node
     */
    dataAttr = vnode.children[0].children[0].children[0].children[0].children[0].text
    break;

    default:
    break;
}

if (!dataAttr) {
    return
}

if (vnode.data.attrs) {
    vnode.data.attrs['data-auto-text'] = dataAttr
} else {
    vnode.data.attrs = {
    'data-auto-text': dataAttr,
    }
}
}

/**
 * 
 * @param {*} vnode 
 * @param {*} eventHandlerFilter 
 * @returns 
 */
function getEventHandlers(vnode, eventHandlerFilter = []) {
if (!vnode || Object.getPrototypeOf(vnode).constructor.name !== 'VNode') {
    return
}

if (!vnode.data) {
    return
}

const listeners = vnode.context.$listeners
const onEvent = vnode.data.on
const defaultEventHandler = ['', 'noop', 'callback']
let eventHandlers = []

if (vnode.parent) {
    // UI 组件，即非自定义组件
    if (listeners) {
    Object.keys(listeners).forEach(event => {
        if (eventHandlerFilter.includes(event)) {
        return
        }

        let handler = listeners[event].fns.name.replace(/bound /gi, '')
        if (defaultEventHandler.includes(handler)) {
        return
        }

        eventHandlers.push(handler)
    })
    }
} else {
    // 原生 DOM 节点
    if (onEvent) {
    Object.keys(onEvent).forEach(event => {
        if (eventHandlerFilter.includes(event)) {
        return
        }

        let handler = onEvent[event].name === 'invoker' ? onEvent[event].fns.name.replace(/bound /gi, '') : onEvent[event].name.replace(/bound /gi, '')
        if (defaultEventHandler.includes(handler)) {
        return
        }

        eventHandlers.push(handler)
    })
    }
}

return eventHandlers
}

/**
 * 打印节点信息
 * @param {*} vnode 
 * @param {*} level 标识节点层级，进行缩进
 * @param {*} isDefaultEventFiltered 是否过滤默认绑定事件
 * @returns 
 */
function printVNode({ vnode, level = 0, isDefaultEventFiltered = true}) {
    if (!vnode || Object.getPrototypeOf(vnode).constructor.name !== 'VNode') {
        return
    }

    console.info(''.padStart(level * 2, '-') + level, vnode.tag, { vnode })

    const listeners = vnode.context.$listeners
    const onEvent = vnode.data && vnode.data.on

    // 原生 DOM Event Handler
    const defaultOnEvent = isDefaultEventFiltered ? [
        'noop', /** no operation */
        // 'onClick',
    ] : []

    // 组件 Event Handler
    const defaultListener = isDefaultEventFiltered ?  [
        '',
        'noop',
        'callback',
        // 'handleChange',
    ] : []

    if (listeners) {
        Object.keys(listeners).forEach(event => {
        if (defaultListener.includes(listeners[event].fns.name.replace(/bound /gi, ''))) {
            return
        }

        console.info(''.padStart(level * 2, '-') + level, `listeners:${event}`, listeners[event].fns.name)
        })
    }

    if (onEvent) {
        Object.keys(onEvent).forEach(event => {
        let eventHandler = onEvent[event].name.replace(/bound /gi, '')
        if (onEvent[event].name === 'invoker') {
            eventHandler = onEvent[event].fns.name.replace(/bound /gi, '')
        } 

        if (defaultOnEvent.includes(eventHandler)) {
            return
        }

        console.info(''.padStart(level * 2, '-') + level, `onEvent:${event}`, onEvent[event].name === 'invoker' ? onEvent[event].fns.name : onEvent[event].name)
        })
    }

}

export default patchPlugin