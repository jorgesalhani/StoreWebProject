import React from "react"
import Card from "../shared/Card";
import ProductGalleryCSS from "./ProductGallery.module.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import bestSeller from "./BestSeller.json";
import CardToBuy from "../shared/CardToBuy";



function ProductGallery() {
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
                <Card img="../img/torta1.png" name="Torta de morango"  description="Amendoim e Geleia de Amêndoas"/>
                <Card img="../img/torta1.png" name="Torta de morango"  description="Amendoim e Geleia de Amêndoas"/>
                <Card img="../img/torta1.png" name="Torta de morango"  description="Amendoim e Geleia de Amêndoas"/>
                <Card img="../img/torta1.png" name="Torta de morango"  description="Amendoim e Geleia de Amêndoas"/>
                <Card img="../img/torta1.png" name="Torta de morango"  description="Amendoim e Geleia de Amêndoas"/>
            </AliceCarousel>
        </div>
        </>
    )
}

export default ProductGallery