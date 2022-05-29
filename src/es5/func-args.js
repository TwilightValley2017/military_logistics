function monday(vue, options) {
    console.log({
        vue,
        options,
    })
}

const arr = [{vue: 'vuejs'}, {created: new Function(), mounted: new Function()}]

monday.apply(null, arr)
