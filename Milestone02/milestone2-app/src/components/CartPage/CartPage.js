import React, {useContext} from "react"
import CartPageCSS from "./CartPage.module.css"
import {SessionContext} from "../../contexts/SessionContext";
import CartItem from "./CartItem";



function CartPage(){
    const { cart, RemoveItemFromCart, GetCartPrice } = useContext(SessionContext)

    function getCartItems(){
        if(!cart.length == 0){
            return cart.map((product) =>{
                return <CartItem key={product.id} product={product} removeFunction={() => RemoveItemFromCart(product.id)}/>
            })
        }else{
            return <div>O seu carrinho está vazio.</div>
        }
    }

    return (
        <div className={CartPageCSS.cartItems}>
            <h2>Meu carrinho</h2>
            <div style={{margin: "10% 0"}}>
                {getCartItems()}
            </div>
            <div>
                Valor total da compra: R${GetCartPrice()}
            </div>
        </div>
    )
}

export default CartPage