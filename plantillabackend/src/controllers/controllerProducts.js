
export const read = async (req,res)=>{

  const products = [
                     {
                        title:"Desodorante",
                        price:26.6,
                        stock:16
                    },
                    {
                        title:"Perfume",
                        Price:56.5,
                        stock:12
                    }

]
  
  res.status(200).render('products',{products:products})

}

