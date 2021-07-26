const mongoose = require('mongoose')

// User
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  cardnumber: String,
  user: String,
  address: String,
  birthday: String,
  type: String // client / admin
})

// Product
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  type: String, // regular / promo / best-seller / pie / cake...
  img: String,
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
