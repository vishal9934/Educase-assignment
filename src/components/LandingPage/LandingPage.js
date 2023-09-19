import React from "react";
import "./LandingPage.css";
//  import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  function clickHandle() {
    navigate("/signup");
  }
  function handleClick() {
    navigate("/login");
  }

  return (
    <div className="landing">
      <h1>Welcome to PopX</h1>
      <p>
        Lorem, ipsum dolor sit amet, <br /> consectetur adipisicing elit,
      </p>
      <button className="blue" onClick={clickHandle}>
        Create Account
      </button>{" "}
      <br />
      <button className="grey" onClick={handleClick}>
        Already Registered? Login
      </button>
    </div>
  );
};

export default LandingPage;
