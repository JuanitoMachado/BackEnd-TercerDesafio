const fs = require('fs')
const pathToFile = './productos.txt'

class contenedor {
    save = async (producto) => {
        try{
            if (fs.existsSync(pathToFile)){

                let data = await fs.promises.readFile(pathToFile, 'utf-8')
                let productos = JSON.parse(data)
                let id = productos[productos.length-1].id+1
                producto.id = id
                productos.push(producto)
                await fs.promises.writeFile(pathToFile, JSON.stringify(productos, null, 2))
                return {status:"Exito", message: producto.id }

            }else {
                producto.id = 1
                await fs.promises.writeFile(pathToFile, JSON.stringify([producto], null, 2))
                return {status:"Exito", message: producto.id }
            }
        }catch(err) {
            return {status: "error", message: err.message}
        }
    }

    getById = async (id) => {
        if(fs.existsSync(pathToFile)){
            let data = await fs.promises.readFile(pathToFile, 'utf-8')
            let productos = JSON.parse(data)
            let producto = productos.find(producto => producto.id === id)
            if (producto) return {status:"Exito", message: producto}
            return {status: "null", message: "producto no encontrado"}
        }else {
            return {status: "error", message: err.message}
        }
    }

    getAll = async () => {
        if(fs.existsSync(pathToFile)){
            let data = await fs.promises.readFile(pathToFile, 'utf-8')
            let productos = JSON.parse(data)
            return {status:"Exito", message: productos}
        }else {
            return {status: "error", message: err.message}
        }
    }

    deleteById = async (id) => {

        if(fs.existsSync(pathToFile)){
            let data = await fs.promises.readFile(pathToFile, 'utf-8')
            let productos = JSON.parse(data)
            let newProducts = productos.filter(producto => producto.id !== id )
            await fs.promises.writeFile(pathToFile, JSON.stringify(newProducts, null, 2))
            return {status:"Exito", message: "producto eliminado" }

        }else {
            return {status: "error", message: err.message}
        }
    }

    deleteAll = async () =>  {
        if(fs.existsSync(pathToFile)){
            let data = await fs.promises.readFile(pathToFile, 'utf-8')
            let productos = JSON.parse(data)
             let newProducts = productos - productos.length 
            await fs.promises.writeFile(pathToFile, JSON.stringify(newProducts, null, 2))
            return {status:"Exito", message: "productos eliminados" }

        }else {
            return {status: "error", message: err.message}
        }

    }


}
module.exports = contenedor