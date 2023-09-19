import React from "react";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../Firebase";
const auth = getAuth(app);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  //handling click button

  const handleClick = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        console.log("signin successfully");
        navigate("/profile");
      })
      .catch((err) => toast.error("Email Or Password is Incorrect"));
  };

  return (
    <div className="loginPage">
      <h1 className="head" style={{ color: "black", marginLeft: "-70px" }}>
        Signin to your <br />
        PopX account
      </h1>
      <p className="para">
        Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit,
      </p>
      <form action="#">
        <div className="col">
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="col">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </form>
      <button
        className="btn"
        style={{ padding: "8px 140px" }}
        onClick={handleClick}
      >
        Login
      </button>
      <ToastContainer />
    </div>
  );
};

export default Login;
