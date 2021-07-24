// const createError = require('http-errors')

const { Product } = require('../database/schemas')

const getProduct = async (req) => {
  const foundProducts = await Product.find({}, (err, product) => {
    if (err) console.error('product search query')
    return product
  })
  return foundProducts
}

module.exports.getProduct = getProduct
