import React from "react"
import CartItemCSS from "./CartItem.module.css"

function CartItem(props){
    return (
        <div className={CartItemCSS.cartItem}>
            <img className={CartItemCSS.cartImageItem}
                src={props.product.img} />
            <div className={CartItemCSS.cartInfoItem}>
                <h3>{props.product.name}</h3>
                <p>{props.product.description}</p>
            </div>
            <button onClick={props.removeFunction}></button>
        </div>
    )
}

export default CartItem