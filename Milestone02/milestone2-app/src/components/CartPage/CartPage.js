import React from "react"
import CartItems from "./CartItems.js"
import CartPageCSS from "./CartPage.module.css"

function CartPage(){
    return (
        <div className={CartPageCSS.cartItems}>
            <h2>Meu carrinho</h2>
            <CartItems 
                imgPath="../img/torta1.png"
                name="Torta de morango"
                description="Amendoim e Geleia de Amêndoas"
                quantity="1"
                price=""   
            />
        </div>
    )
}

export default CartPage