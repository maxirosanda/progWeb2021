
let products = [

]

export const view = async (req,res)=>{
  
    res.status(200).render('products',{productosparaver:products})
  
  }

  export const create = async (req,res)=>{
    products.push(req.body)
    console.log(products)
    res.status(200).redirect('/productos')

  
  }

