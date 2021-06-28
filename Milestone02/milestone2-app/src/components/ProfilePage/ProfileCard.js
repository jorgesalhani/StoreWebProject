import React from 'react'
import ProfileCardCSS from './ProfileCard.module.css'
import styled from 'styled-components'

const P = styled.p`
  font-size: 1.5em;
`

function ProfileCard (props) {
  return (
    <div className={ProfileCardCSS.profileCard}>
      <div className={ProfileCardCSS.infoBlock}>
        <P>Nome</P>
        <P className={ProfileCardCSS.infoField}>{props.name}</P>
        <P>E-mail</P>
        <P className={ProfileCardCSS.infoField}>{props.email}</P>
        <P>Cartão cadastrado</P>
        <P className={ProfileCardCSS.infoField}>{props.creditCard} </P>
      </div>
      <div className={ProfileCardCSS.infoBlock}>
        <P>Usuário</P>
        <P className={ProfileCardCSS.infoField}>{props.user}</P>
        <P>Endereço</P>
        <P className={ProfileCardCSS.infoField}>{props.address}</P>
        <P>Data de nascimento</P>
        <P className={ProfileCardCSS.infoField}>{props.birthday}</P>
      </div>
    </div>
  )
}

export default ProfileCard
