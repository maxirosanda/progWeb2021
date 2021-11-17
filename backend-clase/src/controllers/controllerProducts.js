
let products = [

]

export const viewProducts = (req,res)=>{
  res.status(200).render('products',{products:products})
}

export const view = (req,res)=>{
  
    res.status(200).render('editProducts',{productosparaver:products})
  
  }

  export const create = (req,res)=>{
    let product = req.body
    product.id = Math.floor(Math.random()*10000000000)
    products.push(product)
    res.status(200).redirect('/editproductos')

  
  }

  export const del = (req,res) =>{
    console.log(req.body)
    products = products.filter(element => element.id != req.body.id)
    res.status(200).redirect('/editproductos')

  }

  export const update = (req,res) =>{
    
    let product = products.find(element => element.id == req.body.id)
    if(req.body.name)  product.name = req.body.name
    if(req.body.price) product.price=req.body.price
    if(req.body.stock) product.stock = req.body.stock
    res.status(200).redirect('/editproductos')
    
  }

