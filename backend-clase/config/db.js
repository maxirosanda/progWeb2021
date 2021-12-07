import mongoose from 'mongoose'

export const conectarDB = async () => {
    try {
  
      await mongoose.connect("mongodb://localhost:27017/ecommerce", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      })
      console.log(`Base de datos conectada`)
    } catch (e) {
      console.log(`error ${e}`)
      process.exit(1)
    }
  }