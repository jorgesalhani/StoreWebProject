import React from "react"
import Card from "../shared/CardToBuy"
function TableProductListItem(props) {
    return (
        <td style={{display:"flex"}}>
            <Card img="../img/torta1.png" name="Torta de morango"  description="Amendoim e Geleia de Amêndoas" price="17.50"/>
            <Card img="../img/torta1.png" name="Torta de morango"  description="Amendoim e Geleia de Amêndoas" price="17.50"/>
            <Card img="../img/torta1.png" name="Torta de morango"  description="Amendoim e Geleia de Amêndoas" price="17.50"/>
        </td>
    )
}

export default TableProductListItem