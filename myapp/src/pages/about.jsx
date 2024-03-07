import React from "react";
import "./about.css"
import ProfileCard from "../Components/ProfileCard";
import Ihthisham from "../Images/Ihthisham.jpg"
import Toshan from "../Images/Toshan.jpg"
import Aman from "../Images/Aman.jpg"
import Dhrumil from "../Images/Dhrumil.jpg"

export default function About(){
    return(
        <>
            <div className="contactbox">
                <div className="contact-header">
                    <h1>THE TEAM</h1>
                </div>
                <p>Members</p>
                <div className="card-group">
                    <ProfileCard image={Toshan} name="Toshan S M" usn="4SF21CS179" email="toshan.21cs@sahyadri.edu.in"></ProfileCard>
                    <ProfileCard image={Ihthisham} name="Ihthisham Rafee" usn="4SF21CS086" email="itsmeihthi2656@gmail.com"></ProfileCard>
                    <ProfileCard image={Aman} name="Aman Aktar" usn="4SF21CS014" email="amanguthigar928@gmail.com"></ProfileCard>
                    <ProfileCard image={Dhrumil} name="Dhrumil Kansagara" usn="4SF21CS041" email="Syamupatel2@gmail.com"></ProfileCard>
                </div>
            </div>
        </>
    )
}