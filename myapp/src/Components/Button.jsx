import React from "react";
import './button.css';

export default function Button(props){
    return(
        <>
            <a href = {props.link} className="button">
                <button className="button">{props.title}</button>
            </a>
        </>
    )
}
