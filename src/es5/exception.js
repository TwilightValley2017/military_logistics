function exception() {
    let mon = null
    try {
        throw 'something bad happened'
    } 
    catch(error) {
        console.error({error})
    }
    finally {
        mon = 1
    }

    return mon
}

console.log(exception())

