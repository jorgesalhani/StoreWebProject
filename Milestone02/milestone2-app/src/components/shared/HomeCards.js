import React, {useContext} from "react";
import HomeCardsCSS from "./HomeCards.module.css"
import AddToCartButton from "./AddToCartButton";
import {Link} from "react-router-dom";
import {SessionContext} from "../../contexts/SessionContext";
import { withRouter } from 'react-router-dom'

function HomeCards(props) {
    const { AddItemToCart } = useContext(SessionContext)

    let productType = props.location.pathname.split('/')
    productType = productType[productType.length -1]

    return (
            <div className={HomeCardsCSS.card}>
                <p>{props.product.name}</p>
                <Link to={{
                    pathname: "/product-details",
                    search: `?product-type=${productType}&id=${props.product.id}`,
                }} style={{textDecoration: "None"}}>
                    <img className={HomeCardsCSS.cardImg} src={props.product.img} alt={props.product.name}/>
                </Link>
            </div>
    )
}

export default withRouter(HomeCards)