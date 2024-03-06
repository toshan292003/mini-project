import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase";
import BlueButton from "../Components/BlueButton";
import './signin.css';

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    const auth = getAuth(app);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log(auth.currentUser.email)
      // Redirect or do something else after successful signup
    } catch (error) {
      console.error("Error signing up with email and password", error);
    }
  };

  return (
    <>
      <section className="body">
        <div className="signinbox">
          <h2 className="my-5">Please Sign Up</h2>
          <div className="inputbox">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              className="form-control my-2"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="email"
              className="form-control my-2"
              placeholder="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="form-control my-2"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              className="form-control my-2"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button onClick={handleSignup} className="btn btn-primary">SIGNUP</button>
          </div>
          <div className="my-4">
            <a href="/Signin" className="mx-3">Already have an Account?</a>
          </div>
        </div>
      </section>
    </>
  );
}
