
export const buyer = (req,res,next)=>{

    if( req.isAuthenticated()){
        next()
    }else{
        res.status(200).redirect('/login')
    }


}

export const seller = (req,res,next)=>{
    if( req.isAuthenticated() && req.user.type == "seller"){
        next()
    }else{
        res.status(200).redirect('/login')
    }

}