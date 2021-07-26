const express = require('express')
const routes = express.Router()

const responseHandler = require('./utils/responseHandler')
const { login, register } = require('./auth')
const { updateUser } = require('./user')
const {
  insertProduct,
  getProduct,
  getBestSellers,
  getPromo,
  updateProduct
} = require('./product')
const { insertOrder, getOrder } = require('./order')

// Auth
routes.post('/auth/login', responseHandler(login))
routes.post('/auth/register', responseHandler(register))

// User
routes.patch('/user', responseHandler(updateUser))

// Products
routes.post('/product', responseHandler(insertProduct))
routes.patch('/product', responseHandler(updateProduct))
routes.delete('/product', responseHandler(updateProduct))
routes.get('/product', responseHandler(getProduct))
routes.get('/product/cake', responseHandler(getProduct))
routes.get('/product/pie', responseHandler(getProduct))
routes.get('/product/vegan', responseHandler(getProduct))
routes.get('/product/:id', responseHandler(getProduct))
routes.get('/product/best-sellers', responseHandler(getBestSellers))
routes.get('/product/promo', responseHandler(getPromo))

// Orders
routes.post('/order', responseHandler(insertOrder))
routes.get('/order', responseHandler(getOrder))

module.exports = routes
