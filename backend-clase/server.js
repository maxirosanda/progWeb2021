import express from 'express'
import morgan from 'morgan'
import handlebars  from "express-handlebars"
import path from 'path'
import routesProducts from './src/routes/routesProducts.js'
import routesCarts from './src/routes/routesCarts.js'
import methodOverride from 'method-override'
import fileUpload from 'express-fileupload'
import { conectarDB } from './config/db.js'
const app = express()

const __dirname = path.resolve();




app.use(express.static(path.join(__dirname, '/public')));


app.use(methodOverride('_method'))

app.use(morgan('dev'))



app.use(express.urlencoded({ extended: true })) 

app.use(express.json()) 

app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
    useTempFiles: true,
   // dir for windows PC
    tempFileDir: path.join(__dirname, './tmp'),
  }),
);


// -------------- Configuracion Handlebars ----------------------------------
app.engine("hbs", handlebars({
  extname: "hbs",
  defaultLayout: "index",
  layoutsDir: path.join(__dirname, "/src/views/layouts"),
  partialsDir: path.join(__dirname, "/src/views/partials"),
}));
app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'hbs');
conectarDB()
// servidor
routesProducts(app)
routesCarts(app)
app.listen(3000, () => {
    console.log(`el servidor esta corriendo en : http://localhost:${3000}`)
  })