import * as controllerCarts from '../controllers/controllerCarts.js'
import * as middlewareUsers from '../middlewares/middlewaresUsers.js'

const routesCarts = (app) => {
    app.get('/carrito',middlewareUsers.buyer,controllerCarts.viewcart)
    app.post('/carrito',middlewareUsers.buyer,controllerCarts.add)
    app.delete('/carrito',middlewareUsers.buyer,controllerCarts.del)
}
export default routesCarts