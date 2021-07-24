 import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Label = styled.label`
  font-size: 1.5em;
  margin-left: 4em;
`;
const Input = styled.input`
  font-size: 1.5em;
  margin-left: 4em;
  border: 1;
  background-color: light-gray;
  margin-bottom: 25px;
`;

function ProfileCard(props) {
  return (
    <Form onSubmit={e => console.log(e)}>
      <Label htmlFor='name'>Nome</Label>
      <Input placeholder={props.name} />
      <Label htmlFor='email'>E-mail</Label>
      <Input placeholder={props.email} />
      <Label htmlFor='card'>Cartão cadastrado</Label>
      <Input placeholder={props.creditCard} />
      <Label htmlFor='uname'>Usuário</Label>
      <Input placeholder={props.user} />
      <Label htmlFor='address'>Endereço</Label>
      <Input placeholder={props.address} />
      <Label htmlFor='birthday'>Data de nascimento</Label>
      <Input placeholder={props.birthday} />
      <Input value='Submit' type='button' onClick={e => console.log(e)} />
    </Form>
  );
}

export default ProfileCard;
