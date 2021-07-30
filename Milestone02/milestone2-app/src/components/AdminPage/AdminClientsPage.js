import React, { useState, useEffect } from 'react';
import axios from "axios"

function AdminClientsPage(props) {
    
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
          <th>Nome</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
        <tr>
          <td>id</td>
          <td>Nome</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
      </table>
    )
  }

export default AdminClientsPage