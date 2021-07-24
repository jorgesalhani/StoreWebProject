import React from 'react'
import LoginCardCSS from './LoginCard.module.css'
import NavBar from '../shared/NavBar'
import axios from 'axios'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


function LoginPage (props) {
  return (
    <>
      <NavBar />
      <h2 className={LoginCardCSS.titleCard}>Login</h2>
      <div className={LoginCardCSS.registerCard}>
        <div className={LoginCardCSS.infoBlock}>
          <p>Nome</p>
          <input className='NAME' type='text' />
          <p>E-mail</p>
          <input className='EMAIL' type='text' />
          <p>Cartão cadastrado</p>
          <input className='CCARD' type='text' />
        </div>
        <div className={LoginCardCSS.infoBlock}>
          <p>Usuário</p>
          <input className='USER' type='text' />
          <p>Endereço</p>
          <input className='ADDRESS' type='text' />
          <p>Data de nascimento</p>
          <input className='BDAY' type='text' />
        </div>
      </div>

      <button
        className={LoginCardCSS.editButton}
        onClick={() => {
          LoginProfile(
            document.getElementsByClassName('NAME')[0].value,
            document.getElementsByClassName('EMAIL')[0].value,
            document.getElementsByClassName('CCARD')[0].value,
            document.getElementsByClassName('USER')[0].value,
            document.getElementsByClassName('ADDRESS')[0].value,
            document.getElementsByClassName('BDAY')[0].value
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
//   const res = await axios.post('/auth/Login', reqData)
//   window.localStorage.setItem('token', res.data)
}

export default LoginPage
