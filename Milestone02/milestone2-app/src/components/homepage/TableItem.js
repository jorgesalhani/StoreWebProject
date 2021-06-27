import React from "react"

function TableItem(props) {
    return (
        GetHTMLBySide(props)
    )
}

function GetHTMLBySide(props){
    if (props.imgSide === "left"){
        return (
        <>
            <td>
                <img src={props.img} alt="torta1" style={{width: "100%" }}/>
            </td>
            <td style={{textAlign: "center"}}>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
            </td>
        </>
        )
    }else{
        return (
            <>
                <td style={{textAlign: "center"}}>
                    <h3>{props.name}</h3>
                    <p>{props.description}</p>
                </td>
                <td>
                    <img src={props.img} alt="torta1" style={{width: "100%" }}/>
                </td>
            </>
        )
    }
}

export default TableItem