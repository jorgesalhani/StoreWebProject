import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {BrowserRouter as Link} from 'react-router-dom';


function AdminProductsPage () {

  function getProductList(prod) {
    return prod.map(product => {
      return <tr>
                <td>id</td>
                <td>Tipo</td>
                <td>Name</td>
                <td>Descrição</td>
                <td>Imagem</td>
                <td>Preço</td>
                <td>Estoque</td>
                <td>Vendidos</td>
              </tr>
    })
  }

  return (
    <div style={{ textAlign: "center"}}>
      <table style={{
                    width: "95%",
                    textAlign: "center",
                    alignContent: "space-between",
                    borderCollapse: "separate",
                    borderSpacing: "50px 0",
                    wordWrap: "break-word",
                    tableLayout: "fixed",
                    borderSpacing: "0 2em"
                  }}>
        <tr>
            <th>id</th>
            <th>Tipo</th>
            <th>Name</th>
            <th>Descrição</th>
            <th>Imagem</th>
            <th>Preço</th>
            <th>Estoque</th>
            <th>Vendidos</th>
        </tr>
        <tr>
            <td><input className='ID' type='text' /></td>
            <td><input className='TYPE' type='text' /></td>
            <td><input className='NAME' type='text' /></td>
            <td><input className='DESCRIPTION' type='text' /></td>
            <td><input className='IMAGEPATH' type='text' /></td>
            <td><input className='PRICE' type='text' /></td>
            <td><input className='STOCK' type='text' /></td>
            <td><input className='SELLS' type='text' /></td>
          </tr>
      </table>
      <button style={{padding: "10px", margin: "2%"}} onClick={() => {
              RegisterProduct(
                document.getElementsByClassName('ID')[0].value,
                document.getElementsByClassName('TYPE')[0].value,
                document.getElementsByClassName('NAME')[0].value,
                document.getElementsByClassName('DESCRIPTION')[0].value,
                document.getElementsByClassName('IMAGEPATH')[0].value,
                document.getElementsByClassName('PRICE')[0].value,
                document.getElementsByClassName('STOCK')[0].value,
                document.getElementsByClassName('SELLS')[0].value
          )
        }}>Registrar</button>
    </div>
  )
}



async function RegisterProduct (id_,  type_,  name_,  description_,  image_,  price_,  stock_,  sells_) {  const reqData = {
    id: id_,
    type: type_,
    name: name_,
    description: description_,
    image: image_,
    price: price_,
    stock: stock_,
    sells: sells_
  }
  console.log(reqData)
  const res = await axios.post('http://localhost:3000/admin/products', reqData)
  window.localStorage.setItem('token', res.data)
}

export default AdminProductsPage
