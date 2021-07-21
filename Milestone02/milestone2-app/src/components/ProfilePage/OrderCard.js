import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import OrderCardCSS from "./OrderCard.module.css";

function OrderCard(props) {
  return (
    <div className={OrderCardCSS.cartItem}>
      <img className={OrderCardCSS.cartImageItem}
           src={props.product.img} />
      <div className={OrderCardCSS.cartInfoItem}>
        <h3>{props.product.name}</h3>
        <p>{props.product.description}</p>
        <div className={OrderCardCSS.cartPriceAndButton}>
          <p>Preço: {props.product.price}</p>
        </div>
      </div>
    </div>
  );
}


export default OrderCard;