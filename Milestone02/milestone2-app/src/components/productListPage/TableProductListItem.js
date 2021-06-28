import React from "react"
import CardToBuy from "../shared/CardToBuy";

function TableProductListItem(props) {
    return (
            <CardToBuy img={props.img} name={props.name}  description={props.description} price={props.description}/>
    )
}

export default TableProductListItem