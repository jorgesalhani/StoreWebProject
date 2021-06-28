import React from "react"
import chart from "../img/chart.png"

function AddToCartButton(productId) {

    const addItemToCart = (productId) => {
        console.log(productId)
    }

    return (
        <button onClick={() => console.log(productId)}>
            <img className="chart"
            src={chart} alt=""/>
        </button>
    )
}

export default AddToCartButton