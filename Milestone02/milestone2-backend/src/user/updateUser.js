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

  const updatedUser = await User.findOneAndUpdate({ _id: req.user.id }, patch, (err, user) => {
    if (err) console.error('product update query')
    return user
  })
  return updatedUser
}

module.exports.updateUser = updateUser
