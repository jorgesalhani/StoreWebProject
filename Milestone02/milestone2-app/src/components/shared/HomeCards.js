import React, {useContext} from "react";
import HomeCardsCSS from "./HomeCards.module.css"
import AddToCartButton from "./AddToCartButton";
import {Link} from "react-router-dom";
import {SessionContext} from "../../contexts/SessionContext";
import { withRouter } from 'react-router-dom'

function HomeCards(props) {
    const { AddItemToCart } = useContext(SessionContext)

    return (
            <div className={HomeCardsCSS.card}>
                <Link to={{
                    pathname: "/product-details",
                    search: `?product-type=diet&id=${props.product.id}`,
                }} style={{textDecoration: "None"}}>
                    <p>{props.product.name}</p>
                    <img className={HomeCardsCSS.cardImg} src={props.product.img} alt={props.product.name}/>
                </Link>
            </div>
    )
}

export default withRouter(HomeCards)