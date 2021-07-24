import React from "react"
import PresentationBanner from "../shared/PresentationBanner"
import ProductGallery from "./ProductGallery.js"
import TablePromotions from "./TablePromotions"
import TextBanner from "../shared/TextBanner";
import NavBar from "../shared/NavBar";
import TableItem from "./TableItem";
import {Link} from "react-router-dom";
import HomeCardsCSS from "../shared/HomeCards.module.css"


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
                    <td className={HomeCardsCSS.card}>
                      <img
                            src="https://images.pexels.com/photos/3983576/pexels-photo-3983576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt="makingCake" 
                            style={{
                                      margin: "7%",
                                      width: "70%",
                                      borderRadius: "10px"
                                    }}/>
                    </td>
                    <td style={{textAlign: "center"}}>
                      <h1>Clique aqui e fale conosco!</h1>
                      <Link to="/createcake"><button 
                            style={{
                                      height: "50px", 
                                      margin:"20%",
                                      fontSize: "15px"
                                  }}> Montar meu bolo </button></Link>
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