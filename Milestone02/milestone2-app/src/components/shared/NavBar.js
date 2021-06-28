import React from "react"
import NavBarCSS from  "./NavBar.module.css"
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <nav className={NavBarCSS.NavBar}>
            <ul className={NavBarCSS.ul}>
                <li className={NavBarCSS.li}><Link to={{pathname: "/product-list", state: "Bolos"}} style={{ textDecoration: 'none' }}>Bolos</Link></li>
                <li className={NavBarCSS.li}><Link to={{pathname: "/product-list", state: "Tortas"}} style={{ textDecoration: 'none' }}>Tortas</Link></li>
                <li className={NavBarCSS.li}><Link to={{pathname: "/product-list", state: "Cupcakes"}} style={{ textDecoration: 'none' }}>Cupcakes</Link></li>
                <li className={NavBarCSS.li}><Link to={{pathname: "/product-list", state: "Veganos"}} style={{ textDecoration: 'none' }}>Veganos</Link></li>
                <li className={NavBarCSS.li}><Link to={{pathname: "/product-list", state: "Diet"}} style={{ textDecoration: 'none' }}>Diet</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar