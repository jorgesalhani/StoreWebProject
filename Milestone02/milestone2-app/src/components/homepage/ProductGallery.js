import React from "react"
import Card from "../shared/Card";
import ProductGalleryCSS from "./ProductGallery.module.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import bestSeller from "./BestSeller.json";
import CardToBuy from "../shared/CardToBuy";
import HomeCards from "../shared/HomeCards";



function ProductGallery(props) {
    const responsive = {
        0: {
            items: 1
        },
        120: {
            items: 2
        },
        780: {
            items: 3
        },
        1024: {
            items: 4
        }
    };

    const best_seller = bestSeller.products

    function getProductList()
    {
        let prod = best_seller["diet"]

        return prod.map( product => {
                return <HomeCards key={product.id} product={product}/>
            }
        )
    }
    
    return (
        <>
        <div style={{display:"flex"}}>
            <AliceCarousel 
                autoPlay 
                autoPlayStrategy="default" 
                autoPlayInterval="3000"
                infinite="true"
                responsive={responsive}
                mouseTracking="true">
                {getProductList()}
            </AliceCarousel>
        </div>
        </>
    )
}

export default ProductGallery