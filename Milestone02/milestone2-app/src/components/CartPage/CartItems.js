import React from "react"
import CartItem from "./CartItem"
import CartItemsCSS from "./CartItems.module.css"

function CartItems(props) {
    return (
        <div className={CartItemsCSS.content}>
            <div className={CartItemsCSS.cartItems}>
                <CartItem img={props.imgPath} name={props.name}  description={props.description}/>
                <CartItem img={props.imgPath} name={props.name}  description={props.description}/>
            </div>
        </div>
    )
}

export default CartItems