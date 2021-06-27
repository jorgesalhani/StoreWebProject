import React from "react"
import PresentationBanner from "../shared/PresentationBanner"
import TextBanner from "../shared/TextBanner"
import MainContent from "./MainContent"

function ProductListPage() {
    return (
        <div>
            <PresentationBanner />
            <TextBanner text={"Tortas"} color={"#DAC2AB"} />
            <MainContent />
        </div>
    )
}

export default ProductListPage