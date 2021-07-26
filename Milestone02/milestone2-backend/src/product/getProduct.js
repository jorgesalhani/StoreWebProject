const createError = require('http-errors')
const mongoose = require('mongoose')

const { Product } = require('../database/schemas')

const getProduct = async (req) => {
  if (req.params.id && mongoose.isValidObjectId(req.params.id)) {
    return await Product.findById(req.params.id)
  } else if (req.params.id) {
    throw createError(400, 'Bad Product ID')
  }
  const foundProducts = await Product.find({}, (err, product) => {
    if (err) console.error('product search query')
    return product
  })
  return foundProducts
}

const getCake = async (req) => {
  const foundProducts = await Product.find({ type: 'cake' }, (err, product) => {
    if (err) console.error('product search query')
    return product
  })
  return foundProducts
}

const getPie = async (req) => {
  const foundProducts = await Product.find({ type: 'pie' }, (err, product) => {
    if (err) console.error('product search query')
    return product
  })
  return foundProducts
}

module.exports.getProduct = getProduct
module.exports.getCake = getCake
module.exports.getPie = getPie
