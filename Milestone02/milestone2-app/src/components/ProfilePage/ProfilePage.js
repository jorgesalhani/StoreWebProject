import React from 'react'
import ProfileCard from './ProfileCard'
import ProfilePageCSS from './ProfilePage.module.css'
import styled from 'styled-components'

const Form = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
`

function ProfilePage () {
  return (
    <Form className={ProfilePageCSS.profileContent}>
      <h2 style={{ margin: '50px' }}>Minha conta</h2>
      <ProfileCard
        name='Robert Marinho Cruz e Veiga'
        email='rob.veiga@sample.com'
        creditCard='****.****.****.2512'
        user='betomarinho'
        address='Alameda das hortências, 2039'
        birthday='24/06/1993'
      />
      <button className={ProfilePageCSS.editButton}>Editar perfil</button>
    </Form>
  )
}

export default ProfilePage
