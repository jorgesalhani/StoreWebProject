const express = require('express')
const routes = express.Router()

const responseHandler = require('./utils/responseHandler')
const { login, register } = require('./auth')
const { insertProduct, getProduct } = require('./product')
const { insertOrder, getOrder } = require('./order')

// Auth
routes.post('/auth/login', responseHandler(login))
routes.post('/auth/register', responseHandler(register))

// Products
routes.post('/product', responseHandler(insertProduct))
routes.get('/product', responseHandler(getProduct))

// Products
routes.post('/order', responseHandler(insertOrder))
routes.get('/order', responseHandler(getOrder))

module.exports = routes

/*
Basicamente, a gente faz apenas alguns poucos pedidos pro back. Eles ocorrem em:
- ProductGallery -> pedindo pelos produtos mais vendidos -> GET /product/best-seller
- TablePromotions -> pedindo pelos produtos em promoção -> GET /product/promo
- ProductListPage -> pedindo por todos os produtos de determinado tipo (bolos, tortas, etc) -> GET /product?type=<type>
- ProductPage -> pedindo por um produto de id específico -> GET /product/<id>
- CartPage -> devemos fazer um post no banco criando um pedido para um determinado usuário.
    Nós implementamos os pedidos de forma que se o usuário compra 3 bolos, serão criados 3 pedidos:
    um pra cada bolo. Se for necessário, aqui guardamos o carrinho da pessoa no banco tb. -> POST /order
- SessionContext -> aqui inicializamos o carrinho (cart) da pessoa e os pedidos dela (oders)
    de acordo com os dados guardados no banco. -> GET /user/context
- PersonalDataPage -> precisamos recuperar os dados do usuário do
    banco para preencher as infos aqui. -> GET /user
*/

/*

*/