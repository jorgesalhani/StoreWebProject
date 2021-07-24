const createError = require('http-errors')

const { Order } = require('../database/schemas')

const insertOrder = async (req) => {
  const {
    productId,
    clientName, // todo: clientId
    comment,
    pricePaid
  } = req.body

  if (!productId) throw createError(400, 'productId must be provided')
  if (!clientName) throw createError(400, 'clientName must be provided')
  if (!pricePaid) throw createError(400, 'price must be provided')

  const newOrder = new Order({
    productId,
    clientName,
    comment,
    pricePaid
  })

  newOrder.save((err, user) => {
    if (err) console.error('error saving order', user.email, err)
  })

  return {
    id: newOrder._id,
    productId,
    clientName,
    comment,
    pricePaid
  }
}

module.exports.insertOrder = insertOrder
