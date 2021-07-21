import React from "react";
import ProfileCard from "./ProfileCard";
import styled from "styled-components";

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

function PersonalDataPage() {
  return (
    <>
      <Container>
        <H2>Meus dados</H2>
        <Container>
          <ProfileCard
            name="Robert Marinho Cruz e Veiga"
            email="rob.veiga@sample.com"
            creditCard="****.****.****.2512"
            user="betomarinho"
            address="Alameda das hortências, 2039"
            birthday="24/06/1993"
          />
        </Container>
      </Container>
    </>
  );
}

export default PersonalDataPage;