import React from "react"
import PurchasePageCSS from "./PurchasePage.module.css"
import Purchases from "./Purchases"
import NavBar from "../shared/NavBar";

function PurchasePage() {
    return (
      <>
        <NavBar />
        <div className={PurchasePageCSS.purchaseContent}>
            <h2 style={{margin: "50px"}}>Minhas compras</h2>
            <div className={PurchasePageCSS.purchaseCard}>
                <div className={PurchasePageCSS.infoBlock}>
                    <Purchases />
                </div>
            </div>
        </div>
      </>
    )
}

export default PurchasePage