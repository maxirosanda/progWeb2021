import mongoose from 'mongoose'

const productsCollection = 'products'

const productsSchema = new mongoose.Schema({

  name: { type: String, require: true },
  price: { type: Number, require: true },
  stock: { type: Number, require: true },
  url: { type: String, require: true },

})

export default mongoose.model(productsCollection, productsSchema)
