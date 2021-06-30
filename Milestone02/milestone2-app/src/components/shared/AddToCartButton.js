import React from "react"
import chart from "../img/chart.png"

function AddToCartButton(props) {

    return (
        <button style={{width: "auto",margin:"30px"}}
            onClick={props.onClick}>
            <img  
            className="chart"
            src={chart} alt=""/>
        </button>
    )
}

export default AddToCartButton