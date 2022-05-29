function monday() {
    console.log('week', 'monday')
}

let tuesday = '星期二'

let friday = 5

export {
    monday,
    tuesday,
    friday as fir,
}

export let wednesday = '星期三'

export function thursday() {
    console.log({ this: this })
    console.log('week', 'thursday')
}

export default function () {
    console.log('week', 'default')
    return 'week default'
}