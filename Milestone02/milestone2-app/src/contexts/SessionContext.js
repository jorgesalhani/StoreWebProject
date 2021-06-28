import {createContext, useState} from "react";

export const SessionContext = createContext({})

export const SessionContextProvider = ({children}) => {

    const [cart, setCart] = useState([])

    function AddItemToCart(item){
        setCart([...cart, item])
    }

    function RemoveItemFromCart(id){
        const filteredCart = cart.filter(
            (cartItem) => cartItem.id !== id
        )
        setCart(filteredCart)
        console.log(cart)
    }

    function ClearCart(){
        setCart([])
    }

    function GetCartPrice(){
        if(cart.length != 0){
            return cart.reduce((sum, prod) => {
                return sum + prod.price
            }, 0)
        }
    }

    return <SessionContext.Provider value={{cart, AddItemToCart, RemoveItemFromCart, ClearCart, GetCartPrice }}>{children}</SessionContext.Provider>
}




