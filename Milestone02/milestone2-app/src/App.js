import React from "react"

import Header from "./components/header/Header.js"
import HomePage from "./components/homepage/HomePage.js"
import Footer from "./components/footer/Footer.js"
import NavBar from "./components/shared/NavBar.js"

import ProductListPage from "./components/productListPage/ProductListPage.js"
import ProductPage from "./components/ProductPage/ProductPage";

function App() {
    return (
        <div>
            <Header />
            <NavBar />
            <HomePage />
            <Footer />
        </div>
    )
}

export default App