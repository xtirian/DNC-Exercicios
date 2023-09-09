import React from "react";
import { Link } from "react-router-dom";
import './index.scss'

const Login = () => {
  return (
    <div className="Login">
      {" "}
      <h1>Login </h1>
      <button>
       <Link to={`/home`}>Home</Link>       
       </button>
    </div>
  );
};

export default Login;
