import * as controllerProducts from '../controllers/controllerProducts.js'
import * as middlewareUsers from '../middlewares/middlewaresUsers.js'

const routesProducts = (app) => {
    app.get('/productos',middlewareUsers.buyer,controllerProducts.viewProducts)
    app.get('/editproductos',middlewareUsers.seller,controllerProducts.view)
    app.post('/editproductos',middlewareUsers.seller,controllerProducts.create)
    app.delete('/editproductos',middlewareUsers.seller,controllerProducts.del)
    app.put('/editproductos',middlewareUsers.seller,controllerProducts.update)
}
export default routesProducts