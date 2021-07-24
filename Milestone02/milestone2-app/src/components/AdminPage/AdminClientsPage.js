import React from "react";
import MaterialTable from "material-table";

function AdminClientsPage() {
    const data = [
      { "id": 1 ,
      "name": "Jorge", 
      "email": "jorge.salhani@vraumail.com", 
      "phone": "(16)996363214", 
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
          title: "Email",
          field: "email",
        },
        {
          title: "Telefone",
          field: "phone",
        },
      ];
      
      return (
          <>
          <MaterialTable
              title="Clientes"
              data={data}
              columns={columns}
              options={{ search: true, paging: false, filtering: true, exportButton: true }}
          />
          </>
      )
  }

export default AdminClientsPage