import React from "react"
import Card from "../shared/Card";
import ProductGalleryCSS from "./ProductGallery.module.css"
function ProductGallery() {
    return (
        <>
        <div style={{display:"flex"}}>
            <Card img="../img/torta1.png" name="Torta de morango"  description="Amendoim e Geleia de Amêndoas"/>
            <Card img="../img/torta1.png" name="Torta de morango"  description="Amendoim e Geleia de Amêndoas"/>
            <Card img="../img/torta1.png" name="Torta de morango"  description="Amendoim e Geleia de Amêndoas"/>
            <Card img="../img/torta1.png" name="Torta de morango"  description="Amendoim e Geleia de Amêndoas"/>
            <Card img="../img/torta1.png" name="Torta de morango"  description="Amendoim e Geleia de Amêndoas"/>
            <Card img="../img/torta1.png" name="Torta de morango"  description="Amendoim e Geleia de Amêndoas"/>
        </div>
        </>
    )
}

export default ProductGallery