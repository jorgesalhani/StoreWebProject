import React from "react"
import cakeshop from "../img/cakeshop.jpg"
import chart from "../img/chart.png"
import profile from "../img/profile.png"
import "./Header.css"
import {Link} from "react-router-dom";

function Header() {
    return (
        <header>
            <Link to="/">
                <img className="logo"
                src={cakeshop} alt="" />
            </Link>

            <input type="text"
                   placeholder="O que você precisa?" />

            <Link to="/cart">
                <img className="chart"
                src={chart} alt="" />
            </Link>

            <Link to="/login">
                <img className="profile"
                src={profile} alt="" />
            </Link>

        </header>
    )
}

export default Header