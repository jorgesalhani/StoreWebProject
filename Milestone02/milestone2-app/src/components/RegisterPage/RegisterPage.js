import React from "react"
import RegisterCardCSS from "./RegisterCard.module.css"

function RegisterPage(props) {
    return (
        <>
            <h2 className={RegisterCardCSS.titleCard}>Criar conta</h2>
            <div className={RegisterCardCSS.registerCard}>
                <div className={RegisterCardCSS.infoBlock}>
                    <p>Nome</p>
                    <input type="text" />
                    <p>E-mail</p>
                    <input type="text" />
                    <p>Cartão cadastrado</p>
                    <input type="text" />
                </div>
                <div className={RegisterCardCSS.infoBlock}>
                    <p>Usuário</p>
                    <input type="text" />
                    <p>Endereço</p>
                    <input type="text" />
                    <p>Data de nascimento</p>
                    <input type="text" />
                </div>
            </div>
            <button className={RegisterCardCSS.editButton}>
                Registrar
            </button>
        </>
    )
}

export default RegisterPage