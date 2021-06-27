import React from "react";
import CardToBuyCSS from "./CardToBuy.module.css"
import chart from "../img/chart.png"
import AddToCartButton from "./AddToCartButton";
import {Link} from "react-router-dom";

function CardToBuy(props) {
    return (

            <div className={CardToBuyCSS.card}>
                <Link to="/product-details" style={{textDecoration: "None"}}>
                    <img className={CardToBuyCSS.cardImg} src={props.img} alt={props.name}/>
                </Link>
                    <div className={CardToBuyCSS.container}>
                        <h4>{props.name}</h4>
                        <p>{props.description}</p>
                    </div>
                    <div className={CardToBuyCSS.buying}>
                        <p>R$ {props.price}</p>
                        <AddToCartButton />
                    </div>
            </div>

    )
}

export default CardToBuy