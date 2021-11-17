let carts = [

]

export const viewcart = (req,res)=>{
  res.status(200).render('cart',{carts:carts})
  

  
}

export const add = (req,res)=>{

  carts.push(req.body)
  console.log(carts)
  res.status(200).redirect('/carrito')
  

}


export const del = (req,res)=>{

  carts = carts.filter(element => element.id != req.body.id)
  res.status(200).redirect('/carrito')
  

}

