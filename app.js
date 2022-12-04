const express = require('express')
const path = require('path')

// military logistics
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'src')))
app.use(express.static(path.join(__dirname, 'army-logistics', 'dist')))
app.use(express.static(path.join(__dirname, 'af-logistics', 'dist')))

app.get('/api', (req, res) => {
    console.dir(req.route)
    res.send(`Here is military logistics base!`)
})

app.listen(9000, () => {
    console.log(`Access http://localhost:${9000}`)
})

// army logistics app
const armyLogisticApp = express()

armyLogisticApp.use(express.static(path.join(__dirname, 'army-logistics', 'dist')))

armyLogisticApp.get('/api', (req, res) => {
    console.dir(req.route)
    res.send(`Here is army logistics!`)
})

armyLogisticApp.listen(9010, () => {
    console.log(`Access http://localhost:${9010}`)
})

// navy logistics app
const navyLogisticApp = express()

navyLogisticApp.use(express.static(path.join(__dirname, 'navy-logistics', 'dist')))

navyLogisticApp.get('/api', (req, res) => {
    console.dir(req.route)
    res.send(`Here is navy logistics!`)
})

navyLogisticApp.listen(9020, () => {
    console.log(`Access http://localhost:${9020}`)
})

// air force logistics app
const afLogisticApp = express()

afLogisticApp.use(express.static(path.join(__dirname, 'af-logistics', 'dist')))

afLogisticApp.get('/api', (req, res) => {
    console.dir(req.route)
    res.send(`Here is navy logistics!`)
})

afLogisticApp.listen(9030, () => {
    console.log(`Access http://localhost:${9030}`)
})



