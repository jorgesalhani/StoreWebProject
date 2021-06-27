import React from "react"
import NavMenu from "./NavMenu"
import PresentationBanner from "./PresentationBanner"
import ProductGallery from "./ProductGallery"
import TablePromotions from "./TablePromotions"

function MainContent() {
    return (
        <div>
            <NavMenu />
            <PresentationBanner />
            <ProductGallery />
            <TablePromotions />
        </div>
    )
}

export default MainContent 