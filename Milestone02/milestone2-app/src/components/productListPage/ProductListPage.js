import React from "react"
import TextBanner from "../shared/TextBanner"
import data from "../../database/db.json";
import CardToBuy from "../shared/CardToBuy";

function ProductListPage(props) {

    let location = props.location.pathname.split('/')
    location = location[location.length - 1]

    function ReturnProductType(productTypeState){
        switch (productTypeState){
            case "cakes":
                return "Bolos"
            case "pies":
                return "Tortas"
            case "cupcakes":
                return "Cupcakes"
            case "vegans":
                return "Veganos"
            case "diet":
                return "Dieta"
            default:
                console.log(`The system does not recognize ${productTypeState} in ProductListPage/ReturnProductType.`)
        }
    }

    function getProductList()
    {
        let prod = data['products'][location]

        return prod.map( product => {
                return <CardToBuy key={product.id} product={product}/>
            }
        )
    }

    return (
        <>
            <TextBanner text={ReturnProductType(location)} color={"#DAC2AB"} />
            <div style={{display: "flex", flexWrap: "wrap"}}>
                {getProductList()}
            </div>
        </>
    )
}

export default ProductListPage