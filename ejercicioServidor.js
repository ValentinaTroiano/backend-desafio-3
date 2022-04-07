const express = require("express") //requerimos express
const fs = require ('fs') //requerimos el módulo fs
const Caja = require() //requerimos la clase Contenedor del ejercicio entregable anterior

//---------------------Products----------------------------//

const cosas = new Caja()
const prod1 = {
    name: "escuadra",
    value: 30,
    thumbnail: "http://http2.mlstatic.com/D_656522-MLA44388481439_122020-I.jpg"
    } //producto 1
const prod2 = {
    name: "globo terraqueo",
    value: 50,
    thumbnail: "http://http2.mlstatic.com/D_920961-MLA31579848144_072019-I.jpg"
    } //producto 2
const prod3 = {
    name: "calculadora",
    value: 40,
    thumbnail: "http://http2.mlstatic.com/D_875724-MLA31116238699_062019-O.jpg"
    } //producto 3

cosas.save(prod1)
//cosas.save(prod2)
//cosas.save(prod3) //guardamos prod1 (después el 2 y el 3)

async function Obtener(){
    try {
        const data = await fs.promises.readFile()
        const Prod = JSON.parse(data)
        console.log("Obtenido!")
        
    } catch (error) {
        console.log(`Se produjo un error al mostrar todos los elementos: ${error}`)
    }
}

//---------------------Express----------------------------//

const app = express()
app.get('/productos', async (req, res) => {
    try { //intentamos mandar la response
        const All = await cosas.getAll()
        res.send(All)
    } catch (error) { //si hay error lo logeamos
        console.log(error)
    }
}) //si el endpoint es "/productos" mandamos como respuesta el método getAll()



//-----------SERVIDOR------------//


const port = 8080 //puerto
const server = app.listen(port, () => {
    console.log(`El servidor está escuchando en el puerto ${server.address().port}`)
}) //definimos el servidor
server.on("error", error => console.log(`Error en servidor ${error}`)) //logeamos el error si hubiera al iniciar el servidor