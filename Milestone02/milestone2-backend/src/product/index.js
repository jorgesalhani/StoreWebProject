const { insertProduct } = require('./insertProduct')
const { getProduct, getCake, getPie } = require('./getProduct')
const { getPromo } = require('./getPromo')
const { getBestSellers } = require('./getBestSellers')
const { updateProduct } = require('./updateProduct')

module.exports = {
  insertProduct,
  getProduct,
  getBestSellers,
  getPromo,
  updateProduct,
  getCake,
  getPie
}
