import React from "react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./components/header/Header.js"
import HomePage from "./components/homepage/HomePage.js"
import Footer from "./components/footer/Footer.js"
import NavBar from "./components/shared/NavBar.js"

import ProductListPage from "./components/productListPage/ProductListPage.js"
import ProductPage from "./components/ProductPage/ProductPage";

function App() {
    return (
        <>
            <Router>
                <Header />
                <NavBar />
                <Switch>
                    <Route path='/' exact component={HomePage} />
                    <Route path='/product-list' component={ProductListPage} />
                    <Route path='/product-details' component={ProductPage} />
                </Switch>
                <Footer />
            </Router>

        </>
    )
}

export default App