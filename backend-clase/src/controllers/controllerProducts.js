
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
    product.url = product.name + product.id + ".png" 

    const EDFile = req.files.url

    EDFile.mv(`./public/img/products/${product.url}`,err => {
      if(err) return res.status(500).send({ message : err })
      return res.status(200).render("nofound",{message:"no se encontro el Producto"})
      })

    products.push(product)
    console.log(products)
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
    if(req.files){
      const EDFile = req.files.url

    EDFile.mv(`./public/img/products/${product.url}`,err => {
      if(err) return res.status(500).send({ message : err })
      return res.status(200).render("nofound",{message:"no se encontro el Producto"})
      })
    }
    res.status(200).redirect('/editproductos')
    
  }

