import React from "react"
import FooterCSS from "./Footer.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer className={FooterCSS.footer}>
            <ul>
                <li className={FooterCSS.li}>
                    <a href="https://www.facebook.com/learnbuildteach/"
                    className="facebook social">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                </li>
                <li className={FooterCSS.li}>
                    <a href="https://www.twitter.com/jamesqquick" className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                </li>
                <li className={FooterCSS.li}>
                <a href="https://www.instagram.com/learnbuildteach"
                    className="instagram social">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer