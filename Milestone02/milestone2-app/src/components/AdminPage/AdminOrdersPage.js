import React from "react";
import MaterialTable from "material-table";

function AdminOrdersPage() {
    const data = [
      { "id": 41 ,
      "client": "Bolo de chocolate", 
      "coments": "Bolo artesanal", 
      "price": 27.99, 
      "sells": 5, 
      "data": "15/07/2020",
      }
    ];
  
    const columns = [
        {
          title: "id",
          field: "id",
        },
        {
          title: "Cliente",
          field: "client",
        },
        {
          title: "Comentários",
          field: "coments",
        },
        {
          title: "Preço",
          field: "price",
        },
        {
          title: "Vendas",
          field: "sells",
        },
        {
          title: "Data",
          field: "data"
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
export default AdminOrdersPage