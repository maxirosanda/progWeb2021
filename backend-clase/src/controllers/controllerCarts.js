import Cart from '../models/carts.js'
let carts = [

]

export const viewcart = async (req,res)=>{
  try {
   const carts = await Cart.find({}).lean()
   res.status(200).render('cart',{carts:carts})
  } 
  catch (e) { console.log(e) }

 
  

  
}

export const add = async (req,res)=>{

  try {
    const cart= new Cart(req.body)
    await cart.save()
    res.status(200).redirect('/carrito')
    
  } 
  catch (e) { console.log(e) }

  

}


export const del = async (req,res)=>{

  try {
    const cartfound = await Cart.find({_id:req.body._id}).lean()
       if ((Object.entries(cartfound).length === 0)) {
         return res.status(200).render("nofound",{message:"no se encontro el Producto"})
       }
       await Cart.deleteOne({ _id: req.body._id })
   
 } 
 catch (e) { console.log(e) }
  res.status(200).redirect('/carrito')
  

}

