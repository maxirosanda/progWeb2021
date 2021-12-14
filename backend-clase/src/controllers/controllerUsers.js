import User from '../models/users.js'

export const viewLogin = (req,res) =>{
    
    res.status(200).render('login')
}
export const login = (req,res) =>{
    
    res.status(200).redirect('/productos')
}
export const viewRegister = (req,res) =>{
    
    res.status(200).render('register')
}

export const register = (req,res) =>{

        res.status(200).redirect('/productos')
   
}

export const logout = async (req, res) => {
    try {
      const user = await User.find({ username: req.user.username }).lean()
      await req.session.destroy(err => {
        if (err) return err
        res.status(200).redirect('/login')
      })
    } catch (e) { console.log(e) }
  }