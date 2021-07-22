import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import OrderCardCSS from "./OrderCard.module.css";

function OrderCard(props) {
  return (
    <div className={OrderCardCSS.cartItem}>
      <table style={{ tableLayout:"fixed",
                      borderCollapse: "collapse",
                      margin: "5%"}} >
        <tbody>
          <tr>
              <td style={{
                          alignContent: "center",
                          borderRadius: "5px",
                          textAlign: "center",
                          height: "100%",
                          width: "40%"
                        }}>
                <img className={OrderCardCSS.cartImageItem}
                    src={props.product.img} />
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
                <div className={OrderCardCSS.cartInfoItem}>
                  <h3>{props.product.name}</h3>
                  <p>{props.product.description}</p>
                  <div className={OrderCardCSS.cartPriceAndButton}>
                    <p>Preço: R$ {props.product.price}</p>
                  </div>
                </div>
              </div>
            </tr>
         </tbody> 
      </table>
    </div>
  );
}


export default OrderCard;