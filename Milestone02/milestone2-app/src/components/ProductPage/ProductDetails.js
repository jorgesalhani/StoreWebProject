import React from "react"

function ProductDetails(props) {

    return (
        <div style={{margin: "0% 10%"}}>
            <table style={{ tableLayout: "fixed",  borderCollapse: "collapse"}} >
                <tbody>
                <tr>
                    <td style={{width: "50%"}}>
                        <img src={props.img} alt={props.name} style={{width: "100%" }}/>
                    </td>
                    <td style={{textAlign: "center"}}>
                        <h3>{props.name}</h3>
                        <p>{props.details}</p>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <p style={{margin: "0% 10%"}}>{props.price}</p>
                            <button type="button">Adicionar ao carrinho</button>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ProductDetails