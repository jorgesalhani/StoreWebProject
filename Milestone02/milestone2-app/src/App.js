import React from "react"

import Header from "./components/header/Header.js"
import HomePage from "./components/homepage/HomePage.js"
import Footer from "./components/footer/Footer.js"
import NavBar from "./components/shared/NavBar.js"
import ProfilePage from "./components/profilePage/ProfilePage.js"


import ProductListPage from "./components/productListPage/ProductListPage.js"

// HOMEPAGE
// ========
// function App() {
//     return (
//         <div>
//             <Header />
//             <NavBar />
//             <HomePage />
//             <Footer />
//         </div>
//     )
// }

// PRODUCT LIST PAGE
// ===============
// function App() {
//     return (
//         <div>
//             <Header />
//             <NavBar />
//             <ProductListPage />
//             <Footer />
//         </div>
//     )
// }

// PROFILE PAGE
function App() {
    return (
        <div>
            <Header />
            <ProfilePage />
            <Footer />
        </div>
    )
}
export default App