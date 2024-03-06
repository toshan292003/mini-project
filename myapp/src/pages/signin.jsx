import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app from "../firebase";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    const auth = getAuth(app);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log(auth.currentUser.email)
      // Redirect or do something else after successful login
      toast.success("Logged in!");
      navigate('/')
    } catch (error) {
        toast.error("This Email doesn't Exist");
      console.error("Error signing in with email and password", error);
    }
  };

  return (
    <>
      <section className="body">
        <div className="signinbox">
          <h2 className="my-5">Please Sign In</h2>
          <div className="inputbox">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="form-control my-4"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button Text="LOGIN" onClick={handleLogin} className="btn btn-primary">LOGIN</button>
          </div>
          <div className="my-4">
            <a href="/Signup" className="mx-3">Forgot Password?</a>
            <a href="/Signup" className="mx-3">Don't have an Account?</a>
          </div>
        </div>
      </section>
    </>
  );
}
