import React from 'react'
import './ProfileCard.css'
export default function ProfileCard(props){
    return(
        <>
            <div className="profile-card-box">
                <img src={props.image} alt="Image Not Found" />
                <div>
                    <ul>
                        <li><h1>{props.name}</h1></li>
                        <li>
                            <span>USN : {props.usn}</span>
                            <span>Email : {props.email}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}