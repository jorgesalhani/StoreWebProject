import React from 'react'
import LoginCardCSS from './LoginCard.module.css'
import axios from 'axios'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

class ProfilePageNav extends React.Component {
  render() {
    return  (
      <nav className={LoginCardCSS.NavBar}>
        <ul className={LoginCardCSS.ul}>
          <li className={LoginCardCSS.li}><Link to= "/profile/mydata" style={{ textDecoration: 'none' }}>Meus Dados</Link></li>
          <li className={LoginCardCSS.li}><Link to= "/profile/orders" style={{ textDecoration: 'none' }}>Meus Pedidos</Link></li>
        </ul>
      </nav>
    );
  }
}

function LoginPage (props) {
  return (
    <>
      <ProfilePageNav />
      <h2 className={LoginCardCSS.titleCard}>Login</h2>
      <div className={LoginCardCSS.registerCard}>
        <div className={LoginCardCSS.infoBlock}>
          <p>Nome</p>
          <input className='NAME' type='text' />
          <p>E-mail</p>
          <input className='EMAIL' type='text' />
          <p>User</p>
          <input className='USER' type='text' />
          <p>Senha</p>
          <input className='PASSWORD' type='text' />
        </div>
      </div>

      <button
        className={LoginCardCSS.editButton}
        onClick={() => {
          LoginProfile(
            document.getElementsByClassName('NAME')[0].value,
            document.getElementsByClassName('EMAIL')[0].value,
            document.getElementsByClassName('USER')[0].value,
            document.getElementsByClassName('PASSWORD')[0].value,
          )
        }}
      >
        <p><Link to= "/profile" style={{ textDecoration: 'none' }}>Login</Link></p>
      </button>

      <p style={{
          textAlign: "center",
          marginBottom: "10px"}}>Não tem conta? <Link to= "/register" style={{ textDecoration: 'none' }}>Registrar</Link></p>
    </>
  )
}

async function LoginProfile (name_, email_, ccard_, user_, add_, bday_) {
  const reqData = {
    name: name_,
    email: email_,
    cardnumber: ccard_,
    user: user_,
    address: add_,
    birthday: bday_
  }
  const res = await axios.post('/auth/Login', reqData)
  window.localStorage.setItem('token', res.data)
}

export default LoginPage
