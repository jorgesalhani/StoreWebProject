const createError = require('http-errors')

const { Product } = require('../database/schemas')

const insertProduct = async (req) => {
  const {
    name,
    desc,
    imagePath,
    price,
    stock,
    totalSold
  } = req.body

  if (!name) throw createError(400, 'name must be provided')
  if (!desc) throw createError(400, 'desc must be provided')
  if (!imagePath) throw createError(400, 'imagePath must be provided')
  if (!price) throw createError(400, 'price must be provided')
  if (!stock) throw createError(400, 'stock must be provided')

  const foundProduct = await Product.find({ name }, (err, user) => {
    if (err) console.error('register search query')
    return user
  })

  // Product name is UNIQUE KEY
  if (foundProduct.length) {
    console.error('Product already registered')
    throw createError(403, 'Already registered')
  }

  const newProduct = new Product({
    name,
    desc,
    imagePath,
    price,
    stock,
    totalSold
  })

  newProduct.save((err, product) => {
    if (err) console.error('error saving product', product.name, err)
  })

  return {
    id: newProduct._id,
    name,
    desc,
    imagePath,
    price,
    stock,
    totalSold
  }
}

module.exports.insertProduct = insertProduct
