import React from "react"

import Header from "./components/header/Header.js"
import HomePage from "./components/homepage/HomePage.js"
import Footer from "./components/footer/Footer.js"
import NavBar from "./components/homepage/NavBar.js";

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
