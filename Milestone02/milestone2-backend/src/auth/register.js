const createError = require('http-errors')

const { sign } = require('./sign')
const { User } = require('../database/schemas')

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const register = async (req) => {
  const { name, email, password, cardnumber, user, address, birthday } = req.body

  if (!name) throw createError(400, 'name must be provided')
  if (!email) throw createError(400, 'email must be provided')
  if (!password) throw createError(400, 'email must be provided')
  if (!cardnumber) throw createError(400, 'cardnumber must be provided')
  if (!user) throw createError(400, 'user must be provided')
  if (!address) throw createError(400, 'address must be provided')
  if (!birthday) throw createError(400, 'birthday must be provided')

  const foundUser = await User.find({ email }, (err, user) => {
    if (err) console.error('register search query')
    return user
  })
  if (foundUser.length) {
    console.error('Already registered')
    throw createError(403, 'Already registered')
  }

  if (!emailRegex.test(String(email).toLowerCase())) {
    throw createError(404, 'Email poorly formated')
  }

  const newUser = new User({ name, email, cardnumber, user, address, birthday, type: 'client' })

  newUser.save((err, user) => {
    if (err) console.error('error saving user', user.email, err)
    console.log('saved user', user)
  })

  return sign({
    id: newUser._id,
    name,
    email,
    password,
    cardnumber,
    user,
    address,
    birthday,
    type: newUser.type
  })
}

module.exports.register = register
