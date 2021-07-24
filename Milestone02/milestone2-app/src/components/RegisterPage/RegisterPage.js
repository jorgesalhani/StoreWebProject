import React from "react"
import RegisterCardCSS from "./RegisterCard.module.css"
import NavBar from "../shared/NavBar";

function RegisterPage(props) {
    return (
        <>
            <NavBar />
            <h2 className={RegisterCardCSS.titleCard}>Criar conta</h2>
            <div className={RegisterCardCSS.registerCard}>
                <div className={RegisterCardCSS.infoBlock}>
                    <p>Nome</p>
                    <input className="NAME" type="text" />
                    <p>E-mail</p>
                    <input className="EMAIL" type="text" />
                    <p>Cartão cadastrado</p>
                    <input className="CCARD" type="text" />
                </div>
                <div className={RegisterCardCSS.infoBlock}>
                    <p>Usuário</p>
                    <input className="USER" type="text" />
                    <p>Endereço</p>
                    <input className="ADDRESS" type="text" />
                    <p>Data de nascimento</p>
                    <input className="BDAY" type="text" />
                </div>
            </div>
            
            <button className={RegisterCardCSS.editButton}
                    onClick={() => {
                        console.log('test')
                        RegisterProfile(
                            document.getElementsByClassName("NAME")[0].value,
                            document.getElementsByClassName("EMAIL")[0].value,
                            document.getElementsByClassName("CCARD")[0].value,
                            document.getElementsByClassName("USER")[0].value,
                            document.getElementsByClassName("ADDRESS")[0].value,
                            document.getElementsByClassName("BDAY")[0].value
                            )
                        }}>
                Registrar
            </button>
        </>
    )
}

async function RegisterProfile(name_, email_, ccard_, user_, add_, bday_) {
    let jsonFileDB = require("../../database/db.json")
    let formFills = {
        name: name_,
        email: email_,
        ccard: ccard_,
        user: user_,
        add: add_,
        bday: bday_
    }
    console.log(formFills)

    // let stringJson = JSON.stringify(formFills)
    // jsonFileDB.usersLogs.writeFile(stringJson)
}


export default RegisterPage