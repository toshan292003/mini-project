import React from "react";
import './BlueButton.css'
export default function BlueButton(props){
    return(
        <>
            <button className="BlueButton">{props.Text}</button>
        </>
    )
}