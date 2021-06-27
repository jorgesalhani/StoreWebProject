import React from "react"
import PresentationBanner from "../shared/PresentationBanner"
import ProductDetails from "./ProductDetails";

function ProductPage() {
    return (
        <div>
            {/*<PresentationBanner/>*/}
            <ProductDetails img="../img/torta1.png" name="Torta de morango"  details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." price={12.58} />
        </div>
    )
}

export default ProductPage
