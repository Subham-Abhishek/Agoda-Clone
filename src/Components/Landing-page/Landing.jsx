import React, { useContext } from "react";
import { Link } from "react-router-dom";
import IsAuth from "../../Context/Auth";

const Landing = () => {
    const Auth = useContext(IsAuth);
  return (
    <div>
      <Link to="/register">Register</Link>
      <Link to="/login">sign in</Link>
      {
          Auth.isAuth?<h1>Logged in.</h1>:<h1>login</h1>
      }
      
    </div>
  );
};

export default Landing;
