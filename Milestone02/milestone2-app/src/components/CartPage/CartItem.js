import React from "react"
import CartItemCSS from "./CartItem.module.css"

function CartItem(props){
    return (
        <div className={CartItemCSS.cartItem}>
            <img className={CartItemCSS.cartImageItem}
                src={props.img} />
            <div className={CartItemCSS.cartInfoItem}>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default CartItem