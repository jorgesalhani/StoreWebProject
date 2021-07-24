import React from "react";
import MaterialTable from "material-table";

function AdminProductsPage() {
  const data = [
    { "id": 41 ,
    "name": "Bolo de chocolate", 
    "description": "Bolo artesanal", 
    "price": 27.99, 
    "img": "https://images.pexels.com/photos/3992386/pexels-photo-3992386.jpeg?cs=srgb&dl=pexels-cottonbro-3992386.jpg&fm=jpg", 
    "stock": 15,
    "totalSold": 15,
    }
  ];

  const columns = [
      {
        title: "id",
        field: "id",
      },
      {
        title: "Name",
        field: "name",
      },
      {
        title: "Descrição",
        field: "description",
      },
      {
        title: "Imagem url",
        field: "img",
      },
      {
        title: "Preço",
        field: "price",
      },
      {
        title: "Estoque",
        field: "stock",
      },
      {
        title: "Vendidos",
        field: "totalSold"
      }
    ];
    
    return (
        <>
        <MaterialTable
            title="Produtos"
            data={data}
            columns={columns}
            options={{ search: true, paging: false, filtering: true, exportButton: true }}
        />
        </>
    )
}

export default AdminProductsPage

