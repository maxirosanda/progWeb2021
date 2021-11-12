let productos = [
  
]

export const view = async (req,res)=>{
  
    res.status(200).render('products',{listadoProductos:productos})
  }

export const create = async (req,res)=>{
  productos.push(req.body) 
  console.log(productos)
   res.status(200).redirect('/productos')
 }