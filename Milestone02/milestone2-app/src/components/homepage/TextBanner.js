import React from "react"
import TextBannerCSS from "./TextBanner.module.css"

function TextBanner(props) {
    return (
        <div className={TextBannerCSS.textBanner} style={{backgroundColor: props.color}}>
            <h2 >{props.text}</h2>
        </div>
    )
}

export default TextBanner