import express from 'express'
import morgan from 'morgan'
import handlebars  from "express-handlebars"
import path from 'path'
import methodOverride from 'method-override'
import  config from './config/config.js'
import { routerProducts } from "./src/routes/index.js"


const app = express()

const __dirname = path.resolve();

app.use(morgan('dev'))

app.use(methodOverride('_method'))

app.use(express.static(path.join(__dirname, '/public')));

app.use(express.urlencoded({ extended: true })) 
/* express.urlencoded() es un método incorporado en express para reconocer el objeto de solicitud entrante como cadenas o matrices */
app.use(express.json()) 
/* express.json() es un método incorporado en express para reconocer el objeto de solicitud entrante como objeto JSON.*/



// -------------- Configuracion Handlebars ----------------------------------
app.engine("hbs", handlebars({
  extname: "hbs",
  defaultLayout: "index",
  layoutsDir: path.join(__dirname, "/src/views/layouts"),
  partialsDir: path.join(__dirname, "/src/views/partials"),
}));
app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'hbs');

//--------------------------------------------------------------------------
routerProducts(app)

//-------------------------------------------------------------------------

app.listen(config.PORT, () => {
    console.log(`Example app listening at http://localhost:${config.PORT}`)
  })





