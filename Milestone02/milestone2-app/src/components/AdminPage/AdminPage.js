import React, {useContext} from "react"
import {SessionContext} from "../../contexts/SessionContext";
import NavBarCSS from "../shared/NavBar.module.css";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import AdminProductsPage from "./AdminProductsPage";
import AdminClientsPage from "./AdminClientsPage";
import AdminOrdersPage from "./AdminOrdersPage";

class AdminPageNav extends React.Component {
  render () {
      return (
          <nav className={NavBarCSS.NavBar}>
              <ul className={NavBarCSS.ul}>
                  <li className={NavBarCSS.li}><Link to= "/admin/products" style={{ textDecoration: 'none' }}>Produtos</Link></li>
                  <li className={NavBarCSS.li}><Link to= "/admin/clients" style={{ textDecoration: 'none' }}>Clientes</Link></li>
                  <li className={NavBarCSS.li}><Link to= "/admin/orders" style={{ textDecoration: 'none' }}>Pedidos</Link></li>
              </ul>
          </nav>
      )
  }
}

function AdminPage(){
    return (
      <>
        <Router>
          <AdminPageNav/>
          <Switch>
            <Route path='/admin/products' component={AdminProductsPage} />
            <Route path='/admin/clients' component={AdminClientsPage} />
            <Route path='/admin/orders' component={AdminOrdersPage} />
          </Switch>
        </Router>
      </>
    )
}

export default AdminPage