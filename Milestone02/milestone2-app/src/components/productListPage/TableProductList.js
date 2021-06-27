import React from "react"
import TableProductListItem from "./TableProductListItem"
import axios from "axios";
import data from "../../database/db.json"
import CardToBuy from "../shared/CardToBuy";
function TableProductList() {

    function getProductList()
    {
        let prod = data['products']

        return prod.map( product => {
            return <CardToBuy key={product.id} name={product.name} price={product.price} img={product.img} description={product.description}/>
            }
        )
    }

    return (
        getProductList()
    )
}

export default TableProductList