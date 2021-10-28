import * as controllerProducts from '../controllers/controllerProducts.js'


const routesProducts = (app) => {

    app.get('/products',controllerProducts.nombreFuncion)

}
export default routesProducts