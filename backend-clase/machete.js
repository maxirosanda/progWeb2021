//1 
//dentro del archivo server.js importar express-fileupload  =>
//import fileUpload from 'express-fileupload'
// e intalar con npm i express-fileupload

//2
//agregar el siguiente codigo de configuracion en server.js =>

/*

app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
    useTempFiles: true,
   // dir for windows PC
    tempFileDir: path.join(__dirname, './tmp'),
  }),
);

*/

//3
// agregar a la etiqueta html form de creacion de productos el siguiente atributo => enctype="multipart/form-data"
//agregar el input para imagenes dentro de dicho form =>
// <input type="file" name="url" accept="image/x-png,image/gif,image/jpeg">



//4 agregar dentro de la funcion de creacion de producto el siguiente codigo =>
/*
  const EDFile = req.files.url

    EDFile.mv(`./public/img/products/${product.url}`,err => {
      if(err) return res.status(500).send({ message : err })
      return res.status(200).render("nofound",{message:"no se encontro el Producto"})
      })
*/

//5  agrega al objeto js del producto la direccion de la imagen (en la funcion de creacion dentro del controller) => 
//  product.url =req.body.name + req.body.id + ".png" 

//6 no olvides crear la carpeta que va a contener las imagenes en este caso la carpeta "products" dentro de public/img

