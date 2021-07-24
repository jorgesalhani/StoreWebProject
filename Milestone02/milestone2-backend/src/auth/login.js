const createError = require('http-errors')

const { User } = require('../database/schemas')
const { sign } = require('./sign')

const login = async (req) => {
  const { email, password } = req.body

  if (!email) throw createError(400, 'email must be provided')
  if (!password) throw createError(400, 'password must be provided')

  const returnedUser = await User.find({ email, password }, (err, user) => {
    if (err) console.error('error saving', user.email, err)
    return user
  })

  return sign(returnedUser[0])
}

module.exports.login = login
