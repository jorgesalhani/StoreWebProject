import React from "react"
import PresentationBannerCSS from "./PresentationBanner.module.css"
import '../../style.css'

function PresentationBanner() {
    return (
        <div className={PresentationBannerCSS.pesentationBanner}>
            <img className={PresentationBannerCSS.presentationPicture}
                 src="../img/torta1.png" alt=""></img>
            <h2>Feitos com amor para você!</h2>
        </div>
    )
}

export default PresentationBanner