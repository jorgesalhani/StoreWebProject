const createError = require('http-errors')

const { User } = require('../database/schemas')

// User self update
const updateUser = async (req) => {
  const {
    password,
    cardnumber,
    address,
    birthday
  } = req.body

  const patch = {}

  if (password) patch.password = password
  if (cardnumber) patch.cardnumber = cardnumber
  if (address) patch.address = address
  if (birthday) patch.birthday = birthday

  const updatedProduct = await User.findOneAndUpdate({ _id: req.user._doc._id }, patch, (err, product) => {
    if (err) console.error('product update query')
    return product
  })
  return updatedProduct
}

module.exports.updateUser = updateUser
