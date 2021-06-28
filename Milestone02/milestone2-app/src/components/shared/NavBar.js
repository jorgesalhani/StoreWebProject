import React from "react"
import NavBarCSS from  "./NavBar.module.css"
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <nav className={NavBarCSS.NavBar}>
            <ul className={NavBarCSS.ul}>
                <li className={NavBarCSS.li}><Link to= "/product-list/cakes" style={{ textDecoration: 'none' }}>Bolos</Link></li>
                <li className={NavBarCSS.li}><Link to= "/product-list/pies" style={{ textDecoration: 'none' }}>Tortas</Link></li>
                <li className={NavBarCSS.li}><Link to= "/product-list/cupcakes" style={{ textDecoration: 'none' }}>Cupcakes</Link></li>
                <li className={NavBarCSS.li}><Link to= "/product-list/vegans" style={{ textDecoration: 'none' }}>Veganos</Link></li>
                <li className={NavBarCSS.li}><Link to= "/product-list/diet" style={{ textDecoration: 'none' }}>Diet</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar