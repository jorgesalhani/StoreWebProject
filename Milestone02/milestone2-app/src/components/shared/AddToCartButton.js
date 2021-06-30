import React from "react"
import chart from "../img/chart.png"

function AddToCartButton(props) {

    return (
        <button 
            onClick={props.onClick}>
            <img style={{width:"30px"}} 
            className="chart"
            src={chart} alt=""/>
        </button>
    )
}

export default AddToCartButton