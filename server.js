const fs = require('fs')
const pathToFile = './productos.txt'

const express = require('express') 
const app = express()
const server = app.listen(8080, () => console.log('Server Up'))

app.get('/productos', (req, res) => {
    let data = fs.readFileSync(pathToFile, 'utf-8',(err, resp) => {})
    let productos = JSON.parse(data)

    res.send({productos})
})

app.get('/productoRandom', (req, res) => {
    let data = fs.readFileSync(pathToFile, 'utf-8',(err, resp) => {})
    let productos = JSON.parse(data)

    const random = productos[Math.floor(Math.random() * productos.length)];

    res.send({random})
})

