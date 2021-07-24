const mongoose = require('mongoose')

// User
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String
})

// Product
const productSchema = new mongoose.Schema({
  name: String
})

// Order
const orderSchema = new mongoose.Schema({
  name: String
})

// Model Objects
const User = mongoose.model('User', userSchema)
const Product = mongoose.model('Product', productSchema)
const Order = mongoose.model('Order', orderSchema)

module.exports = {
  User,
  Product,
  Order
}
