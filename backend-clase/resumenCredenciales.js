
//1 armar las vistas con hbs para login. (si quieren pueden usar bootstrap)
//las vistas login y deben tener formularios post para mandar los datos al controlador
// (debo usar username para refirirme al mail y password para la contraseña)

//2 crear un archivo routesUsers.js dentro de la carpeta routes
//armar las rutas para el logeo y falla del login
/*
 const routesUsers = app => {
    app.get('/login',controlleUsers.viewlogin)
}

export default routesUsers
*/


//3 crear un archivo controllerUsers.js dentro de la carpeta controller
// armar el controlador para la vistas del logeo y la falla en el login ej:
/*
export const viewlogin = (req, res) => {
  res.status(200).render('login')
}

*/

//3 importar el controllerUser dentro de routesUsers
// importar el routesUsers dentro de el archivo de inicio del servidor (server.js o index.js)
// los controller deben direccionar a la vista de la pagina principal (o la que necesites)



//4 Crear la carpeta middlewares dentro de la carpeta src 
//dentro de esta carpeta crea un archivo que va a cumplir la tarea de verificar si el usuario esta registrado middlewaresUsers.js
// ejemplo de estructura de un middleware
/*
export const buyer =(req,res,next)=>{

    if(req.body.email == "maxi@asd.com" && req.body.password == "123") {
       next()  
    } else {
        res.status(200).redirect('/fallaingreso')
}}

*/

//5) importar el middleware en el controller de los usuarios
// ej : import * as middlewaresUsers from '../middlewares/middlewaresUsers.js'
// usar el middlewareUser en el controllerUser con la funcion que necesites
//: ej app.post('/login',middlewaresUsers.buyer,controlleUsers.login)
 
//---------------------------------------------------------------------------
//hasta aca tenemos un login simple pero tiene algunos problemas
 //Primer problema: no se pueden registrar usuarios, el programador lo tiene que hacer a mano


//Solucion:
//crear un archivo dentro de models con el nombre users.js
//importa mongoose dentro del archivo users.js
//luego armar el codigo para el modelo de la base de datos (se pueden agregar todos los datos que se quieran) ej:
/*
const usersCollection = 'users'

const usersSchema = new mongoose.Schema({

  username: { type: String, require: true },
  password: { type: String, require: true }


})

export default mongoose.model(usersCollection, usersSchema)
*/
//agregar una vista registro y con un formulario post 
//agregar todas las rutas y funciones (routes,controllers,middlewares) para hacer funcionar el registro(ver video)
//modificar el login (en controller y middleware) para que consulte la base de datos(ver video)


 //segundo problema : si la persona entra directo con la url la pagina no pide credenciales
 //tercer problema: las claves no son seguras por que no esta encriptadas
//1)
//crear en la carpeta config el archivo  connectPassport.js
//dentro del archivo connectPassport.js importar mongoose , bcrypt , passport y passport-local(Local)
//instalar todos los modulos que agregamos (que no esten instalados)
/*
npm i bcrypt@5.0.1
npm i passport@0.4.1
npm i passport-local@1.0.0npm i passport-local@1.0.0
// importar User del modelo (import User from '../src/models/users.js')
*/

//dentro de connectPassport.js pegar el siguiente codigo de configuracion

/*

mongoose.set('useCreateIndex', true)
const LocalStrategy = Local.Strategy

const isValidPassword = (user, password) => {
  return bcrypt.compareSync(password, user.password)
}
const createHash =(password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
}

export const ConnectPassport = () => {

  passport.use('login', new LocalStrategy({ passReqToCallback: true },
  (req, username, password, done) => {
      User.findOne({ username: username },
            (err, user) => {
          if (err) return done(err)
          if (!user) return done(null, false)
          if (!isValidPassword(user, password)) return done(null, false)
          return done(null, user)
        })
    })
  )

  passport.use('register', new LocalStrategy({ passReqToCallback: true },
     (req, username, password, done) => {

      const findOrCreateUser = () => {
        User.findOne({ username: username },
           (err, user) => {
            if (err) return done(err)
            if (user) {
              return done(null, false)
            } else {
              const newUser = new User()
              newUser.username = username
              newUser.password = createHash(password)
              newUser.name=req.body.name 

              newUser.save((err) => {
                if (err) { throw err }
                return done(null, newUser)
              })
            }
          })
      }
 
      process.nextTick(findOrCreateUser)
    })
  )

  passport.serializeUser((user, done) => {
    done(null, user._id)
  })
  passport.deserializeUser((id, done) => {
    User.findById(id,(err, user) => {
      if (err) {
        console.log(err.stack)
      }
      done(null, user)
    })
  })
}


*/
// dentro de server importar el archivo connectPassport.js de la carpeta config
//iniciar la funcion en el server despues de la coneccion la base de datos =>
//app.use(passport.initialize())
//app.use(passport.session())


// importar los modulos en el server.js =>
//import session from 'express-session'
//import MongoStore from 'connect-mongo'
//import passport from 'passport'
//instalar los modulos
//npm i express-session@1.17.2
// npm i connect-mongo@4.5.0

//agregar el siguiente codigo en server.js =>
/*
const advancedOptions = { useNewUrlParser: true, useUnifiedTopology: true }
app.use(session({
  secret: 'secreto',
  resave: false,
  saveUninitialized: false,

  store: MongoStore.create({
    mongoUrl:"mongodb://localhost:27017/ecommerce",
    mongoOptions: advancedOptions,
    collectionName: 'sessions',
    ttl: 10 * 60
  })
}))
*/
//importar passport dentro de routesUser.js (import passport from 'passport')
//agregar el middleware passport.authenticate('login', { failureRedirect: 'failureLogin' }) a el post del login (el el routesUser.js)
//agregar el middleware passport.authenticate('register', { failureRedirect: 'failureRegister' }) a el post del registro (el el routesUser.js)
//importante en la vista register y login cambiar el name "email" por "username" (el el input)
//importante cambiar en user.js del models el name "email" por "username"
//modificar el codigo en general para poder usar passport 
//revisar el codigo para eliminar import innecesarios
//agregar la funcion para cerrar sesion en el controllerUser.js y las ruta

/*
export const logout = async (req, res) => {
    try {
      const user = await User.find({ username: req.user.username }).lean()
      await req.session.destroy(err => {
        if (err) return err
        res.status(200).redirect('/login')
      })
    } catch (e) { console.log(e) }
  }
*/
//luego agregar la ruta para acceder a la anterior funcion (en el routesUser.js)