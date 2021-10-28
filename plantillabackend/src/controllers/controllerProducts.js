
export const read = async (req,res)=>{


  
  res.status(200).render('products',{products:products})

}

