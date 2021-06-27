import React from "react";
import CardToBuyCSS from "./CardToBuy.module.css"
import chart from "../img/chart.png"
import AddToCartButton from "./AddToCartButton";

function CardToBuy(props) {
    return (
        <div className={CardToBuyCSS.card}>
            <img src={props.img} alt="Torta img"/>
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