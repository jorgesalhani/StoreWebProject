import React from "react"
import PresentationBanner from "../shared/PresentationBanner"
import ProductGallery from "./ProductGallery.js"
import TablePromotions from "./TablePromotions"
import TextBanner from "../shared/TextBanner";
import NavBar from "../shared/NavBar";
import TableItem from "./TableItem";
import {Link} from "react-router-dom";

function HomePage() {
    return (
        <div>
            <NavBar />
            <PresentationBanner />
            <TextBanner text={"Mais Vendidos"} color={"#DAC2A8"}/>
            <ProductGallery />
            <TextBanner text={"Monte o seu bolo"} color={"#4B847D"}/>

            <div style={{textAlign: "center", margin: "1%"}}>
                <table style={{ tableLayout: "fixed",  borderCollapse: "collapse", textAlign: "center"}}>
                  <tbody>
                  <tr>
                    <td>
                      <img src="../img/makeCake.png" alt="torta1" style={{width: "100%" }}/>
                    </td>
                    <td style={{textAlign: "center"}}>
                      <h1>Clique aqui e fale conosco!</h1>
                      <Link to="/createcake"><button style={{height: "50px", margin:"20%"}}> Montar meu bolo </button></Link>
                    </td>
                  </tr>
                  </tbody>
                </table>

            </div>

            <TextBanner text={"Promoções"} color={"#DAC2A8"}/>
            <TablePromotions />
        </div>
    )
}

export default HomePage