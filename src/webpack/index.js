import Child from '../es6/es6-class'

let child = new Child()
console.log('Type is', Object.getPrototypeOf(child).constructor.name, Object.getPrototypeOf(child), child)
