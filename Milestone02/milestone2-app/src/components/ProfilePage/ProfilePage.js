import React from "react";
import ProfileCard from "./ProfileCard";
import styled from "styled-components";
import NavBarCSS from "../shared/NavBar.module.css";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import OrdersPage from "./OrdersPage";
import PersonalDataPage from "./PersonalDataPage";


const H2 = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  margin: 25px 0px 40px 75px;
`;

class ProfilePageNav extends React.Component {
  render() {
    return  (
      <nav className={NavBarCSS.NavBar}>
        <ul className={NavBarCSS.ul}>
          <li className={NavBarCSS.li}><Link to= "/profile/mydata" style={{ textDecoration: 'none' }}>Meus Dados</Link></li>
          <li className={NavBarCSS.li}><Link to= "/profile/orders" style={{ textDecoration: 'none' }}>Meus Pedidos</Link></li>
        </ul>
      </nav>
    );
  }
}

function ProfilePage() {
  return (
    <>
      <Router>
        <ProfilePageNav/>
        <Switch>
          <Route path='/profile/mydata' component={PersonalDataPage} />
          <Route path='/profile/orders' component={OrdersPage} />
        </Switch>
      </Router>
    </>
  );
}

export default ProfilePage;
