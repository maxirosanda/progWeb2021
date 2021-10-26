
export const read = async (req,res)=>{

  const products = [
                     {
                        title:"Desodorante",
                        price:26.6,
                        description:"kjgiljgsijhgsiojhgsoij",
                        stock:16
                    },
                    {
                        title:"Perfume",
                        Price:56.5,
                        description:"jghdjghpsog",
                        stock:12
                    },
                    {
                      title:"Perfume 2",
                        Price:562.5,
                        description:"jghdjdsssgghpsog",
                        stock:123
                    }

]
  
  res.status(200).render('products',{products:products})

}

