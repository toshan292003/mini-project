import React from "react";
import "./navbar.css";
export default function Navbar(){
    return(
        <>
            <div className="navbox">
                <div className="navitems">
                    <span>AMBULANCE</span>
                </div>
                <div className="navitems">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="">Tracking</a>
                        </li>
                        <li>
                            <a href="">Bookings</a>
                        </li>
                        <li>
                            <a href="/about">About Us</a>
                        </li>
                        <li>
                            <a href="">Contact Us</a>
                        </li>
                        <li>
                            <a href="">Signin</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}