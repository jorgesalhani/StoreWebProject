const mongoose = require('mongoose')

// User
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  cardnumber: String,
  user: String,
  address: String,
  birthday: String,
  type: String
})

// Product
const productSchema = new mongoose.Schema({
  name: String,
  desc: String,
  imagePath: String,
  price: String,
  stock: Number,
  totalSold: Number
})

// Order
const orderSchema = new mongoose.Schema({
  productId: String,
  clientName: String,
  comment: String,
  pricePaid: String
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
