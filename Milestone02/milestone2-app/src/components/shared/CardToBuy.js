import React, {useContext} from "react";
import CardToBuyCSS from "./CardToBuy.module.css"
import AddToCartButton from "./AddToCartButton";
import {Link} from "react-router-dom";
import {SessionContext} from "../../contexts/SessionContext";
import { withRouter } from 'react-router-dom'

function CardToBuy(props) {
    const { AddItemToCart } = useContext(SessionContext)

    let productType = props.location.pathname.split('/')
    productType = productType[productType.length -1]

    return (
            <div className={CardToBuyCSS.card}>
                <Link to={{
                    pathname: "/product-details",
                    search: `?product-type=${productType}&id=${props.product.id}`,
                }} style={{textDecoration: "None"}}>
                    <img className={CardToBuyCSS.cardImg} src={props.product.img} alt={props.product.name}/>
                </Link>
                <div className={CardToBuyCSS.container}>
                    <h4>{props.product.name}</h4>
                    <p>{props.product.description}</p>
                </div>
                <div className={CardToBuyCSS.buying}>
                    <p>R$ {props.product.price}</p>
                    <AddToCartButton onClick = {() =>{
                      AddItemToCart(props.product)
                      window.alert(props.product.name + " adicionado ao carrinho!")
                    }
                    }/>
                </div>
            </div>
    )
}

export default withRouter(CardToBuy)