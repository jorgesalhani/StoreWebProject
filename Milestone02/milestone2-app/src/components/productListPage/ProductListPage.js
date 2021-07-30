import React, { useState, useEffect } from 'react';
import TextBanner from "../shared/TextBanner"
import CardToBuy from "../shared/CardToBuy";
import axios from "axios"
import NavBar from "../shared/NavBar";



function ProductListPage(props) {

    
    const [prods, setprods] = useState([]);
 
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:3005/product',
            );
            setprods(getProductList(result.data))  
        };
    
        fetchData();
    }, []);

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

    function getProductList(prod)
    {
        // let prod = data['products'][location]


        return prod.map( product => {
                return <CardToBuy key={product.id} product={product}/>
            }
        )
    }

    return (
        <>
            <NavBar />
            <TextBanner text={ReturnProductType(location)} color={"#DAC2AB"} />
            <div style={{display: "flex", flexWrap: "wrap"}}>
                {prods}
            </div>
        </>
    )
}

export default ProductListPage