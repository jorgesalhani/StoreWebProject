import React from "react"
import FiltersSidebar from "./FiltersSidebar"
import TableProductList from "./TableProductList"

function MainContent() {
    return (
        <div style={{display:"flex"}}>
            <FiltersSidebar />
            <TableProductList />
        </div>
    )
}

export default MainContent