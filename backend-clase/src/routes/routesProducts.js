import * as controllerProducts from '../controllers/controllerProducts.js'


const routesProducts = (app) => {
    app.get('/productos',controllerProducts.viewProducts)
    app.get('/editproductos',controllerProducts.view)
    app.post('/editproductos',controllerProducts.create)
    app.delete('/editproductos',controllerProducts.del)
    app.put('/editproductos',controllerProducts.update)
}
export default routesProducts