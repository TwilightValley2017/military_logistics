const express = require('express')
const path = require('path')

const app = express()
const port = 9000

if (process.argv.slice(2).length === 0) {
    app.use(express.static(path.join(__dirname, 'public')))
    app.use(express.static(path.join(__dirname, 'src')))
} else {
    app.use(express.static(path.join(__dirname, process.argv.slice(2)[0], 'dist')))
}

app.get('/api', (req, res) => {
    console.dir(req.route)
    res.send(`Here is military logistics base!`)
})

app.listen(port, () => {
    console.log(`Access http://localhost:${port}`)
})