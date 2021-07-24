
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

module.exports.sign = payload => jwt.sign({ ...payload }, SECRET, { expiresIn: '1h' })
