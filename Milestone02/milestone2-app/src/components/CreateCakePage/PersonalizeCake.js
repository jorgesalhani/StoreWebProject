import React from "react"
import NavBar from "../shared/NavBar";
import TextBanner from "../shared/TextBanner";

function PersonalizeCake() {
  return (
    <>
    <NavBar />
    <div style={{alignContent: "center"}}>
      <TextBanner text="Personalize o seu bolo" />
      <h3 style={{textAlign: "center", margin: "1%"}}>Descreva o seu pedido dos sonhos e logo logo entraremos em contato com você.</h3>
      <div style={{display: "flex", justifyContent: "center" }}>
      <form onSubmit={() => window.alert("O seu pedido foi enviado! Em breve entraremos em contato com você informando mais detalhes. Obrigado pela preferência!!") }>
          <label for="clientName">Qual o seu nome?</label><br/>
          <input type="text" name="clientName" required="true" /><br/>

          <label htmlFor="clientEmail">Qual o seu email?</label><br/>
          <input type="email" name="clientEmail" required="true"/><br/>

          <label htmlFor="order">Qual o seu pedido?</label><br/>
          <textarea required /><br/>

          <input type="submit" value="Enviar pedido" />
      </form>
      </div>
    </div>
    </>
  )
}

export default PersonalizeCake