import React from "react"
import TableProductList from "./TableProductList"

function MainContent(props) {
    return (
        <div style={{display:"flex"}}>
            <TableProductList state={props.productType} />
        </div>
    )
}

export default MainContent