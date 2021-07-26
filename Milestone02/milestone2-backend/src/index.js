require('dotenv').config()
require('./database/connection')
const express = require('express')
const qs = require('query-strings-parser')
const jwtMiddleware = require('express-jwt')

const routes = require('./routes')
const SECRET = process.env.SECRET

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(qs({
  default: {
    pagination: {
      skip: process.env.SKIP || 0,
      limit: process.env.LIMIT || 100
    }
  }
}))

// app.use(jwtMiddleware({ secret: SECRET, algorithms: ['HS256'] }).unless({ path: ['/auth/register', '/auth/login'] }))
app.use(routes)

const port = process.env.PORT || 3005
const env = process.env.ENV || 'development'
app.listen(port, () => {
  console.log(env, `(${process.env.npm_package_version})`, '> server listening to port', port)
})
