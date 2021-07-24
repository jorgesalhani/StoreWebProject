import {createContext, useState} from "react";
import {NotificationContainer, NotificationManager} from 'react-notifications';

export const SessionContext = createContext({})

export const SessionContextProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [orders, setOrders] = useState([])

    function AddItemToCart(item){
        setCart([...cart, item])
    }

    function CreateOrder(){

        setOrders([...orders, ...cart])
        ClearCart()
    }

    function RemoveItemFromCart(id){
        const filteredCart = cart.filter(
            (cartItem) => cartItem.id !== id
        )
        setCart(filteredCart)
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

    return <SessionContext.Provider value={{cart, orders, AddItemToCart, RemoveItemFromCart, ClearCart, GetCartPrice, CreateOrders: CreateOrder }}>{children}</SessionContext.Provider>
}




