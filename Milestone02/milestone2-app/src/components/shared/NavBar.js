import React from "react"
import NavBarCSS from  "./NavBar.module.css"
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <nav className={NavBarCSS.NavBar}>
            <ul className={NavBarCSS.ul}>
                <li className={NavBarCSS.li}><Link to="/product-list" style={{ textDecoration: 'none' }}>Bolos</Link></li>
                <li className={NavBarCSS.li}><Link to="/product-list" style={{ textDecoration: 'none' }}>Tortas</Link></li>
                <li className={NavBarCSS.li}><Link to="/product-list" style={{ textDecoration: 'none' }}>Cupcakes</Link></li>
                <li className={NavBarCSS.li}><Link to="/product-list" style={{ textDecoration: 'none' }}>Veganos</Link></li>
                <li className={NavBarCSS.li}><Link to="/product-list" style={{ textDecoration: 'none' }}>Diet</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar