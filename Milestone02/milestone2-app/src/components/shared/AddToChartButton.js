import React from "react"
import chart from "../img/chart.png"

function AddToChartButton() {
    return (
        <a href="#">
            <img className="chart"
            src={chart} alt=""/>
        </a>
    )
}

export default AddToChartButton