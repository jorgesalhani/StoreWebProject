import React, {useContext} from "react"
import {SessionContext} from "../../contexts/SessionContext";

function ProductDetails(props) {
    const { AddItemToCart } = useContext(SessionContext)
    return (
        <div style={{margin: "0% 10%"}}>
            <table style={{ tableLayout: "fixed",  
                            borderCollapse: "collapse",
                            margin: "5%"}} >
                <tbody>
                <tr>
                    <td style={{
                            alignContent: "center",
                            borderRadius: "5px",
                            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                            padding: "20px",
                            textAlign: "center",
                            height: "10%",
                            width: "40%",
                            margin: "100px"
                            }}>
                        <img    src={props.product.img} 
                                alt={props.product.name} 
                                style={{width: "90%",
                                        borderRadius: "5px" }}/>
                    </td>
                    <div style={{
                            alignContent: "center",
                            borderRadius: "5px",
                            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                            margin: "50px",
                            padding: "5px",
                            textAlign: "center",
                            heigh: "100px",
                            width: ""
                            }}>
                        <h3 style={{margin:"10%"}}>{props.product.name}</h3>
                        <p style={{margin:"10%"}}>{props.product.description}</p>
                        <p style={{margin:"5%"}}>R${props.product.price}</p>
                        <button style={{
                                        padding:"2%",
                                        margin: "5%"
                                        }} 
                                type="button" 
                                onClick={() =>{
                                    AddItemToCart(props.product)
                                    window.alert(props.product.name + " adicionado ao carrinho")
                                }
                                }>Adicionar ao carrinho
                        </button>
                    </div>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ProductDetails