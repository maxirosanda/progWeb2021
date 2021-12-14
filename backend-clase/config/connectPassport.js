import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import passport from 'passport'
import Local from 'passport-local'
import User from '../src/models/users.js'

mongoose.set('useCreateIndex', true)
const LocalStrategy = Local.Strategy

const isValidPassword = (user, password) => {
  return bcrypt.compareSync(password, user.password)
}
const createHash =(password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
}

export const ConnectPassport = () => {

  passport.use('login', new LocalStrategy({ passReqToCallback: true },
  (req, username, password, done) => {
      User.findOne({ username: username },
            (err, user) => {
          if (err) return done(err)
          if (!user) return done(null, false)
          if (!isValidPassword(user, password)) return done(null, false)
          return done(null, user)
        })
    })
  )

  passport.use('register', new LocalStrategy({ passReqToCallback: true },
     (req, username, password, done) => {

      const findOrCreateUser = () => {
        User.findOne({ username: username },
           (err, user) => {
            if (err) return done(err)
            if (user) {
              return done(null, false)
            } else {
              const newUser = new User()
              newUser.username = username
              newUser.password = createHash(password)
              newUser.name=req.body.name 
              newUser.type="buyer"

              newUser.save((err) => {
                if (err) { throw err }
                return done(null, newUser)
              })
            }
          })
      }
 
      process.nextTick(findOrCreateUser)
    })
  )

  passport.serializeUser((user, done) => {
    done(null, user._id)
  })
  passport.deserializeUser((id, done) => {
    User.findById(id,(err, user) => {
      if (err) {
        console.log(err.stack)
      }
      done(null, user)
    })
  })
}