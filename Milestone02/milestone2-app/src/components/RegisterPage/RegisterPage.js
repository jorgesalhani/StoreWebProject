import React from 'react'
import RegisterCardCSS from './RegisterCard.module.css'
import NavBar from '../shared/NavBar'
import axios from 'axios'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function RegisterPage (props) {
  return (
    <>
      <NavBar />
      <h2 className={RegisterCardCSS.titleCard}>Criar conta</h2>
      <div className={RegisterCardCSS.registerCard}>
        <div className={RegisterCardCSS.infoBlock}>
          <p>Nome</p>
          <input className='NAME' type='text' />
          <p>E-mail</p>
          <input className='EMAIL' type='text' />
          <p>Cartão cadastrado</p>
          <input className='CCARD' type='text' />
        </div>
        <div className={RegisterCardCSS.infoBlock}>
          <p>Usuário</p>
          <input className='USER' type='text' />
          <p>Endereço</p>
          <input className='ADDRESS' type='text' />
          <p>Data de nascimento</p>
          <input className='BDAY' type='text' />
        </div>
      </div>

      <button
        className={RegisterCardCSS.editButton}
        onClick={() => {
          RegisterProfile(
            document.getElementsByClassName('NAME')[0].value,
            document.getElementsByClassName('EMAIL')[0].value,
            document.getElementsByClassName('CCARD')[0].value,
            document.getElementsByClassName('USER')[0].value,
            document.getElementsByClassName('ADDRESS')[0].value,
            document.getElementsByClassName('BDAY')[0].value
          )
        }}
      >
        <Link to= "/profile" style={{ textDecoration: 'none' }}>Registrar</Link>
      </button>
    </>
  )
}

async function RegisterProfile (name_, email_, ccard_, user_, add_, bday_) {
  const reqData = {
    name: name_,
    email: email_,
    cardnumber: ccard_,
    user: user_,
    address: add_,
    birthday: bday_
  }
  const res = await axios.post('/auth/register', reqData)
  window.localStorage.setItem('token', res.data)
}

export default RegisterPage
