## Back-end HTTP requests

To perform HTTP requests we will be using `curl`

To perform a sample account creation requisition, on a new terminal, run:

```console
curl -X POST -H "Content-Type: application/json" \
    -d '{"name": "myname","user": "myuser","address": "Rua das alquilhonas, 2019","cardnumber": "12345679","birthday": "10/01/1996","lastName": "cria","email": "example@email.com","password": "102030"}' \
localhost:3005/auth/register
```

On the back-end console, you should read the following:

```javascript
saved user {
  _id: 60fe5b8521542024b3138919,
  name: 'myname',
  email: 'example@email.com',
  cardnumber: '12345679',
  user: 'myuser',
  address: 'Rua das alquilhonas, 2019',
  birthday: '10/01/1996',
  type: 'client',
  __v: 0
}
```

## Authorization

Altough authentication isn't enabled by default, this can be tweaked on and off on the index.js file, at the root of this app.

If choosing to operate authenticated, all `/product` calls must follow the [Oauth bearer token request format](https://oauth.net/2/bearer-tokens/).

A sample authenticated request that creates a new product:

```console
curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer <token>" \
    -d '{"name": "myproduct", "desc": "mydesc"}' localhost:3005/product/
```

where `token` is our session token, provided by `/login` (or `/register`) on success responses.

For unauthenticated configuration, simply ignore the heading part of the request.

## Endpoints

Available endpoints are:
post /auth/register
post /auth/login
post /product
patch /product
delete /product
get /product
get /product/cake
get /product/pie
get /product/vegan
get /product/:id
get /product/best-sellers
get /product/promo

All endpoints perform input validation and should provide a useful error message when comunicating with.
