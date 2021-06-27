import React from "react"
import cakeshop from "../img/cakeshop.jpg"
import chart from "../img/chart.png"
import profile from "../img/profile.png"
import "./Header.css"

function Header() {
    return (
        <header>
        <img className="logo"
        src={cakeshop} alt="" />

        <input type="text"
               placeholder="O que você precisa?" />

        <img className="chart"
        src={chart} alt="" />


        <img className="profile"
        src={profile} alt="" />

        </header>
    )
}

export default Header