import React from "react"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from "./components/header/Header.js"
import HomePage from "./components/homepage/HomePage.js"
import Footer from "./components/footer/Footer.js"
import ProductListPage from "./components/productListPage/ProductListPage.js"
import ProductPage from "./components/ProductPage/ProductPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import LoginPage from "./components/LoginPage/LoginPage";
import CartPage from "./components/CartPage/CartPage.js";
import PurchasePage from "./components/PurchasesPage/PurchasePage.js";
import RegisterPage from "./components/RegisterPage/RegisterPage.js";
import {SessionContextProvider} from "./contexts/SessionContext";
import PersonalizeCake from "./components/CreateCakePage/PersonalizeCake";
import AdminPage from "./components/AdminPage/AdminPage";



function App() {

    return (
        <>
            <Router>
                <SessionContextProvider>
                    <Header />
                    <Switch>
                        <Route path='/' exact component={HomePage} />
                        <Route path='/product-list' component={ProductListPage} />
                        <Route path='/product-details' component={ProductPage} />
                        <Route path='/login' component={LoginPage} />
                        <Route path='/cart' component={CartPage} />
                        <Route path='/register' component={RegisterPage} />
                        <Route path='/purchases' component={PurchasePage} />
                        <Route path='/createcake' component={PersonalizeCake} />
                        <Route path='/admin' component={AdminPage} />
                        <Route path='/profile' component={ProfilePage} />
                    </Switch>
                </SessionContextProvider>
                <Footer />
            </Router>

        </> 
    )
}

export default App