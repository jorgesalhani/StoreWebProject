const createError = require('http-errors')

const { User } = require('../database/schemas')
const { sign } = require('./sign')

const login = async (req) => {
  const { email, password } = req.body

  if (!email) throw createError(400, 'email must be provided')
  if (!password) throw createError(400, 'password must be provided')

  const returnedUser = await User.find({ email }, (err, user) => {
    if (err) console.error('error saving', user.email, err)
    return user
  })

  if (!returnedUser[0]) throw createError(404, 'user not found')

  return sign({
    id: returnedUser[0]._id,
    name: returnedUser[0].name,
    email: returnedUser[0].email,
    cardnumber: returnedUser[0].cardnumber,
    user: returnedUser[0].user,
    address: returnedUser[0].address,
    birthday: returnedUser[0].birthday,
    type: 'client'
  })
}

module.exports.login = login
