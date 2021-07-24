import React, {useContext} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import ProfileCard from "./ProfileCard";
import styled from "styled-components";
import OrderCard from "./OrderCard";
import CartItem from "../CartPage/CartItem";
import {SessionContext} from "../../contexts/SessionContext";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const H2 = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  margin: 25px 0px 40px 75px;
`;

function OrdersPage() {
  const { orders } = useContext(SessionContext)

  function getOrders() {
    if(!orders.length == 0){
      return orders.map((product) => {
        return <OrderCard key={Math.random()} product= {product}/>
      })
    }else{
      return <h1 style={{textAlign: "center"}}>Você não possui compras ainda.</h1>
    }
  }

  return (
    <>
      <H2>Meus Pedidos</H2>
      {getOrders()}
    </>
  );
}

export default OrdersPage;