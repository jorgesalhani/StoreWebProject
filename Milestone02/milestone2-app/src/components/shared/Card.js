import React from "react";
import CardCSS from "./Card.module.css"

function Card(props) {
    return (
        <div className={CardCSS.card}>
            <img src={props.img} alt="Torta img"/>
                <div className={CardCSS.container}>
                    <h4>{props.name}</h4>
                    <p>{props.description}</p>
                </div>
        </div>
    )
}

export default Card