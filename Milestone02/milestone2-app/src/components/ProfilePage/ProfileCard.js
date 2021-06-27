import React from "react"
import ProfileCardCSS from "./ProfileCard.module.css"

function ProfileCard(props) {
    return (
        <div className={ProfileCardCSS.profileCard}>
            <div className={ProfileCardCSS.infoBlock}>
                <p>Nome</p>
                <p className={ProfileCardCSS.infoField}>{props.name}</p>
                <p>E-mail</p>
                <p className={ProfileCardCSS.infoField}>{props.email}</p>
                <p>Cartão cadastrado</p>
                <p className={ProfileCardCSS.infoField}>{props.creditCard}</p>
            </div>
            <div className={ProfileCardCSS.infoBlock}>
                <p>Usuário</p>
                <p className={ProfileCardCSS.infoField}>{props.user}</p>
                <p>Endereço</p>
                <p className={ProfileCardCSS.infoField}>{props.address}</p>
                <p>Data de nascimento</p>
                <p className={ProfileCardCSS.infoField}>{props.birthday}</p>
            </div>
        </div>
    )
}

export default ProfileCard