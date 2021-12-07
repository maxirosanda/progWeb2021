import mongoose from 'mongoose'

const cartsCollection = 'carts'

const cartsSchema = new mongoose.Schema({

  name: { type: String, require: true },
  price: { type: Number, require: true },
  cantidad: { type: Number, require: true },
  url: { type: String, require: true },
  idProduct: { type: String, require: true },

})

export default mongoose.model(cartsCollection,cartsSchema)