import React, {useContext} from "react"
import CartPageCSS from "./CartPage.module.css"
import {SessionContext} from "../../contexts/SessionContext";
import CartItem from "./CartItem";
import {Link} from "react-router-dom";




function CartPage(){
    const { cart, RemoveItemFromCart, GetCartPrice, CreateOrders } = useContext(SessionContext)

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
      <>
        <div className={CartPageCSS.cartItems}>
            <h2>Meu carrinho</h2>
            <div style={{margin: "10% 0"}}>
                {getCartItems()}
            </div>

          {/*checa se o carrinho está vazio*/}

          {
            cart.length == 0 ? <></> :

            <div className={CartPageCSS.totalPurchase}>
              Valor total da compra: R$ {GetCartPrice()}
               <Link to= "/profile/orders"> 
                <button style={{
                                marginLeft:"10%",
                                padding: "2%",
                                fontSize: "15px"
                              }} 
                        onClick={ () => {
                            CreateOrders();
                            window.alert("Compra feita com sucesso! Redirecionando para a página de compras realizadas");
                        }
                        }>Confirmar Compra</button> </Link>
            </div>
          }
        </div>
      </>
    )
}

export default CartPage