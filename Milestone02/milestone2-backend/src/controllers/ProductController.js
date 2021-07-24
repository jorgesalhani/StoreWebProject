require('../database/connection')
const createError = require('http-errors')
const Product = require('../models/ProductModel')

/* ex: /product?skip=0&limit=10 */
/* ex1: /product?fields=name&name=pao&skip=0&limit=10 */
/* ex2: /product?fields=name,id&name=pao&id=2&skip=0&limit=10 */
const getProducts = async (req) => {
  const param = req.query.filters
  const { skip, limit } = req.query.pagination
  if (limit > 100) {
    throw createError(403, 'Forbidden')
  }
  const result = await Product.query().where(param)
    .withGraphFetched('category').withGraphFetched('images').page(skip, limit)
  return result
}

const findProductsById = async (req) => {
  const { id } = req.params
  const result = await Product.query().where({ id }).withGraphFetched('category').withGraphFetched('images')
  if (result.length === 0) {
    throw createError(404, 'Not Found')
  }
  return result[0]
}

/* Only admin */
const createProduct = async (req) => {
  await Product.joiSchema.validateAsync(req.body)
  await Product.query().insert(req.body)
  return 'Success'
}

/* Only admin */
const removeProduct = async (req) => {
  const { id } = req.params
  const affectedRows = await Product.query().deleteById(id)
  if (affectedRows === 0) {
    throw createError(404, 'Id Not Found')
  }
  return 'Success'
}

/* Only admin */
const updateProduct = async (req) => {
  const { id } = req.params
  const keys = Object.keys(Product.joiSchema.describe().keys || {})
  if (keys.length) {
    await Product.joiSchema
      .fork(keys, property => property.optional())
      .validateAsync(req.body)
  }
  return Product.query().findById(id).patch(req.body)
    .then(() => 'Success')
}

module.exports = {
  getProducts,
  createProduct,
  findProductsById,
  removeProduct,
  updateProduct
}
