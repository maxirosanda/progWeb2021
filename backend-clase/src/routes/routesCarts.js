import * as controllerCarts from '../controllers/controllerCarts.js'


const routesCarts = (app) => {
    app.get('/carrito',controllerCarts.viewcart)
    app.post('/carrito',controllerCarts.add)
    app.delete('/carrito',controllerCarts.del)
}
export default routesCarts