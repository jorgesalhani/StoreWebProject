import React from "react"
import Card from "../shared/Card"
function TableProductListItem(props) {
    return (
        <td style={{display:"flex"}}>
            <Card img="../img/torta1.png" name="Torta de morango"  description="Amendoim e Geleia de Amêndoas"/>
            <Card img="../img/torta1.png" name="Torta de morango"  description="Amendoim e Geleia de Amêndoas"/>
            <Card img="../img/torta1.png" name="Torta de morango"  description="Amendoim e Geleia de Amêndoas"/>
        </td>
    )
}

export default TableProductListItem