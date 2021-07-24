const mongoose = require('mongoose')
const createError = require('http-errors')
const { User } = require('../database/schemas')

/* ex: /category?&skip=0&limit=10 */
/* ex1: /category?fields=name&name=padaria&skip=0&limit=10 */
/* ex2: /category?fields=name,id&name=padaria&id=2&skip=0&limit=10 */
const getCategories = async (req) => {
  const user = new User({ name: 'admin' })
  console.log(user.name)
}

// const findCategoriesById = async (req) => {
//   const { id } = req.params
//   const result = await Category.query().findById(id)
//   if (result.length === 0) {
//     throw createError(404, 'Not Found')
//   }
//   return result
// }

// /* Only admin */
// const createCategory = async (req) => {
//   await Category.joiSchema.validateAsync(req.body)
//   await Category.query().insert(req.body)
//   return 'Success'
// }

// /* Only admin */
// const removeCategory = async (req) => {
//   const { id } = req.params
//   const affectedRows = await Category.query().deleteById(id)
//   if (affectedRows === 0) {
//     throw createError(404, 'Id Not Found')
//   }
//   return 'Success'
// }

// /* Only admin */
// const updateCategory = async (req) => {
//   const { id } = req.params
//   const categoryKeys = Category.joiSchema.describe().keys || {}
//   const keys = Object.keys(categoryKeys)
//   if (keys.length) {
//     await Category.joiSchema
//       .fork(keys, property => property.optional())
//       .validateAsync(req.body)
//   }
//   return Category.query().findById(id).patch(req.body)
//     .then(() => 'Success')
// }

module.exports = {
  getCategories
}
