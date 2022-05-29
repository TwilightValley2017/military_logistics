
let defineProperty = function () {
    let person = {}
    Object.defineProperty(person, 'name', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: 'Brian'
    })

    console.log(person, person.constructor)

    let animal = {
        name: 'hamster',
        legs: 4
    }

    for (let prop in animal) {
        console.log(prop, animal[prop])
    }

    Object.defineProperty(animal, 'name', {
        configurable: false,
        enumerable: false
    })

    animal.name = 'hamster smiles'
    console.log(Object.getOwnPropertyDescriptor(animal, 'name'), animal)

    Object.defineProperty(animal, 'name', {
        writable: false
    })

    animal.name = 'hamster runs'
    console.log(Object.getOwnPropertyDescriptor(animal, 'name'), animal)

    for (let prop in animal) {
        console.log(prop, animal[prop])
    }

}

let defineProperty2 = function () {
    let person = {
        _name: 'Brian',
        age: 24
    }

    console.log(person)

    Object.defineProperty(person, 'name', {
        get: function () {
            return this._name
        },
        set: function (val) {
            this._name = val
            if (val == 'Yang') {
                this.age += 1
            }
            else {
                this.age -= 1
            }
        }
    })

    // person.name = 'Yang'
    person._name = 'Yang1'
    console.log(person, person.name)
    // person.name = 'Yang1'
    // console.log(person)
}

let defineProperties = function () {
    let person = {}
    Object.defineProperties(person, {
        _name: {
            writable: true,
            value: 'Brian'
        },
        _age: {
            writable: true,
            value: 24
        },
        name: {
            get: function () {
                return this._name
            },
            set: function (val) {
                this._name = val
                this._age += 1
            }
        }
    })

    person.name = 'Yang'
    console.log(person)
}

$(document).ready(function () {
    defineProperties()
})