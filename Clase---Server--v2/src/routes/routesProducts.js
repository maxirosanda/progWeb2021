import * as controllerProducts from '../controllers/controllerProducts.js'

const routesProducts = app => {
    app.get('/productos',controllerProducts.view)
    app.post('/productos',controllerProducts.create)
}
    
export default routesProducts