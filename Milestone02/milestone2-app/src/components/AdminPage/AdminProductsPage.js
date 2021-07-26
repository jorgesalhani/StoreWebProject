import React from 'react'
import MaterialTable from 'material-table'

function AdminProductsPage () {
  const data = [
    { id: 1, name: "Torta de chocolate", description: "Torta com de chocolate belga, com creme de avelã e gotas de chocolate branco",  price:95.99, img: "https://images.pexels.com/photos/934728/pexels-photo-934728.jpeg?cs=srgb&dl=pexels-eneida-nieves-934728.jpg&fm=jpg", stock: 15, totalSold: 5},
    { id: 2, name: "Torta de morango", description: "Torta artesanal de morango belga, recheado com creme de avelã e gotas de chocolate branco",  price:82.99, img: "https://images.pexels.com/photos/2401561/pexels-photo-2401561.jpeg?cs=srgb&dl=pexels-matheus-gomes-2401561.jpg&fm=jpg", stock: 15, totalSold: 5},
    { id: 3, name: "Torta de baunilha", description: "Torta artesanal de baunilha belga, recheado com creme de avelã e gotas de chocolate branco",  price:82.99, img: "https://images.pexels.com/photos/4110003/pexels-photo-4110003.jpeg?cs=srgb&dl=pexels-polina-tankilevitch-4110003.jpg&fm=jpg", stock: 15, totalSold: 5},
    { id: 4, name: "Torta de brigadeiro", description: "Torta artesanal de limão belga, recheado com creme de avelã e gotas de chocolate branco",  price:82.99, img: "https://images.pexels.com/photos/4110005/pexels-photo-4110005.jpeg?cs=srgb&dl=pexels-polina-tankilevitch-4110005.jpg&fm=jpg", stock: 15, totalSold: 5},
    { id: 5, name: "Torta de fubá", description: "Torta artesanal de fubá belga, recheado com creme de avelã e gotas de chocolate branco",  price:82.99, img: "https://images.pexels.com/photos/4110003/pexels-photo-4110003.jpeg?cs=srgb&dl=pexels-polina-tankilevitch-4110003.jpg&fm=jpg", stock: 15, totalSold: 5},
    { id: 6, name: "Torta de ameixa", description: "Torta artesanal de ameixa belga, recheado com creme de avelã e gotas de chocolate branco",  price:82.99, img: "https://images.pexels.com/photos/704798/pexels-photo-704798.jpeg?cs=srgb&dl=pexels-kristina-paukshtite-704798.jpg&fm=jpg", stock: 15, totalSold: 5},
    { id: 7, name: "Torta de cereja", description: "Torta artesanal de cereja belga, recheado com creme de avelã e gotas de chocolate branco",  price:82.99, img: "https://images.pexels.com/photos/704798/pexels-photo-704798.jpeg?cs=srgb&dl=pexels-kristina-paukshtite-704798.jpg&fm=jpg", stock: 15, totalSold: 5},
    { id: 8, name: "Torta de maracuja", description: "Torta artesanal de maracujá belga, recheado com creme de avelã e gotas de chocolate branco",  price:82.99, img: "https://images.pexels.com/photos/4110001/pexels-photo-4110001.jpeg?cs=srgb&dl=pexels-polina-tankilevitch-4110001.jpg&fm=jpg", stock: 15, totalSold: 5},
    { id: 9, name: "Torta de limão", description: "Torta artesanal de limão belga, recheado com creme de avelã e gotas de chocolate branco",  price:82.99, img: "https://images.pexels.com/photos/8015144/pexels-photo-8015144.jpeg?cs=srgb&dl=pexels-cup-of-couple-8015144.jpg&fm=jpg", stock: 15, totalSold: 5},
    { id: 11, name: "Bolo de chocolate", description: "Bolo artesanal de chocolate belga, recheado com creme de avelã e gotas de chocolate", price: 45.99, img: "https://images.pexels.com/photos/264892/pexels-photo-264892.jpeg?cs=srgb&dl=pexels-pixabay-264892.jpg&fm=jpg", stock: 15, totalSold: 5},
    { id: 12, name: "Bolo de morango", description: "Bolo artesanal de morango belga, recheado com creme de avelã e gotas de chocolate branco", price: 45.99, img: "https://images.pexels.com/photos/7180731/pexels-photo-7180731.jpeg?cs=srgb&dl=pexels-pavel-danilyuk-7180731.jpg&fm=jpg", stock: 15, totalSold: 5},
    { id: 13, name: "Bolo de baunilha", description: "Bolo artesanal de baunilha belga, recheado com creme de avelã e gotas de chocolate branco", price: 45.99, img: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?cs=srgb&dl=pexels-marta-dzedyshko-2067396.jpg&fm=jpg", stock: 20, totalSold: 4},
    { id: 14, name: "Bolo de brigadeiro", description: "Bolo artesanal de brigadeiro belga, recheado com creme de avelã e gotas de chocolate", price: 45.99, img: "https://images.pexels.com/photos/369267/pexels-photo-369267.jpeg?cs=srgb&dl=pexels-markus-spiske-369267.jpg&fm=jpg", stock: 20, totalSold: 4},
    { id: 15, name: "Bolo de fubá", description: "Bolo artesanal de fubá belga, recheado com creme de avelã e gotas de chocolate branco", price: 55.99, img: "https://images.pexels.com/photos/162688/cheesecake-table-dessert-cream-162688.jpeg?cs=srgb&dl=pexels-pixabay-162688.jpg&fm=jpg", stock: 20, totalSold: 4},
    { id: 16, name: "Bolo de ameixa", description: "Bolo artesanal de ameixa belga, recheado com creme de avelã e gotas de chocolate branco", price: 55.99, img: "https://images.pexels.com/photos/4110003/pexels-photo-4110003.jpeg?cs=srgb&dl=pexels-polina-tankilevitch-4110003.jpg&fm=jpg", stock: 20, totalSold: 4},
    { id: 17, name: "Bolo de cereja", description: "Bolo artesanal de cereja belga, recheado com creme de avelã e gotas de chocolate branco", price: 55.99, img: "https://images.pexels.com/photos/2401561/pexels-photo-2401561.jpeg?cs=srgb&dl=pexels-matheus-gomes-2401561.jpg&fm=jpg", stock: 20, totalSold: 4},
    { id: 18, name: "Bolo de limão", description: "Bolo artesanal de limão belga, recheado com creme de avelã e gotas de chocolate branco", price: 55.99, img: "https://images.pexels.com/photos/4110005/pexels-photo-4110005.jpeg?cs=srgb&dl=pexels-polina-tankilevitch-4110005.jpg&fm=jpg", stock: 20, totalSold: 4},
    { id: 19, name: "Bolo de laranja", description: "Bolo artesanal de laranja belga, recheado com creme de avelã e gotas de chocolate branco", price: 55.99, img: "https://images.pexels.com/photos/6479548/pexels-photo-6479548.jpeg?cs=srgb&dl=pexels-tara-winstead-6479548.jpg&fm=jpg", stock: 20, totalSold: 4},
    { id: 21, name: "Cupcake de chocolate", description: "Cupcake artesanal de chocolate belga, recheado com creme de avelã e gotas de chocolate", price: 15.99, img: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?cs=srgb&dl=pexels-marta-dzedyshko-2067396.jpg&fm=jpg", stock: 20, totalSold: 4},
    { id: 22, name: "Cupcake de morango", description: "Cupcake artesanal de morango belga, recheado com creme de avelã e gotas de chocolate branco", price: 15.99, img: "https://images.pexels.com/photos/3992386/pexels-photo-3992386.jpeg?cs=srgb&dl=pexels-cottonbro-3992386.jpg&fm=jpg", stock: 20, totalSold: 4},
    { id: 23, name: "Cupcake de baunilha", description: "Cupcake artesanal de baunilha belga, recheado com creme de avelã e gotas de chocolate branco", price: 15.99, img: "https://images.pexels.com/photos/4109784/pexels-photo-4109784.jpeg?cs=srgb&dl=pexels-polina-tankilevitch-4109784.jpg&fm=jpg", stock: 20, totalSold: 4},
    { id: 24, name: "Cupcake de brigadeiro", description: "Cupcake artesanal de brigadeiro belga, com creme de avelã e gotas de chocolate", price: 15.99, img: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?cs=srgb&dl=pexels-marta-dzedyshko-2067396.jpg&fm=jpg", stock: 20, totalSold: 4},
    { id: 25, name: "Cupcake de ameixa", description: "Cupcake artesanal de ameixa belga, recheado com creme de avelã e gotas de chocolate branco", price: 12.99, img: "https://images.pexels.com/photos/5994864/pexels-photo-5994864.jpeg?cs=srgb&dl=pexels-maksim-goncharenok-5994864.jpg&fm=jpg", stock: 20, totalSold: 4},
    { id: 26, name: "Cupcake de cereja", description: "Cupcake artesanal de cereja belga, recheado com creme de avelã e gotas de chocolate branco", price: 12.99, img: "https://images.pexels.com/photos/2401561/pexels-photo-2401561.jpeg?cs=srgb&dl=pexels-matheus-gomes-2401561.jpg&fm=jpg", stock: 20, totalSold: 4},
    { id: 27, name: "Cupcake de maracuja", description: "Cupcake artesanal de maracujá belga, recheado com creme de avelã e gotas de chocolate branco", price: 12.99, img: "https://images.pexels.com/photos/4109784/pexels-photo-4109784.jpeg?cs=srgb&dl=pexels-polina-tankilevitch-4109784.jpg&fm=jpg", stock: 20, totalSold: 4},
    { id: 28, name: "Cupcake de limão", description: "Cupcake artesanal de limão belga, recheado com creme de avelã e gotas de chocolate branco", price: 12.99, img: "https://images.pexels.com/photos/3992386/pexels-photo-3992386.jpeg?cs=srgb&dl=pexels-cottonbro-3992386.jpg&fm=jpg", stock: 20, totalSold: 20},
    { id: 29, name: "Cupcake de laranja", description: "Cupcake artesanal de laranja belga, recheado com creme de avelã e gotas de chocolate branco", price: 12.99, img: "https://images.pexels.com/photos/5994864/pexels-photo-5994864.jpeg?cs=srgb&dl=pexels-maksim-goncharenok-5994864.jpg&fm=jpg", stock: 20, totalSold: 20},
    { id: 31, name: "Torta de chocolate", description: "Torta com camadas de brownie artesanal de chocolate belga, com creme de avelã e chocolate",  price:95.99, img: "https://images.pexels.com/photos/6479548/pexels-photo-6479548.jpeg?cs=srgb&dl=pexels-tara-winstead-6479548.jpg&fm=jpg", stock: 20, totalSold: 20},
    { id: 32, name: "Torta de morango", description: "Torta artesanal de morango belga, recheado com creme de avelã e gotas de chocolate branco",  price:82.99, img: "https://images.pexels.com/photos/4110005/pexels-photo-4110005.jpeg?cs=srgb&dl=pexels-polina-tankilevitch-4110005.jpg&fm=jpg", stock: 20, totalSold: 20},
    { id: 33, name: "Torta de baunilha", description: "Torta artesanal de baunilha belga, recheado com creme de avelã e gotas de chocolate branco",  price:82.99, img: "https://images.pexels.com/photos/2401561/pexels-photo-2401561.jpeg?cs=srgb&dl=pexels-matheus-gomes-2401561.jpg&fm=jpg", stock: 20, totalSold: 20},
    { id: 34, name: "Torta de brigadeiro", description: "Torta artesanal de limão belga, recheado com creme de avelã e gotas de chocolate branco",  price:82.99, img: "https://images.pexels.com/photos/4110005/pexels-photo-4110005.jpeg?cs=srgb&dl=pexels-polina-tankilevitch-4110005.jpg&fm=jpg", stock: 20, totalSold: 20},
    { id: 35, name: "Torta de fubá", description: "Torta artesanal de fubá belga, recheado com creme de avelã e gotas de chocolate branco",  price:82.99, img: "https://images.pexels.com/photos/264892/pexels-photo-264892.jpeg?cs=srgb&dl=pexels-pixabay-264892.jpg&fm=jpg", stock: 20, totalSold: 20},
    { id: 36, name: "Bolo de ameixa", description: "Bolo artesanal de ameixa belga, recheado com creme de avelã e gotas de chocolate branco", price: 55.99, img: "https://images.pexels.com/photos/3992386/pexels-photo-3992386.jpeg?cs=srgb&dl=pexels-cottonbro-3992386.jpg&fm=jpg", stock: 20, totalSold: 20},
    { id: 37, name: "Bolo de cereja", description: "Bolo artesanal de cereja belga, recheado com creme de avelã e gotas de chocolate branco", price: 55.99, img: "https://images.pexels.com/photos/2401561/pexels-photo-2401561.jpeg?cs=srgb&dl=pexels-matheus-gomes-2401561.jpg&fm=jpg", stock: 20, totalSold: 20},
    { id: 38, name: "Bolo de limão", description: "Bolo artesanal de limão belga, recheado com creme de avelã e gotas de chocolate branco", price: 55.99, img: "https://images.pexels.com/photos/4110005/pexels-photo-4110005.jpeg?cs=srgb&dl=pexels-polina-tankilevitch-4110005.jpg&fm=jpg", stock: 20, totalSold: 20},
    { id: 39, name: "Bolo de laranja", description: "Bolo artesanal de laranja belga, recheado com creme de avelã e gotas de chocolate branco", price: 55.99, img: "https://images.pexels.com/photos/6479548/pexels-photo-6479548.jpeg?cs=srgb&dl=pexels-tara-winstead-6479548.jpg&fm=jpg", stock: 20, totalSold: 20},
    { id: 41, name: "Bolo de chocolate", description: "Bolo artesanal de chocolate belga, recheado com creme de avelã e gotas de chocolate", price: 27.99, img: "https://images.pexels.com/photos/3992386/pexels-photo-3992386.jpeg?cs=srgb&dl=pexels-cottonbro-3992386.jpg&fm=jpg", stock: 20, totalSold: 20},
    { id: 42, name: "Bolo de morango", description: "Bolo artesanal de morango belga, recheado com creme de avelã e gotas de chocolate branco", price: 27.99, img: "https://images.pexels.com/photos/2401561/pexels-photo-2401561.jpeg?cs=srgb&dl=pexels-matheus-gomes-2401561.jpg&fm=jpg", stock: 20, totalSold: 20},
    { id: 43, name: "Bolo de baunilha", description: "Bolo artesanal de baunilha belga, recheado com creme de avelã e gotas de chocolate branco", price: 27.99, img: "https://images.pexels.com/photos/4110005/pexels-photo-4110005.jpeg?cs=srgb&dl=pexels-polina-tankilevitch-4110005.jpg&fm=jpg", stock: 5, totalSold: 20},
    { id: 44, name: "Bolo de brigadeiro", description: "Bolo artesanal de chocolate belga, recheado com creme de avelã e gotas de chocolate", price: 27.99, img: "https://images.pexels.com/photos/369267/pexels-photo-369267.jpeg?cs=srgb&dl=pexels-markus-spiske-369267.jpg&fm=jpg", stock: 5, totalSold: 20},
    { id: 45, name: "Bolo de fubá", description: "Bolo artesanal de fubá belga, recheado com creme de avelã e gotas de chocolate branco", price: 27.99, img: "https://images.pexels.com/photos/162688/cheesecake-table-dessert-cream-162688.jpeg?cs=srgb&dl=pexels-pixabay-162688.jpg&fm=jpg", stock: 5, totalSold: 20},
    { id: 46, name: "Torta de chocolate", description: "Torta artesanal de chocolate belga, com creme de avelã e gotas de chocolate branco",  price:95.99, img: "https://images.pexels.com/photos/6479548/pexels-photo-6479548.jpeg?cs=srgb&dl=pexels-tara-winstead-6479548.jpg&fm=jpg", stock: 5, totalSold: 20},
    { id: 47, name: "Torta de morango", description: "Torta artesanal de morango belga, recheado com creme de avelã e gotas de chocolate branco",  price:82.99, img: "https://images.pexels.com/photos/4110005/pexels-photo-4110005.jpeg?cs=srgb&dl=pexels-polina-tankilevitch-4110005.jpg&fm=jpg", stock: 5, totalSold: 20},
    { id: 48, name: "Torta de baunilha", description: "Torta artesanal de baunilha belga, recheado com creme de avelã e gotas de chocolate branco",  price:82.99, img: "https://images.pexels.com/photos/4110003/pexels-photo-4110003.jpeg?cs=srgb&dl=pexels-polina-tankilevitch-4110003.jpg&fm=jpg", stock: 5, totalSold: 20},
    { id: 49, name: "Torta de brigadeiro", description: "Torta artesanal de limão belga, recheado com creme de avelã e gotas de chocolate branco",  price:82.99, img: "https://images.pexels.com/photos/2401561/pexels-photo-2401561.jpeg?cs=srgb&dl=pexels-matheus-gomes-2401561.jpg&fm=jpg", stock: 5, totalSold: 20},
  ]

  const columns = [
    {
      title: 'id',
      field: 'id'
    },
    {
      title: 'Name',
      field: 'name'
    },
    {
      title: 'Descrição',
      field: 'description'
    },
    {
      title: 'Imagem url',
      field: 'img'
    },
    {
      title: 'Preço',
      field: 'price'
    },
    {
      title: 'Estoque',
      field: 'stock'
    },
    {
      title: 'Vendidos',
      field: 'totalSold'
    }
  ]

  return (
    <>
      <MaterialTable
        title='Produtos'
        data={data}
        columns={columns}
        options={{ search: true, paging: false, filtering: true, exportButton: true }}
      />
    </>
  )
}

export default AdminProductsPage
