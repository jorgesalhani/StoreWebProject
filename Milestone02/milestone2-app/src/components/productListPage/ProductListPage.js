import React from "react"
import TextBanner from "../shared/TextBanner"
import data from "../../database/db.json";
import CardToBuy from "../shared/CardToBuy";

function ProductListPage(props) {

    function getProductList()
    {
        let prod = data['products'].cakes

        return prod.map( product => {
                return <CardToBuy key={product.id} name={product.name} price={product.price} img={product.img} description={product.description}/>
            }
        )
    }

    return (
        <>
            <TextBanner text={props.location.state} color={"#DAC2AB"} />
            <div style={{display: "flex", flexWrap: "wrap"}}>
                {getProductList()}
            </div>
        </>
    )
}

export default ProductListPage