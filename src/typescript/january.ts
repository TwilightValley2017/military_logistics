function january(name?: string | undefined) {
    console.log(name?.split(','))
}
function february(name: string | undefined) {
    console.log(name?.split(','))
}
function march(name?: string) {
    console.log(name?.split(','))
}

let brand: string | undefined = 'ja,nua,ry'
january(brand)
february(brand)
march(brand)

const monday: {a?: number, b?: number, c?: number}[] = [{a:1}, {b:1}, {c: 1}]
// console.log({monday})
// monday.find()
// let tuesday = monday.find(curr => curr.a === 2)

const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];
let tuesday = inventory.find(curr => curr.name === '1')
tuesday?.name

try {

}
catch (e) {
    console.log(e.data)
}

