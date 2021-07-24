// const createError = require('http-errors')

const { Order } = require('../database/schemas')

const getOrder = async (req) => {
  const foundOrders = await Order.find({}, (err, user) => {
    if (err) console.error('order search query')
    return user
  })
  return foundOrders
}

module.exports.getOrder = getOrder
