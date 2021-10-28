// instalar nodejs 
//Crear la carpeta del proyecto y abrirla con visual studio code
//ejecutar el comando => npm init -y (se creara el archivo package.json)
// Crear la carpetas public y src en la raiz
//dentro de public crear la extructura tipica de una pagina estatica (lo que venimos usando)
//detro de src crear las carpetas controllers ,routes y views
//dentro de view crear la carpeta layouts (plantilla principales) y partials (fragmentos html)
//crear los archivos server.js y .gitignore en la raiz del proyecto
// dentro de src/controllers crear el archivo controllerProducts.js
// dentro de src/routes crear el archivo routesProducts.js
//dentro de src/views/layouts crear el archivo index.hbs
//dentro del archivo src/views/layouts/index.hbs agregar el HTML base que nos proporciona bootstrap

//dentro del archivo server.js -------------------------------------------------------------
/* 
import express from 'express'
import morgan from 'morgan'
import handlebars  from "express-handlebars"
import path from 'path'


const app = express()

const __dirname = path.resolve();

app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, '/public')));

app.use(express.urlencoded({ extended: true })) 

app.use(express.json()) 




// -------------- Configuracion Handlebars ----------------------------------
app.engine("hbs", handlebars({
  extname: "hbs",
  defaultLayout: "index",
  layoutsDir: path.join(__dirname, "/src/views/layouts"),
  partialsDir: path.join(__dirname, "/src/views/partials"),
}));
app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'hbs');

// servidor

app.listen(3000, () => {
    console.log(`el servidor esta corriendo en http://localhost:${3000}`)
  })

*/

//instalar modulos con el comando npm i 

//dentro del archivo src/routes/routesProducts.js pegar el codigo ------------------------------

/*
const routesProducts = app => {

    app.get('/products',controllerProducts.nombreFuncion)

}
export default routesProducts

*/

//dentro de src/controllers/controllerProducts.js vamos a exportar funciones para despues usarlas con los controllers

/*


export const nombreFuncion = async (req,res)=>{
  
  res.status(200).render('nombre_pagina_hbs')

}

*/
//importar routes en server.js (ej: import  routesProducts  from "./src/routes/routesProducts.js" ) y llamar la funcion correspondiente (ej:routerProducts(app))
//importar controllers dentro del archivo routes que le corresponde (ej:import * as controllerProducts from '../controllers/controllerProducts.js')
// agregar a package.json =>   "type": "module",
// inciar el servidor con npm start
// instalar nodemon y agregar en el package.json "start":"nodemon server.js"  (para que el servidor se actualize automaticamente cuando hacemos un cambio)


