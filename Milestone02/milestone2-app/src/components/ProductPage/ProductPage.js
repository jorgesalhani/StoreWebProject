import React, { useContext } from 'react'
import ProductDetails from './ProductDetails'
import { SessionContext } from '../../contexts/SessionContext'
import Data from '../../database/db.json'
import NavBar from '../shared/NavBar'

function ProductPage (props) {
  const { AddItemToCart } = useContext(SessionContext)
  const query = props.location.search.split('&')

  const productType = query[0].split('=')[1]
  const productId = query[1].split('=')[1]

  const products = Data.products[productType]

  let product

  for (let i = 0; i < products.length; i++) {
    if (products[i].id == productId) {
      product = products[i]
      break
    }
  }

  return (
    <>
      <NavBar />
      <div>
        <ProductDetails product={product} />
      </div>
    </>
  )
}

export default ProductPage
