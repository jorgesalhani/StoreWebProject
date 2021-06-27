import React from "react"
import TableItem from "../homepage/TableItem";

function ProductPage(props) {
    var productName = props.name
    var productImg = props.img
    var productPrice = props.price
    var productDetails = props.details

    return (
        <div style={{margin: "0% 10%"}}>
            <table style={{ tableLayout: "fixed",  borderCollapse: "collapse"}} >
                <tbody>
                <tr>
                    <td style={{width: "50%"}}>
                        <img src={productImg} alt={productName} style={{width: "100%" }}/>
                    </td>
                    <td style={{textAlign: "center"}}>
                        <h3>{productName}</h3>
                        <p>{productDetails}</p>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <p style={{margin: "0% 10%"}}>{productPrice}</p>
                            <button type="button">Adicionar ao carrinho</button>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ProductPage