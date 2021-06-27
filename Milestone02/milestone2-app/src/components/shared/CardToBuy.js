import React from "react";
import CardToBuyCSS from "./CardToBuy.module.css"
import chart from "../img/chart.png"
import AddToChartButton from "./AddToChartButton";

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
                    <AddToChartButton />
                </div>
        </div>
    )
}

export default CardToBuy