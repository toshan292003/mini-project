import React from "react";
import "./about.css"
import ProfileCard from "../Components/ProfileCard";
import Vishal from "../Images/Vishal.jpg"
import Toshan from "../Images/Toshan.jpg"
import Akshith from "../Images/Akshith.jpg"
import Sahil from "../Images/Sahil.jpg"
import Swaroop from "../Images/Swaroop.jpg"

export default function About(){
    return(
        <>
            <div className="contactbox">
                <div className="contact-header">
                    <h1>THE TEAM</h1>
                </div>
                <p>Members</p>
                <div className="card-group">
                    <ProfileCard image={Vishal} name="Vishal Naik" usn="4SF21CY057" email="vishalnaik739@gmail.com"></ProfileCard>
                    <ProfileCard image={Akshith} name="Akshith Rai" usn="4SF21CY007" email="akshithrai2k3@gmail.com"></ProfileCard>
                    <ProfileCard image={Sahil} name="Sahil Rane" usn="4SF21CY036" email="Sahilrane271@gmail.com"></ProfileCard>
                    <ProfileCard image={Swaroop} name="Swaroop" usn="4SF21CY052" email="swaroopym1611@gmail.com"></ProfileCard>
                    <ProfileCard image={Toshan} name="Toshan S M" usn="4sf21cs179" email="toshan.21cs@sahyadri.edu.in"></ProfileCard>
                </div>
            </div>
        </>
    )
}