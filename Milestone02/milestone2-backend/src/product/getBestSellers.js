// const createError = require('http-errors')

const { Product } = require('../database/schemas')

const getBestSellers = async (req) => {
  // Todo: implement query based on count of productID in orders
  const foundProducts = await Product.find({ type: 'best-seller' }, (err, product) => {
    if (err) console.error('product search query')
    return product
  })
  return foundProducts
}

module.exports.getBestSellers = getBestSellers
