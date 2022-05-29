const express = require('express')
const path = require('path')

const app = express()
const port = 9000

app.use(express.static(path.join(__dirname, 'public')))
// app.use(express.static(path.join(__dirname, 'military-base/dist')))
app.use(express.static(path.join(__dirname, 'src')))

app.get('/api', (req, res) => {
    console.dir(req.route)
    res.send(`Welcome to Express!`)
})

app.listen(port, () => {
    console.log(`listening at port ${port}`)
})