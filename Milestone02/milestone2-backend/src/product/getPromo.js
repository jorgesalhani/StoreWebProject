// const createError = require('http-errors')

const { Product } = require('../database/schemas')

const getPromo = async (req) => {
  const foundProducts = await Product.find({ type: 'promo' }, (err, product) => {
    if (err) console.error('product search query')
    return product
  })
  return foundProducts
}

module.exports.getPromo = getPromo
