import React from "react"
import ProfileCard from "./ProfileCard"
import ProfilePageCSS from "./ProfilePage.module.css"

function ProfilePage(){
    return (
        <div className={ProfilePageCSS.profileContent}>
            <h2 style={{margin: "50px"}}>Minha conta</h2>
            <ProfileCard 
                name="Robert Marinho Cruz e Veiga"
                email="rob.veiga@sample.com"
                creditCard="****.****.****.2512"
                user="betomarinho"
                address="Alameda das hortências, 2039"
                birthday="24/06/1993"    
            />
            <button className={ProfilePageCSS.editButton}>
                Editar perfil
            </button>
        </div>
    )
}

export default ProfilePage