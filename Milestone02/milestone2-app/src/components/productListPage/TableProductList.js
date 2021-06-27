import React from "react"
import TableProductListItem from "./TableProductListItem"

function TableProductList() {
    return (
        <table style={{ tableLayout: "fixed"}}>
            <tbody>
                <tr>
                    <TableProductListItem img="../img/torta1.png" name="Torta de morango"  description="Amendoim e Geleia de Amêndoas" imgSide="left"/>
                </tr>
                <tr>
                    <TableProductListItem img="../img/torta1.png" name="Torta de morango"  description="Amendoim e Geleia de Amêndoas" imgSide="right"/>
                </tr>
            </tbody>
        </table>
    )
}

export default TableProductList