import React from "react"
import PresentationBanner from "../shared/PresentationBanner"
import TextBanner from "../shared/TextBanner"
import MainContent from "./MainContent"
import axios from "axios";

function ProductListPage(props) {


    return (
        <div>
            <TextBanner text={props.location.state} color={"#DAC2AB"} />
            <MainContent productType = {props.location.state} />
        </div>
    )
}

export default ProductListPage