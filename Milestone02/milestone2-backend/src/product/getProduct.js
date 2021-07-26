// const createError = require('http-errors')

const { Product } = require('../database/schemas')

const getProduct = async (req) => {
  const { id } = req.params

  if (id) return Product.findById(id)
  const foundProducts = await Product.find({}, (err, product) => {
    if (err) console.error('product search query')
    return product
  })
  return foundProducts
}

module.exports.getProduct = getProduct
