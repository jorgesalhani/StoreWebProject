import React, {useContext} from "react"
import {SessionContext} from "../../contexts/SessionContext";

function ProductDetails(props) {
    const { AddItemToCart } = useContext(SessionContext)
    return (
        <div style={{margin: "0% 10%"}}>
            <table style={{ tableLayout: "fixed",  borderCollapse: "collapse"}} >
                <tbody>
                <tr>
                    <td style={{width: "50%"}}>
                        <img src={props.product.img} alt={props.product.name} style={{width: "100%" }}/>
                    </td>
                    <td style={{textAlign: "center"}}>
                        <h3>{props.product.name}</h3>
                        <p>{props.product.description}</p>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <p style={{margin: "0% 10%"}}>{props.product.price}</p>
                            <button type="button" onClick={() => AddItemToCart(props.product)}>Adicionar ao carrinho</button>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ProductDetails