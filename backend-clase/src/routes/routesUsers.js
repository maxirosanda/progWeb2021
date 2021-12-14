import * as controllerUsers from '../controllers/controllerUsers.js'
import passport from 'passport'

const routesUsers = (app) => {
    app.get('/login',controllerUsers.viewLogin)
    app.post('/login',passport.authenticate('login', { failureRedirect: 'failureLogin' }),controllerUsers.login)
   app.get('/register',controllerUsers.viewRegister)
   app.post('/register',passport.authenticate('register', { failureRedirect: 'failureRegister' }),controllerUsers.register)
    app.get('/logout',controllerUsers.logout)
}
export default routesUsers