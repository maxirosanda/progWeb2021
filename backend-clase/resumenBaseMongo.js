//1) (se configura una sola vez por computadora)
// descargar el instalador de mongo de la pagina de mongo (https://www.mongodb.com/try/download/community)
// ir a donde se guarda el programa : C:\Program Files\MongoDB\Server\ e ir a la carpeta de la  version y luego a la carpeta bin
// dentro de bin tocar boton derecho e iniciar git bash here
// ejecutar el comando (./mongod.exe --version) para ver la version de mongo
//copiar la direccion completa de la carpeta (ej:C:\Program Files\MongoDB\Server\5.0\bin) => no usar el ejemplo mejor copiarlo de nuestra pc
//en el buscador de nuestra pc escribir "variables"
//ejecutar "editar las variables de entorno del sistema "
//hacer click en el boton "variables de entorno"
//hacer click en path (en la palabra path)
//hacer click en nuevo y pegar la direccion de la carpeta bin
//abrir git bash en cualquier lado (puede ser el escritorio)
//dentro de la unidad donde esta instalado el sistema operativo crear una carpeta llamada "data" y dentro otra llamada "db"
//  ejecutamos mongo en consola con el comando "mongod"
// finalmente en otra consola ejecutar el comando "mongo"
//ejecutar mongoDBCompass y conectarlo a la base de datos
//Crear una base de datos en mongoDBCompass
//practicar manipular datos (crear ,borrar,actualizar ,ver)


//2)(se realiza una sola vez en todo el proyecto)
//crear una carpeta con el nombre config dentro de la raiz
//crear dentro de config el archivo db.js
// detro del archivo db.js importar mongoose (import mongoose from 'mongoose')
//instalar mongoose con npm i mongoose@5.13.7
//pegar el siguiente codigo en db.js =>
/*
export const conectarDB = async () => {
  try {

    await mongoose.connect("mongodb://localhost:27017/nombreDeLaBase", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })
    console.log(`database connected`)
  } catch (e) {
    console.log(`error ${e}`)
    process.exit(1)
  }
}
*/
// dentro del archivo de inicio del servidor importar db.js (esta dentro de config)
//import { conectarDB } from './config/db.js'
//llamar la funcion conectarDB()

// 3) crear en src una carpeta llamada models
//crear un archivo dentro de models (ej:products.js)
//dentro del archivo products.js importar el modulo de mongoose (import mongoose from 'mongoose')
// agregar el siguiento codigo base a el archivo products.js
/*

const productsCollection = 'products'

const productsSchema = new mongoose.Schema({

  name: { type: String, require: true },

})

export default mongoose.model(productsCollection, productsSchema)


*/
//importar el archivo que esta dentro de models en el controlador donde queremos utilizar la base datos (ej:import Product from "../models/products.js")
// aclaracion las funciones que se comuniquen con la base de datos deben ser asincronicas
//para leer : 
/*
try {
  await Product.find({}).lean()
  
} 
catch (e) { console.log(e) }
*/

//para crear :  
/*
try {
  const product= new Product(req.body)
  await product.save()
  
} 
catch (e) { console.log(e) }
*/
//para borrar:

/*
try {
   const productfound = await Product.find({_id:req.body._id}).lean()
      if ((Object.entries(productfound).length === 0)) {
        return res.status(200).render("nofound",{message:"no se encontro el Producto"})
      }
      await Product.deleteOne({ _id: req.body._id })
  
} 
catch (e) { console.log(e) }
*/

//para actualizar
/*
    try {
      const productfound = await Product.find({_id:req.body._id}).lean()
          if ((Object.entries(productfound).length === 0)) {
            return res.status(200).render("nofound",{message:"no se encontro el Producto"})
          }

      await Product.findOneAndUpdate(
        { _id: req.body._id },
        { $set: product},
        { new: true }
      )
      
    } 
    catch (e) { console.log(e) }

*/








