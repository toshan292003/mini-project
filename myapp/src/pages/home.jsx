import React ,{useState} from "react";
import "./home.css";
import Button from "../Components/Button";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home () {

    const [locData, setlocData] = useState({
        latitude: '',
        longitude: ''
      });
    
      const PostLoc = async () => {
        try {
          const response = await axios.post('http://localhost:3001/app/location', locData);
          console.log(response.data);
          setlocData({
            latitude: '',
            longitude: ''
          });
          toast.success("Data Inserted Successfully!");
        } catch (error) {
          console.error('Error submitting data:', error);
          toast.error("This Entry Already Exists!");
        }
      };

    const sendLocation = ()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                (position)=>{
                    setlocData({
                        latitude:position.coords.latitude,
                        longitude:position.coords.longitude,
                    })

                    PostLoc();
                    console.log("Lattitude = "+ position.coords.latitude);
                    console.log("Longitude = "+ position.coords.longitude);
                },
                (err)=>{
                    console.log(err.message);
                }
            )
        }
    }
    return (
        <>
            <section className="home-1">
                <div>
                    <h1>
                        ORDER YOUR RESCUE TEAM WITH JUST ONE CLICK
                    </h1>
                    <p>
                    Experience peace of mind with our swift ambulance booking service. Whether it's for you or a loved one, trust us for reliable emergency response, 24/7. Your safety is our priority. Book now.
                    </p>
                    <button onClick={sendLocation}>ORDER RESCUE TEAM</button>
                </div>
                <div className="home-hero-img">
                </div>
            </section>
            <section className="home-2">
                <h2>
                    OUR SERVICES
                </h2>
                <div className="home-2box">
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/128/496/496979.png" alt="" />
                        <h1>Emergency Ambulance</h1>
                        <p>Rapid response and transportation for critical medical situations.</p>
                    </div>
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/128/5828/5828025.png" alt="" />
                        <h1>Specialty Care</h1>
                        <p>For specialized medical needs such as neonatal care, cardiac emergencies.</p>
                    </div>
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/128/9356/9356266.png" alt="" />
                        <h1>Event Medical Services</h1>
                        <p>On-site medical support for events, ensuring the well-being of attendees.</p>
                    </div>
                </div>
                <Button title = "Browse More Services"></Button>
            </section>

            <section className="home-3">
                <h1>what makes it work?</h1>
                <div>
                    <p>When you need urgent medical assistance, our streamlined process ensures quick and efficient service. First, select the type of ambulance service you require, whether it's emergency, non-emergency, or specialty care. Next, provide essential details such as the pickup location and any specific medical needs. Our dispatch team will swiftly process your request and deploy the nearest available ambulance equipped to handle your situation. Once confirmed, our trained professionals will arrive promptly to provide the necessary care and transportation to your desired destination. Rest assured, our seamless process prioritizes your well-being every step of the way.</p>
                </div>
            </section>
            <section className="home-4">
                <h1>get to know us</h1>
                <div>
                    <section>
                        <p>We are a couple of students from Sahyadri College of Engineering and Management, Mangaluru, currently in 5th Semister, 3rd year Engineering who are passionate in Building Websites.
                        We built this website solely to test our Frontend and Basic Backend development Skills.
                        We have used frameworks like React.Js, Styling Sheets like Tailwind for Frontend and Node.Js , Express.Js, MySQL for Backend.</p>
                        <Button title = "ABOUT US" link = "/about"></Button>
                    </section>
                    <section>
                        <img src="https://img.freepik.com/free-vector/gradient-devops-illustration_23-2149373211.jpg?w=1380&t=st=1708356216~exp=1708356816~hmac=1ea948c204eec4e38695c4437d119021ad6897e2c6f42c1bdfc81dc7776e37d0" alt="" />
                    </section>
                </div>
            </section>
        </>
    )
};