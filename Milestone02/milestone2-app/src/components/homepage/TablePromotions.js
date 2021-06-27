import React from "react"
import TableItem from "./TableItem"

function TablePromotions() {
    return (
        <table style={{ tableLayout: "fixed",  borderCollapse: "collapse"}}>
            <tbody>
                <tr>
                    <TableItem img="../img/torta1.png" name="Torta de morango"  description="Amendoim e Geleia de Amêndoas" imgSide="left"/>
                </tr>
                <tr>
                    <TableItem img="../img/torta1.png" name="Torta de morango"  description="Amendoim e Geleia de Amêndoas" imgSide="right"/>
                </tr>
                <tr>
                    <TableItem img="../img/torta1.png" name="Torta de morango"  description="Amendoim e Geleia de Amêndoas" imgSide="left"/>
                </tr>
                <tr>
                    <TableItem img="../img/torta1.png" name="Torta de morango"  description="Amendoim e Geleia de Amêndoas" imgSide="right"/>
                </tr>
            </tbody>
        </table>
    )
}

export default TablePromotions