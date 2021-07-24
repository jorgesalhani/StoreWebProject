const createError = require('http-errors')

const { Product } = require('../database/schemas')

// Will allow any input, based on UNIQUE KEY product name, but patches
// only existing fields. Updating product name is not possible.
const updateProduct = async (req) => {
  console.log(req.user._doc)
  const {
    name,
    desc,
    imagePath,
    price,
    stock,
    totalSold,
    type
  } = req.body

  const patch = {}

  if (desc) patch.desc = desc
  if (imagePath) patch.imagePath = imagePath
  if (price) patch.price = price
  if (stock) patch.stock = stock
  if (totalSold) patch.totalSold = totalSold
  if (type) patch.type = type

  if (!name) throw createError(400, 'Name must be provided')

  const updatedProduct = await Product.findOneAndUpdate({ name }, patch, (err, product) => {
    if (err) console.error('product update query')
    return product
  })
  return updatedProduct
}

module.exports.updateProduct = updateProduct
