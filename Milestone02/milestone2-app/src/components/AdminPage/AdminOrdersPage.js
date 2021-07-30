import React from "react";
import MaterialTable from "material-table";

function AdminOrdersPage() {
    const data = [
      { "id": 1 ,
      "client": "Bolo de chocolate", 
      "coments": "Bolo artesanal", 
      "price": 27.99, 
      "sells": 5, 
      "data": "15/07/2020",
      }
    ];
  
      return (
        <table style={{
          width: "100%",
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
            <th>Cliente</th>
            <th>Comentário</th>
            <th>Preço</th>
            <th>Vendas</th>
            <th>Data</th>
          </tr>
          <tr>
            <td>id</td>
            <td>Cliente</td>
            <td>Comentário</td>
            <td>Preço</td>
            <td>Vendas</td>
            <td>Data</td>
          </tr>
        </table>
      )
  }
export default AdminOrdersPage