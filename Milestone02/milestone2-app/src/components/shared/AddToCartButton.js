import React from "react"
import chart from "../img/chart.png"
import {Link} from "react-router-dom";

function AddToCartButton() {
    return (
        <button>
            <img className="chart"
            src={chart} alt=""/>
        </button>
    )
}

export default AddToCartButton