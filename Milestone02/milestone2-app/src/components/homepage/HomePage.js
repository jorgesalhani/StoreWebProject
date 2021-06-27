import React from "react"
import PresentationBanner from "./PresentationBanner"
import ProductGallery from "./ProductGallery.js"
import TablePromotions from "./TablePromotions"
import TextBanner from "./TextBanner";

function HomePage() {
    return (
        <div>
            <PresentationBanner />
            <TextBanner text={"Mais Vendidos"} color={"#DAC2A8"}/>
            <ProductGallery />
            <TextBanner text={"Promoções"} color={"#4B847D"}/>
            <TablePromotions />
        </div>
    )
}

export default HomePage