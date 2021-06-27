import React from "react"
import NavBarCSS from  "./NavBar.module.css"

function NavBar() {
    return (
        <nav className={NavBarCSS.NavBar}>
            <ul className={NavBarCSS.ul}>
                <li className={NavBarCSS.li}>Bolos</li>
                <li className={NavBarCSS.li}>Tortas</li>
                <li className={NavBarCSS.li}>Cupcakes</li>
                <li className={NavBarCSS.li}>Veganos</li>
                <li className={NavBarCSS.li}>Diet</li>
            </ul>
        </nav>
    )
}

export default NavBar