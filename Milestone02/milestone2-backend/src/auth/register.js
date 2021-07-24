const createError = require('http-errors')

const { sign } = require('./sign')
const { User } = require('../database/schemas')

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const register = async (req) => {
  const { firstName, lastName, email, password } = req.body

  if (!firstName) throw createError(400, 'firstName must be provided')
  if (!lastName) throw createError(400, 'lastName must be provided')
  if (!email) throw createError(400, 'email must be provided')
  if (!password) throw createError(400, 'password must be provided')

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

  const newUser = new User({ firstName, lastName, email, password })

  newUser.save((err, user) => {
    if (err) console.error('error saving user', user.email, err)
    console.log('user', user)
  })

  return sign({
    id: newUser._id,
    firstName,
    lastName,
    email,
    password,
    type: 'client'
  })
}

module.exports.register = register
