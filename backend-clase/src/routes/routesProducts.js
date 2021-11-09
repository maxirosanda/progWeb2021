import * as controllerProducts from '../controllers/controllerProducts.js'


const routesProducts = (app) => {

    app.get('/productos',controllerProducts.view)
    app.post('/productos',controllerProducts.create)
    app.delete('/productos',controllerProducts.del)
    app.put('/productos',controllerProducts.update)
}
export default routesProducts